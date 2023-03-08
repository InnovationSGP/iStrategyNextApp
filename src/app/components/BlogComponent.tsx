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

const BlogComponent = () => {
  const blogContent = blogResource.slice(0, 3);
  const articleContent = articleResource.slice(0, 2);
  const newsContent = newsResource.slice(0, 2);

  const { blogs, isLoading, isError } = useGetBlogs_Public();

  return (
    <div className="font-sourceSans">
      <section className=" container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 py-4 xl:grid-cols-3">
          {blogs || Blog.length > 0
            ? blogs.map((blog: BlogObject) => (
                <BlogCard key={blog._id} data={blog} />
              ))
            : "There no blogs published yet"}
        </div>
      </section>
    </div>
  );
};
export default BlogComponent;

function BlogCard(props: { data: BlogObject }) {
  return (
    <div className="border-2 border-gray-200 shadow hover:scale-105 transition ease-in-out">
      <img
        className="object-cover object-center w-full h-64 lg:h-80"
        src={props.data.img}
        alt=""
      />

      <div className="p-6 flex items-center justify-center flex-col">
        <span className="flex items-center justify-center text-gray-500 uppercase tracking-wider">
          {props.data.resource}
        </span>

        <h1 className="mt-4 text-xl capitalize text-center font-semibold text-gray-800 dark:text-white ">
          {props.data.header}
        </h1>
        <Link
          target="_blank"
          href={`${page_routes.resourceCenter}/content?id=${props.data._id}`}
          className="inline-block py-4 font-bold text-primaryBlue hover:text-sky-400"
        >
          Learn more
        </Link>
      </div>
    </div>
  );
}
