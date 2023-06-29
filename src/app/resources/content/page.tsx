"use client";
import {FunctionComponent, Suspense, useEffect, useState} from "react";
import {useSearchParams} from "next/navigation";

import Link from "next/link";
import Image from "next/image";
import {BlogCarousel} from "./BlogCarousel";
import Loading from "@/app/components/Loading";
import {useSinglePost} from "../../../lib/gqlQueries";

interface BlogResourceProps {
}

const BlogResource: FunctionComponent<BlogResourceProps> = () => {
    const params = useSearchParams();
    const id = params.get("id");
    const {data, loading} = useSinglePost(id);
    if (loading) return <Loading/>;

    return (
        <div>
            <Suspense fallback={loading && <Loading/>}>
                {<Content post={data}/>}
            </Suspense>
        </div>
    );
};

export default BlogResource;

function Content({post}: any) {
    return (
        <div>
            <div className="container-md mx-auto md:w-4/5 w-11/12 px-2">
                <div className="w-full h-full">
                    <div>
                        <div className="pb-2">
                            <section className="">
                                <article className="p-4">
                                    <div className="grid items-center grid-cols-1 md:grid-cols-2">
                                        <div className="order-2 h-64 md:order-1 md:h-full">
                                            <Image
                                                src={post.featuredImage?.node.link}
                                                className="object-cover w-full h-full bg-center shadow-sm"
                                                alt={`Blog Post Image`}
                                                width={400}
                                                height={600}
                                            />
                                        </div>
                                        <div
                                            className="order-1 w-full px-4 py-12 mx-auto text-left md:w-3/4 md:py-48 md:order-2 md:px-0">
                                            <p className="mb-3 text-gray-500">
                                                <time>
                                                    {new Date(post?.date).toLocaleDateString(undefined, {
                                                        weekday: "long",
                                                        year: "numeric",
                                                        month: "long",
                                                        day: "numeric",
                                                    })}
                                                </time>
                                            </p>
                                            <h1
                                                className="mb-5 text-3xl font-bold text-gray-900 md:leading-tight md:text-4xl capitalize"
                                                itemProp="headline"
                                                title={post?.title}
                                            >
                                                {post?.title}
                                            </h1>
                                            <Link
                                                className="flex items-center text-gray-700"
                                                href="#"
                                            >
                                                <div className="avatar"></div>
                                                <div className="  ">
                                                    <p className="text-sm font-semibold text-gray-800 capitalize">
                                                        {post?.author.node.firstName}
                                                    </p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>

                                    <section className="container-md flex flex-col relative py-4 pt-4">
                                        <main className="text-black">
                                            <div
                                                className="py-4 wordpress_content"
                                                dangerouslySetInnerHTML={{__html: post?.content}}
                                            />
                                        </main>
                                    </section>
                                </article>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shawdow ">
                <BlogCarousel/>
            </div>
        </div>
    );
}

// export async function getStaticProps({ params }: any) {
//   const { data, loading } = useSinglePost(params.id);
//   console.log(data);
//   return { data, loading };
// }

// export async function getStaticPaths() {
//   const paths: any[] = [];
//   return {
//     paths,
//     fallback: "blocking",
//   };
// }
