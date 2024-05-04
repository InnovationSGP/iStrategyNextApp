"use client";
import {FC, useState, Suspense} from "react";
import {Blogs} from "../../../../models/blogs";
import {useForm} from "react-hook-form";
import {
    blogsRoute,
    UPLOAD_IMAGE,
    useGetBlogs,
} from "@/pages/api/routes/blogRoute";
import toast from "react-hot-toast";
import ErrorComponent from "@/app/components/Error";
import Loading from "@/app/components/Loading";
import {BlogObject} from "@/lib/types";
import {
    EditModal,
    HTMLModal,
    PlainModal,
    PublishModal,
} from "@/app/components/Modal";
import {DeleteModal} from "../../components/Modal";
import dynamic from "next/dynamic";
import RichTextArea from "@/app/components/RichTextArea";
import Image from "next/image";

const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
];

interface BlogManagementProps {
}

const BlogManagement: FC<BlogManagementProps> = () => {
    const {blogs, isError, isLoading} = useGetBlogs();
    if (isError) return <ErrorComponent/>;

    return (
        <div className="container">
            <div className="flex flex-col items-center justify-center">
                <div className="flex items-center">
                    <h2 className="text-xl font-bold p-4">Manage Blogs</h2>
                    <PlainModal
                        header="Add a blog"
                        buttonTWClasses="bg-primaryBlue px-4 py-2 text-white rounded-sm hover:scale-105"
                        buttonText="Add Blog"
                        content={<AddBlog/>}
                    />
                </div>

                <Suspense fallback={<Loading/>}>
                    {isLoading ? (
                        <Loading/>
                    ) : (
                        blogs.map((blog: BlogObject) => (
                            <EachBlog blog={blog} key={blog._id}/>
                        ))
                    )}
                </Suspense>
            </div>
        </div>
    );
};

const EachBlog = (props: { blog: BlogObject }) => {
    const [publishState, setPublishState] = useState<Boolean>(
        props.blog.published
    );
    const {PUBLISH_BLOG, DELETE_BLOG} = blogsRoute();

    const publish = async () => {
        try {
            setPublishState((published) => !published);
            const payload = {published: publishState === true ? false : true};
            console.log(publishState);
            await PUBLISH_BLOG(props.blog._id, payload);
            return toast.success("Blog action is implemented");
        } catch (error) {
            console.log(error);
        }
    };

    const deleteResource = async () => {
        try {
            await DELETE_BLOG(props.blog._id);
            return toast.success("Resource is deleted ");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div
            className="flex flex-col-reverse p-4 sm:flex-row w-full shadow  cursor-pointer hover:bg-gray-100 justify-between items-center">
            <div className="flex flex-col justify-between">
                <div className="py-4 sm:w-24">
          <span className="font-bold py-2 text-xl whitespace-nowrap ">
            {" "}
              <HTMLModal
                  buttonText={props.blog.header}
                  buttonTWClasses="text-primaryBlue font-bold capitalize"
                  content={props.blog.content}
                  header={props.blog.header}
              />{" "}
          </span>{" "}
                    by
                    <span className="text-xs whitespace-nowrap">
            {" "}
                        {props.blog.author} -{" "}
                        <span className="text-xs text-gray-600">
              {props.blog.published ? "Published" : "Not Published"}
            </span>
          </span>
                </div>

                <div className="flex items-center justify-between py-2">
                    <div
                        className={`${
                            publishState === true
                                ? "border-b-2 border-black animate-pulse transition-all duration-300"
                                : null
                        }`}
                    >
                        <PublishModal
                            header="publish this resource"
                            content={
                                <div className="p-6">
                  <span
                      className={`py-2 px-3  cursor-pointer ${
                          publishState === true
                              ? "bg-gray-700 text-white"
                              : "bg-green-700 text-white"
                      }`}
                      onClick={publish}
                  >
                    {publishState === true ? "Unpublish Blog" : "Publish Blog"}
                  </span>
                                </div>
                            }
                        />
                    </div>

                    <EditModal
                        header="Edit this resource"
                        content={<EditBlog id={props.blog._id}/>}
                    />
                    <DeleteModal
                        header="Are you sure you want to delete this resource?"
                        delete={deleteResource}
                    />
                </div>
            </div>
            <div className=" border-l-2 border-gray-400">
                <Image
                    src={props.blog.img}
                    alt={props.blog.header}
                    width={400}
                    height={600}
                    loading="lazy"
                />
            </div>
        </div>
    );
};

const AddBlog: FC<BlogManagementProps> = () => {
    const {handleSubmit, register, reset} = useForm();
    const [image, setImage] = useState(null);
    const [wysiwyg, setWysiwyg] = useState("");

    const handleRichTextEditor = (e: any) => {
        return setWysiwyg(e.target.value);
    };

    const formSubmit = async (data: any) => {
        const file = data.img[0];
        const fileReader = new FileReader();
        fileReader.onload = (e: any) => setImage(e.target.result);
        fileReader.readAsDataURL(file);
        const {POST_BLOG} = blogsRoute();
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "assets");
        const imageURL = await UPLOAD_IMAGE(formData);
        if (!imageURL) {
            return toast.error("Image Upload Failed, Try Again");
        }
        try {
            const payload = {
                author: data.author,
                date: data.date,
                header: data.header,
                content: wysiwyg,
                resource: data.resource,
                img: imageURL,
            };

            console.log(payload);

            await POST_BLOG(payload);
            toast.success("Blog is added");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit(formSubmit)}>
                    <div className="md:flex p-6 flex-col">
                        <div className=" w-full flex flex-col py-2">
                            <label
                                htmlFor="author"
                                className="text-base font-semibold leading-none text-gray-800 py-2"
                            >
                                Author
                            </label>
                            <input
                                tabIndex={0}
                                arial-label="Please input name"
                                className="text-base w-full leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700  bg-gray-100 border rounded border-gray-200 placeholder-gray-400"
                                placeholder="Author"
                                type="text"
                                required
                                autoComplete="author"
                                {...register("author")}
                            />
                        </div>
                        <div className=" w-full flex flex-col py-2">
                            <label
                                htmlFor="resource"
                                className="text-base font-semibold leading-none text-gray-800 py-2"
                            >
                                Resource Type
                            </label>
                            <input
                                tabIndex={0}
                                arial-label="resource"
                                className="text-base w-full leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700  bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                                placeholder="resource"
                                type="text"
                                required
                                autoComplete="resource"
                                {...register("resource")}
                            />
                        </div>
                        <div className=" w-full flex flex-col py-2">
                            <label
                                htmlFor="date"
                                className="text-base font-semibold leading-none text-gray-800 py-2"
                            >
                                Publish Date
                            </label>
                            <input
                                tabIndex={0}
                                arial-label="Please input name"
                                className="text-base w-full leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700  bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                                placeholder="Author"
                                type="date"
                                required
                                autoComplete="date"
                                {...register("date")}
                            />
                        </div>
                    </div>

                    <div className="px-6 ">
                        {/* text area */}
                        <div className=" w-full flex flex-col">
                            <label
                                htmlFor="header"
                                className="text-base font-semibold leading-none text-gray-800 py-2"
                            >
                                Blog Header
                            </label>
                            <input
                                tabIndex={0}
                                arial-label="Please input name"
                                className="text-base w-full leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700  bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                                placeholder="header"
                                type="text"
                                required
                                autoComplete="header"
                                {...register("header")}
                            />
                        </div>
                        <div className="pt-6 border-gray-300">
                            <p className="text-base font-semibold leading-4 text-gray-800">
                                Blog Content
                            </p>
                            <div className="mt-2 border border-gray-300 rounded">
                                <div className="flex flex-wrap items-center px-4 py-3 border-b border-gray-300">
                                    <div
                                        className="flex items-center justify-between ml-2 gap-x-3 lg:ml-auto md:ml-auto w-full">
                                        <div>
                                            {image ? (
                                                <Image
                                                    className="w-24 h-10 bg-primaryBlue text-white rounded shadow"
                                                    src={image}
                                                    alt="blog resource image preview"
                                                    width={400}
                                                    height={600}
                                                    loading="lazy"
                                                />
                                            ) : (
                                                "Image Preview Here"
                                            )}
                                        </div>
                                        <div className=" flex py-2">
                                            <label
                                                htmlFor="img"
                                                className="font-semibold leading-none text-gray-800 py-2 flex text-sm"
                                            >
                                                Upload Image
                                            </label>
                                            <input
                                                tabIndex={0}
                                                arial-label="Upload Image"
                                                className="text-sm w-full leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700  bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                                                type="file"
                                                required
                                                autoComplete="img"
                                                {...register("img")}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <RichTextArea value={wysiwyg} change={setWysiwyg}/>
                            </div>
                        </div>

                        <div
                            className="flex flex-col flex-wrap items-center justify-center w-full p-7 lg:flex-row lg:justify-end md:justify-end gap-x-4 gap-y-4">
                            <button
                                className="bg-primaryBlue rounded hover:bg-indigo-600 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-[144px] w-full whitespace-nowrap ">
                                Save Resource
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

const EditBlog: FC<any> = (props: { id: string }) => {
    const {handleSubmit, register, reset} = useForm();
    const [image, setImage] = useState(null);

    const formSubmit = async (data: any) => {
        const file = data.img[0];
        const fileReader = new FileReader();
        fileReader.onload = (e: any) => setImage(e.target.result);
        fileReader.readAsDataURL(file);
        const {EDIT_BLOG} = blogsRoute();
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "assets");
        const imageURL = await UPLOAD_IMAGE(formData);
        if (!imageURL) {
            return toast.error("Image Upload Failed, Try Again");
        }
        try {
            const payload = {
                author: data.author,
                date: data.date,
                header: data.header,
                content: data.content,
                img: imageURL,
            };
            await EDIT_BLOG(props.id, payload);
            toast.success("Blog is added");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit(formSubmit)}>
                    <div className="md:flex  mt-8 p-6 flex-col">
                        <div className=" w-full flex flex-col py-2">
                            <label
                                htmlFor="author"
                                className="text-base font-semibold leading-none text-gray-800 py-2"
                            >
                                Author
                            </label>
                            <input
                                tabIndex={0}
                                arial-label="Please input name"
                                className="text-base w-full leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700  bg-gray-100 border rounded border-gray-200 placeholder-gray-400"
                                placeholder="Author"
                                type="text"
                                required
                                autoComplete="author"
                                {...register("author")}
                            />
                        </div>
                        <div className=" w-1/2 flex flex-col py-2">
                            <label
                                htmlFor="resource"
                                className="text-base font-semibold leading-none text-gray-800 py-2"
                            >
                                Resource Type
                            </label>
                            <input
                                tabIndex={0}
                                arial-label="resource"
                                className="text-base w-full leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700  bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                                placeholder="resource"
                                type="text"
                                required
                                autoComplete="resource"
                                {...register("resource")}
                            />
                        </div>
                        <div className=" w-1/2 flex flex-col py-2">
                            <label
                                htmlFor="date"
                                className="text-base font-semibold leading-none text-gray-800 py-2"
                            >
                                Publish Date
                            </label>
                            <input
                                tabIndex={0}
                                arial-label="Please input name"
                                className="text-base w-full leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700  bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                                placeholder="Author"
                                type="date"
                                required
                                autoComplete="date"
                                {...register("date")}
                            />
                        </div>
                    </div>

                    <div className="p-6">
                        {/* text area */}
                        <div className=" w-1/2 flex flex-col">
                            <label
                                htmlFor="header"
                                className="text-base font-semibold leading-none text-gray-800 py-2"
                            >
                                Blog Header
                            </label>
                            <input
                                tabIndex={0}
                                arial-label="Please input name"
                                className="text-base w-full leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700  bg-white border rounded border-gray-200 placeholder-gray-100"
                                placeholder="header"
                                type="text"
                                required
                                autoComplete="header"
                                {...register("header")}
                            />
                        </div>
                        <div className="pt-6 border-gray-300">
                            <p className="text-base font-semibold leading-4 text-gray-800">
                                Blog Content
                            </p>
                            <div className="mt-2 border border-gray-300 rounded">
                                <div className="flex flex-wrap items-center px-4 py-3 border-b border-gray-300">
                                    <div
                                        className="flex items-center justify-between ml-2 gap-x-3 lg:ml-auto md:ml-auto w-full">
                                        <div>
                                            {image ? (
                                                <Image
                                                    className="w-24 h-10 bg-primaryBlue text-white rounded shadow"
                                                    src={image}
                                                    alt="blog resource image preview"
                                                    width={400}
                                                    height={600}
                                                    loading="lazy"
                                                />
                                            ) : (
                                                "Image Preview Here"
                                            )}
                                        </div>
                                        <div className=" flex py-2">
                                            <label
                                                htmlFor="img"
                                                className="font-semibold leading-none text-gray-800 py-2 flex text-sm"
                                            >
                                                Upload Image
                                            </label>
                                            <input
                                                tabIndex={0}
                                                arial-label="Upload Image"
                                                className="text-sm w-full leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700  bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                                                type="file"
                                                required
                                                autoComplete="img"
                                                {...register("img")}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <textarea
                                    className="resize-none w-full h-[170px] px-4 py-4 text-base outline-none text-black"
                                    tabIndex={0}
                                    aria-label="leave a message"
                                    role="textbox"
                                    placeholder="Start typing here ..."
                                    defaultValue={" "}
                                    required
                                    {...register("content", {required: true})}
                                />
                            </div>
                        </div>

                        <div
                            className="flex flex-col flex-wrap items-center justify-center w-full p-7 lg:flex-row lg:justify-end md:justify-end gap-x-4 gap-y-4">
                            <button
                                className="bg-primaryBlue rounded hover:bg-indigo-600 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-[144px] w-full whitespace-nowrap ">
                                Save Resource
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default BlogManagement;
