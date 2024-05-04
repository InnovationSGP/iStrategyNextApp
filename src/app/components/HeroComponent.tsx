"use client"
import React from "react";
import Link from "next/link";
import {page_routes} from "@/lib/pageRoutes";
import Image from "next/image";
import heroBackground from "./assets/heroBackground.png"


export default function HeroComponent(props: {
    header: string;
    headerText: string,
    heroImg: any;
}) {
    return (

        <div>
            <section>
                <div className="w-full relative pb-10 px-6 xl:px-0">
                    <Image className="absolute w-full inset-0 h-full object-cover object-center"
                           src={heroBackground} alt="project management guru"/>


                    <div className="pt-32 lg:flex items-center relative container mx-auto">
                        <div className="w-full lg:w-1/2 h-full lg:pr-10 xl:pr-0">
                            <Image role="img" aria-label="people smiling" className="mx-auto"
                                   src={props.heroImg} alt="people smiling"/>

                        </div>
                        <div role="contentinfo" className="w-full lg:w-1/2 h-full">
                            <h1 className="text-primaryBlue text-4xl py-2 lg:text-6xl font-black mb-8">{props.header}</h1>
                            <p className="text-gray-800 text-xl font-regular mb-8">{props.headerText}</p>
                            <div className="lg:mt-16 py-4 ">
                                <Link
                                    href={page_routes.contactUs}
                                    className="shadow-md focus:bg-primaryPink transition duration-150 ease-in-out focus:ring-indigo-700 focus:ring-2 focus:ring-offset-2 text-white bg-primaryBlue md:text-2xl sm:text-lg lg:text-3xl hover:bg-indigo-700 mt-3 sm:mt-0 p-6 rounded-full w-full sm:w-auto"
                                >
                                    <span className="px-8">Get Started</span>

                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}
