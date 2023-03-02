"use client";
import { FC, useEffect, useState, Suspense } from "react";
import { Blogs } from "../../../../models/blogs";
import { useForm } from "react-hook-form";
import { blogsRoute, UPLOAD_IMAGE } from "../../../pages/api/routes/blogRoute";
import toast from "react-hot-toast";
import Link from "next/link";

interface BlogManagementProps {}

const BlogManagement: FC<BlogManagementProps> = () => {
  return (
    <div className="container">
      <div>
        <h2 className="text-xl font-bold p-4">Manage Blogs</h2>
        <div className="flex flex-col-reverse sm:flex-row w-full shadow p-4 cursor-pointer hover:bg-gray-100 justify-between items-center">
          <div className="flex flex-col">
            <div>
              <span className="font-bold">Blog Header</span> by{" "}
              <span>author</span>{" "}
            </div>

            <div className="flex items-start py-2">
              <div className="border flex bg-white text-gray-500 shadow rounded">
                <button className="py-3 px-5 hover:bg-gray-300 hover:animate-pulse flex items-center justify-center text-xs focus:outline-none">
                  Publish
                </button>
                <button className="py-3 px-5 hover:bg-gray-300 hover:animate-pulse flex items-center justify-center text-xs focus:outline-none border border-l border-r-0 border-b-0 border-t-0 border-indigo-100">
                  Update
                </button>
                <button className="py-3 px-5 hover:bg-gray-300 hover:animate-pulse flex  items-center justify-center text-xs focus:outline-none border border-l border-r-0 border-b-0 border-t-0 border-indigo-100">
                  View
                </button>
                <button className="py-3 px-5 hover:bg-gray-300 hover:animate-pulse flex items-center justify-center text-xs focus:outline-none border border-l border-r-0 border-b-0 border-t-0 border-indigo-100">
                  Delete
                </button>
              </div>
            </div>
          </div>
          <div className=" border-l-2 border-gray-400">Blog Asset</div>
        </div>
      </div>
    </div>
  );
};

const AddBlag: FC<BlogManagementProps> = () => {
  const { handleSubmit, register, reset } = useForm();
  const [image, setImage] = useState(null);
  const [imageSRC, setImageSRC] = useState(null);

  const formSubmit = async (data: any) => {
    const file = data.img[0];
    const fileReader = new FileReader();
    fileReader.onload = (e: any) => setImage(e.target.result);
    fileReader.readAsDataURL(file);
    const { POST_BLOG } = blogsRoute();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "assets");
    const imageURL = await UPLOAD_IMAGE(formData);
    try {
      const payload = {
        author: data.author,
        date: data.date,
        header: data.header,
        content: data.content,
        img: imageURL,
      };
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
          <div className="md:flex  mt-8 p-6 flex-col">
            <div className=" w-1/2 flex flex-col py-2">
              <label
                htmlFor="author"
                className="text-base font-semibold leading-none text-gray-800 py-2"
              >
                Author
              </label>
              <input
                tabIndex={0}
                arial-label="Please input name"
                className="text-base w-full leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700  bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
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
                  <div className="flex items-center justify-between ml-2 gap-x-3 lg:ml-auto md:ml-auto w-full">
                    <div>
                      {image ? (
                        <img
                          className="w-24 h-10 bg-primaryBlue text-white rounded shadow"
                          src={image}
                          alt="blog resource image preview"
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
                  {...register("content", { required: true })}
                />
              </div>
            </div>

            <div className="flex flex-col flex-wrap items-center justify-center w-full p-7 lg:flex-row lg:justify-end md:justify-end gap-x-4 gap-y-4">
              <button className="bg-primaryBlue rounded hover:bg-indigo-600 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-[144px] w-full whitespace-nowrap ">
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
