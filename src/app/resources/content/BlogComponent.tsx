import React from "react";
import { useGetBlogs_Public } from "@/pages/api/routes/blogRoute";
import { BlogObject } from "@/lib/types";
import Link from "next/link";
import { page_routes } from "@/lib/pageRoutes";
import Image from "next/image";

import { useSinglePost, useWordpressPosts } from "@/lib/gqlQueries";
import { PostCarouselCard } from "./BlogCarouselCard";
import Loading from "@/app/components/Loading";

const BlogComponent = () => {
  // const { blogs, isLoading, isError } = useGetBlogs_Public();
  const { posts, loading } = useWordpressPosts();

  return (
    <section className=" container flex flex-col justify-center items-center">
      {posts?.slice(0, 1).map((post: any) => (
        <PostTrendingNow post={post} key={post.databaseId} />
      ))}

      <div className="px-6 mt-8 container  ">
        {posts || posts?.length > 0 ? (
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 text-primaryBlue">
            {posts?.slice(1).map((post: any) => (
              <PostSectionCard post={post} key={post.databaseId} />
            ))}
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </section>
  );
};
export default BlogComponent;

function PostTrendingNow({ post }: any) {
  return (
    <section className="">
      <div className="container shadow border border-gray-100 p-8">
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center ">
          <div className="px-4">
            <span className="text-blue-600">{post?.author.node.firstName}</span>
            <h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl lg:text-4xl lg:leading-tight dark:text-white">
              <Link
                className="cursor-pointer hover:text-gray-500"
                href={`${page_routes.resourceCenter}/content?id=${post.databaseId}`}
              >
                {post.title}
              </Link>{" "}
            </h1>
            <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">
              {new Date(post.date).toLocaleDateString(undefined, {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}{" "}
            </p>
          </div>

          <div className="relative ml-4">
            <Image
              className="w-full rounded-md"
              src={post.featuredImage?.node.link}
              alt={post.title}
              width={1200}
              height={800}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function PostSectionCard({ post }: any) {
  return (
    <div className="">
      <div className="w-full">
        <Link
          href={`${page_routes.resourceCenter}/content?id=${post.databaseId}`}
        >
          <Image
            src={post.featuredImage?.node.link}
            className="object-cover shadow-sm w-full mb-5 bg-center rounded"
            alt={post.title}
            loading="lazy"
            width={300}
            height={400}
          />
        </Link>
        <div className="py-4">
          <h2 className="mb-2 text-lg text-primaryBlue w-3/4 font-semibold leading-6">
            <Link
              href={`${page_routes.resourceCenter}/content?id=${post.databaseId}`}
              className="text-primaryBlue uppercase transition-all ease-in duration-300 hover:underline hover:text-primaryPurple "
            >
              {post.title}
            </Link>
          </h2>

          <p
            className="w-3/4 py-2 text-ellipsis text-gray-400 font-normal text-sm"
            dangerouslySetInnerHTML={{
              __html: `${post.excerpt}...`,
            }}
          />

          <p className="mb-3 text-sm font-normal text-gray-500">
            <Link
              href={`${page_routes.resourceCenter}/content?id=${post.databaseId}`}
              className="font-medium text-primaryBlue hover:text-primaryPurple"
            >
              {post.author.node.firtName}
            </Link>{" "}
            {new Date(post.date).toLocaleDateString(undefined, {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <h2 className="mb-2 text-lg text-primaryBlue w-3/4 font-normal leading-6">
            <Link
              href={`${page_routes.resourceCenter}/content?id=${post.databaseId}`}
              className="text-primaryBlue uppercase transition-all ease-in duration-300 hover:underline hover:text-primaryPurple "
            >
              read more
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
}

// function OurBlogs() {
//     const {blogs, isLoading, isError} = useGetBlogs_Public();
//     return (
//         <>
//             <div className="container mx-auto px-4">
//                 <div className="pt-14 xl:px-0 px-4">
//                     <div className="w-full lg:flex">
//                         {blogs?.slice(0, 1).map((blog: BlogObject) => (
//                             <BlogFeatureCard data={blog} key={blog._id}/>
//                         ))}
//                         <div className="lg:w-1/2 lg:ml-8">
//                             {blogs || blogs?.length > 0 ? (
//                                 blogs
//                                     ?.slice(1)
//                                     ?.map((blog: BlogObject) => (
//                                         <BlogCard key={blog._id} data={blog}/>
//                                     ))
//                             ) : (
//                                 <Loading/>
//                             )}
//
//                         </div>
//                     </div>
//                 </div>
//                 <div className="flex items-center justify-center my-16 w-full">
//                     <button
//                         className=" hover:bg-gray-200 border border-indigo-700 border-2 lg:text-2xl md:text-lg text-sm rounded f-m-m font-semibold text-indigo-700 focus:outline-none lg:px-12 px-6 lg:py-6 py-3 xl:leading-4">Browse
//                         More
//                     </button>
//                 </div>
//                 <div/>
//             </div>
//         </>
//     );
//
// }
