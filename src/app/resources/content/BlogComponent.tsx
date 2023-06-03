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

            <div>
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
                            target="_blank"
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
            </div>


            {/*<div className="lg:w-1/2">*/}
            {/*    <div>*/}
            {/*        <Image*/}
            {/*            src={props.data?.img}*/}
            {/*            className="lg:w-full w-auto"*/}
            {/*            alt={`Picture of ${props.data?.img}`}*/}
            {/*            width={800}*/}
            {/*            height={600}*/}

            {/*        />*/}
            {/*    </div>*/}

            {/*    <div className="mt-8 lg:mb-0 mb-8">*/}
            {/*        <h1 className="f-m-m text-2xl font-semibold leading-7">{props.data?.header}</h1>*/}
            {/*        <p className="text-base f-m-m leading-loose mt-2">{props.data?.content?.slice(0, 50)}</p>*/}
            {/*        <div className="mt-6">*/}
            {/*            <Link href={`${page_routes.resourceCenter}/content?id=${props.data._id}`}>*/}
            {/*                <p className="text-indigo-700 underline text-base font-semibold f-m-m">Read*/}
            {/*                    More</p>*/}
            {/*            </Link>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
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

        // <div className="lg:flex items-start mb-8">
        //     <Image
        //         className="object-cover object-center w-full h-64 lg:h-80"
        //         src={props.data.img}
        //         alt="Blog Card Image"
        //         width={60}
        //         height={80}
        //         loading="lazy"
        //     />
        //     <div className="lg:ml-6">
        //         <Link target="_blank"
        //               href={`${page_routes.resourceCenter}/content?id=${props.data._id}`}>
        //             <h1 className="f-m-m text-2xl font-semibold leading-7 lg:mt-0 mt-8"> {props.data.header} </h1>
        //         </Link>
        //
        //         <p className="text-base f-m-m leading-loose mt-2">{props.data.content?.slice(0, 50)}</p>
        //         <div className="mt-4">
        //             <Link target="_blank"
        //                   href={`${page_routes.resourceCenter}/content?id=${props.data._id}`}>
        //                 <p className="text-indigo-700 underline text-base font-semibold f-m-m">Read
        //                     More</p>
        //             </Link>
        //         </div>
        //     </div>
        // </div>
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