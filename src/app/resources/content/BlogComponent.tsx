import React from "react";
import {useGetBlogs_Public} from "@/pages/api/routes/blogRoute";
import {BlogObject} from "@/lib/types";
import Link from "next/link";
import {page_routes} from "@/lib/pageRoutes";
import Image from "next/image";

import {useSinglePost, useWordpressPosts} from "@/lib/gqlQueries";
import {PostCarouselCard} from "./BlogCarouselCard";
import Loading from "@/app/components/Loading";

const BlogComponent = () => {
    // const { blogs, isLoading, isError } = useGetBlogs_Public();
    const {posts, loading} = useWordpressPosts();

    return (
        <section className="flex flex-col justify-center items-center">
            <div className="px-6 mt-8   ">
                {posts || posts?.length > 0 ? (
                    <div
                        className="container grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 text-primaryBlue">
                        {posts?.map((post: any) => (
                            <PostSectionCard post={post} key={post.databaseId}/>
                        ))}
                    </div>
                ) : (
                    <Loading/>
                )}
            </div>
        </section>
    );
};
export default BlogComponent;

function PostSectionCard({post}: any) {
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
                            {post.title} ~ <span
                            className="text-blue-600 text-sm font-light">{post?.author.node.firstName}</span>
                        </Link>
                    </h2>

                    <p
                        className="w-full py-2 text-ellipsis text-gray-400 font-normal text-md"
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
