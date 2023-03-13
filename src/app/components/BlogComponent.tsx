import {
  articleResource,
  blogResource,
  newsResource,
} from "@/content/blogsContent";
import React from "react";
import Blog from "../resources/page";
import { useGetBlogs_Public } from "../../pages/api/routes/blogRoute";
import { BlogObject } from "../../lib/types";
import Link from "next/link";
import { page_routes } from "@/lib/pageRoutes";
import CustomSpinner from "./Spinner";
import Image from "next/image";

const BlogComponent = () => {
  const blogContent = blogResource.slice(0, 3);
  const articleContent = articleResource.slice(0, 2);
  const newsContent = newsResource.slice(0, 2);

  const { blogs, isLoading, isError } = useGetBlogs_Public();

  return (
    <div className="font-sourceSans">
      <section className=" container mx-auto px-4 py-6">
        <div className="text-center py-8">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white ">
            From the blog
          </h1>

          <p className="max-w-lg mx-auto mt-4 text-gray-500">
            Find news about us, articles related to the services we provide, and
            other resources on our services.
          </p>
        </div>

        {blogs?.slice(0, 1).map((blog: BlogObject) => (
          <BlogFeatureCard data={blog} key={blog._id} />
        ))}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 py-4 xl:grid-cols-3">
          {blogs || Blog.length > 0 ? (
            blogs
              .slice(1)
              .map((blog: BlogObject) => (
                <BlogCard key={blog._id} data={blog} />
              ))
          ) : (
            <CustomSpinner />
          )}
        </div>
      </section>
    </div>
  );
};
export default BlogComponent;

function BlogFeatureCard(props: { data: BlogObject }) {
  return (
    <section className="w-full px-4 py-8 mx-auto max-w-7xl md:w-4/5">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        <div className="col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-3">
          <Link
            href={`${page_routes.resourceCenter}/content?id=${props.data._id}`}
          >
            <Image
              className="object-cover w-full h-64 mb-5 bg-center rounded"
              src={props.data?.img}
              alt="Blog Card Image"
              width={600}
              height={450}
              loading="lazy"
            />
          </Link>
          <p className="mb-2 text-xs font-semibold tracking-wider text-gray-400 uppercase">
            {props.data?.resource ? props.data?.resource : "Resource"}
          </p>
          <h2 className="mb-2 capitalize text-xl font-bold leading-snug text-gray-900">
            <Link
              href={`${page_routes.resourceCenter}/content?id=${props.data._id}`}
              className="text-gray-900 hover:text-purple-700"
            >
              {props.data?.header}{" "}
            </Link>
          </h2>

          <Link
            className="flex items-center text-gray-700"
            target="_blank"
            href={`${page_routes.resourceCenter}/content?id=${props.data._id}`}
          >
            <div className="">
              <p className="text-sm font-semibold text-gray-900">
                {props.data?.author}
              </p>
              <p className="text-sm text-gray-600">
                {new Date(props.data?.date).toLocaleDateString(undefined, {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
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
        <span className="flex items-center justify-center text-gray-500 uppercase tracking-wider font-bold bg-gray-200 p-2">
          {props.data.resource ? props.data.resource : "Resource"}
        </span>
        <Link
          target="_blank"
          href={`${page_routes.resourceCenter}/content?id=${props.data._id}`}
          className="mt-2 pb-4 text-xl capitalize text-center font-semibold text-gray-800 dark:text-white hover:text-primaryPurple "
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
