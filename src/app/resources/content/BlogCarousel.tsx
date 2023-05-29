"use client";
import {useGetBlogs_Public} from "@/pages/api/routes/blogRoute";
import {BlogObject} from "@/lib/types";
import Link from "next/link";
import {page_routes} from "@/lib/pageRoutes";
import {BlogCarouselCard} from "./BlogCarouselCard";
import Loading from "@/app/components/Loading";

export const BlogCarousel = () => {
    const {blogs} = useGetBlogs_Public();
    return (
        <section className="my-14 px-4 py-4 mx-auto bg-white flex flex-col justify-center items-center">
            <h2 className="mb-2 text-3xl font-extrabold leading-tight text-primaryBlue py-4 items-center text-center">
                Recent Resources{" "}
            </h2>
            {blogs || blogs?.length > 0 ?
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 text-primaryBlue">
                    {
                        blogs
                            .slice(0, 3)
                            .map((blog: BlogObject) => (
                                <BlogCarouselCard data={blog} key={blog._id}/>
                            ))
                    }
                </div> : <Loading/>}
            <div className="text-center pt-8 flex justify-end ">
                <Link
                    className="text-xs md:text-lg font-bold shadow text-primaryBlue py-2 px-6 rounded-sm bg-gray-100 cursor-pointer hover:bg-primaryBlue hover:text-white hover:scale-105 transform ease-in-out duration-300"
                    href={page_routes.resourceCenter}
                >
                    Load More
                </Link>
            </div>
        </section>
    );
};
