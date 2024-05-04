import Link from "next/link";
import {page_routes} from "@/lib/pageRoutes";
import Image from "next/image";
import image2 from "../../../../public/assets/standup.png";
import React from "react";

export function Feature2() {
    return (
        <div
            className=" p-2 py-8 sm:p-4 bg-primaryBlue overflow-hidden shadow-sm shadow-blue-500 flex items-center justify-center">


            <div className="flex flex-col sm:flex-row items-center justify-between">
                <div className=" ">
                    <div
                        className="flex flex-col md:items-start items-center justify-center px-2 sm:px-4 py-4 md:py-24 ">
                        <div className="flex flex-col p-4 w-full sm:w-4/5">
                            <h1 className="mb-6 mb-6 text-4xl md:text-5xl xl:text-7xl font-bold leading-tight text-white">
                                Successful completion of your project with a high degree of{" "}
                                <span
                                    className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                  excellence
                </span>
                            </h1>
                            <div className="py-4">
                                <Link
                                    href={page_routes.contactUs}
                                    className="rounded-full bg-primaryBlue text-white border-2 border-sky-500 py-4 px-8 text-3xl cursor-pointer hover:bg-primaryPurple hover:scale-105 transform ease-in-out duration-300 font-bold whitespace-nowrap"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-2 p-4 justify-center md:flex-col lg:flex-row">
                    <div className="flex justify-center items-center ">
                        <div className="border drop-shadow-xl rounded-lg">
                            <Image
                                src={image2}
                                className="object-cover w-full h-64 bg-gray-100 md:h-full"
                                loading="lazy"
                                width={800}
                                height={800}
                                alt="hero image"
                            />
                        </div>
                    </div>

                    {/*<div className="flex justify-center items-center ">*/}
                    {/*    <div className="border drop-shadow-xl rounded-lg">*/}
                    {/*        <Image*/}
                    {/*            src={image3}*/}
                    {/*            className="object-cover w-full h-64 bg-gray-100 md:h-full"*/}
                    {/*            loading="lazy"*/}
                    {/*            width={400}*/}
                    {/*            height={600}*/}
                    {/*            alt="hero image"*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
}