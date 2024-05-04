"use client";
import React from "react";
import BlogComponent from "./content/BlogComponent";

export default function Blog() {
    return (
        <div>
            <BlogHeader/>
            <BlogComponent/>
        </div>
    );
}

function BlogHeader() {
    return (
        <div className="p-12 ">
            <div className=" p-4">
                <div className="flex justify-center items-center flex-col ">
                    <div className="text-sm text-primaryBlue bg-blue-100 px-4 py-2 rounded-full">
                        Blogs
                    </div>
                    <div className="flex justify-center items-center pt-2 flex-col">
                        <div className=" text-3xl lg:text-5xl md:text-4xl w-4/5 text-center font-bold">
                            Quality expertise to drive innovative thinking and innovative
                            solutions
                        </div>
                        <div
                            className="text-gray-400 font-semibold w-4/5 text-md md:text-2xl lg:text-xl text-center py-2">
                            To match our clients with quaility resources that will support
                            them with informed recommendations, and quaility execution.{" "}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
