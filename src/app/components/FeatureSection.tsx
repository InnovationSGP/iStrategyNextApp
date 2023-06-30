import Link from "next/link";
import {features, featuresHeader} from "@/content/features";
import {Bullet} from "./Bullet";
import {page_routes} from "@/lib/pageRoutes";
import Image from "next/image";
import React from "react";
import image2 from "../../../public/assets/standup.png";
import image3 from "../../../public/assets/devops.jpeg";
import image from "../../../public/assets/launch.png";

export default function Feature() {
    return (
        <div className="bg-blue-200 h-full  py-8 sm:py-4">
            <div className="mx-auto max-w-7xl p-12 px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <div className="flex flex-col items-center justify-center">
                        <Bullet text={featuresHeader.bulletText}/>
                        {/*<h2 className="text-lg font-semibold leading-8 tracking-tight text-primaryPurple">*/}
                        {/*    {featuresHeader.headerBanner}*/}
                        {/*</h2>*/}
                    </div>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        {featuresHeader.header}
                    </p>
                    {/*<p className="mt-6 text-lg leading-8 text-gray-600">*/}
                    {/*    {featuresHeader.subHeading}*/}
                    {/*</p>*/}
                </div>
                <div className="mx-auto mt-8 py-4 max-w-2xl sm:mt-8 lg:mt-8 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div
                                        className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primaryBlue">
                                        <feature.icon
                                            className="h-6 w-6 text-white"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">
                                    {feature.description}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}

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


function Feature2ListItem(props: any) {
    return (
        <div className="mb-6">
            <p className="flex items-center">
                <svg
                    className="w-4 h-4 mr-2 text-gray-900"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                >
                    <path
                        fill="currentColor"
                        d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                    ></path>
                </svg>
                {props.data.feature}
            </p>
        </div>
    );
}
