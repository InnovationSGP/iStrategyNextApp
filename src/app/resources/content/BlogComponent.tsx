import {
    articleResource,
    blogResource,
    newsResource,
} from "@/content/blogsContent";
import React from "react";
import {useGetBlogs_Public} from "@/pages/api/routes/blogRoute";
import {BlogObject} from "@/lib/types";
import Link from "next/link";
import {page_routes} from "@/lib/pageRoutes";
import Image from "next/image";

import Loading from "@/app/loading";

const BlogComponent = () => {


    const {blogs, isLoading, isError} = useGetBlogs_Public();

    return (
        <section className="px-4 pt-6 flex flex-col justify-center items-center">
            <div className="p-6  container">
                <p className="py-2 text-primaryPurple font-bold text-2xl">
                    Feature Resource
                </p>

                {blogs?.slice(0, 1).map((blog: BlogObject) => (
                    <BlogFeatureCard data={blog} key={blog._id}/>
                ))}
            </div>

            <div className="px-6 pt-4 container">
                <p className=" py-2 text-primaryPurple font-bold text-2xl">Resources</p>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 py-4 xl:grid-cols-3 justify-items-center  ">
                    {blogs || blogs?.length > 0 ? (
                        blogs
                            ?.slice(1)
                            ?.map((blog: BlogObject) => (
                                <BlogCard key={blog._id} data={blog}/>
                            ))
                    ) : (
                        <Loading/>
                    )}
                </div>
            </div>
        </section>
    );
};
export default BlogComponent;

function BlogFeatureCard(props: { data: BlogObject }) {
    return (
        <section className="w-full shadow ">

            <Link href={`${page_routes.resourceCenter}/content?id=${props.data._id}`}>
                <div className="grid items-center grid-cols-1 md:grid-cols-2 hover:bg-gray-200 hover:cursor-pointer">
                    <div className="order-2 h-64 md:order-1 md:h-full">
                        <Image
                            src={props.data?.img}
                            className="object-cover w-full h-full bg-center"
                            alt={`Picture of ${props.data?.img}`}
                            width={400}
                            height={600}
                        />
                    </div>
                    <div className="order-1 w-full px-4 py-12 mx-auto text-left md:w-3/4 md:py-48 md:order-2 md:px-0">
                        <p className="mb-3 text-gray-500">
                            <time>
                                {new Date(props.data?.date).toLocaleDateString(undefined, {
                                    weekday: "long",
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </time>
                        </p>
                        <h1
                            className="mb-5 text-3xl font-bold cursor-pointer hover:text-primaryPurple text-gray-900 md:leading-tight md:text-4xl capitalize"
                            itemProp="headline"
                            title={props.data?.header}
                        >
                            {props.data?.header}
                        </h1>
                        <Link
                            className="flex items-center text-gray-700"
                            href={`${page_routes.resourceCenter}/content?id=${props.data._id}`}
                        >
                            <div className="avatar"></div>
                            <div className="ml-2">
                                <p className="text-sm font-semibold text-gray-800 capitalize">
                                    {props.data?.author}
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
            </Link></section>
    );
}

function BlogCard(props: { data: BlogObject }) {
    return (
        <div className="cursor-pointer  shadow hover:scale-105 transition ease-in-out bg-white">
            <Image
                className="object-cover object-center w-full h-64 lg:h-80"
                src={props.data.img}
                alt="Blog Card Image"
                width={600}
                height={450}
                loading="lazy"
            />

            <div className="p-6 flex items-start  justify-center flex-col ">
        <span className="flex items-center justify-center text-gray-500 capitalize tracking-wider font-bold ">
          {props.data.resource ? props.data.resource : "Resource"}
        </span>
                <Link
                    target="_blank"
                    href={`${page_routes.resourceCenter}/content?id=${props.data._id}`}
                    className="mt-2 pb-4 text-xl capitalize text-center font-semibold text-primaryBlue hover:text-primaryPurple"
                >
                    {props.data.header}
                </Link>
            </div>
            <div className="flex justify-between items-center">
        <span className="text-xs p-4">
          Published:{" "}
            {new Date(props.data.date).toLocaleDateString(undefined, {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
            })}
        </span>
            </div>
        </div>
    );
}

