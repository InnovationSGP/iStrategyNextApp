import Link from "next/link";
import {page_routes} from "@/lib/pageRoutes";
import Image from "next/image";
import image2 from "../../../../public/assets/standup.png";
import image3 from "../../../../public/assets/devops.jpeg";
import React from "react";

export const Feature3 = () => {
    return (
        <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
            <div className="lg:flex items-center justify-between">
                <div className="lg:w-1/3">
                    <h1 className="mb-6 mb-6 text-4xl md:text-5xl xl:text-7xl font-bold leading-tight text-black">
                        Successful completion of your project with a high degree of{" "}
                        <span
                            className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                  excellence
                </span>
                    </h1>
                    <Link href={page_routes.contactUs} aria-label="view catalogue"
                          className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none mt-6 md:mt-8 text-base font-semibold leading-none text-gray-800 flex items-center hover:underline">
                        Innovate with us
                        <svg className="ml-2 mt-1" width="12" height="8" viewBox="0 0 12 8" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.33325 4H10.6666" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8 6.66667L10.6667 4" stroke="#1F2937" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                            <path d="M8 1.33398L10.6667 4.00065" stroke="#1F2937" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                        </svg>
                    </Link>
                </div>
                <div className="lg:w-7/12 lg:mt-0 mt-8">

                    <div
                        className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-8 gap-6 lg:mt-8 md:mt-6 mt-4">
                        <Image
                            src={image2}
                            className="object-cover w-full bg-gray-100 shadow-sm"
                            width={800}
                            height={800}
                            alt="hero image"
                        />
                        <Image
                            src={image3}
                            className="object-cover w-full bg-gray-100 shadow-sm"
                            width={400}
                            height={600}
                            alt="hero image"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};