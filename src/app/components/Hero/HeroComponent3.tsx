"use client"
import React from "react";
import Link from "next/link";
import {page_routes} from "@/lib/pageRoutes";
import Image from "next/image";
import heroBackground from "./assets/heroBackground.png"


export default function HeroComponent3(props: {
    header: string;
    headerText: string,
    heroImg: any;
}) {
    return (

        <div>
            <div className="lg:px-6 xl:px-0">
                <div className="mx-auto container relative z-0 px-4 xl:px-0">
                    <div className="flex flex-col-reverse md:flex-row">
                        <div className="md:w-3/5 md:pt-24 pb-10 lg:py-32 xl:py-48">
                            <h1 className="text-3xl lg:text-6xl xl:text-8xl font-black text-gray-900 text-center md:text-left tracking-tighter f-f-i md:w-7/12 leading-tight text-heading-color">{props.header}</h1>
                            <h2 className="md:w-8/12 py-4 text-center md:text-left md:py-8 text-gray-700 text-lg lg:text-2xl">{props.headerText}</h2>
                            <div className="w-full flex justify-center py-6 md:block">
                                <Link href={page_routes.contactUs}
                                      className="hover:opacity-90 bg-primaryBlue py-3 px-10 lg:py-7 lg:px-20 rounded-full text-white text-sm md:text-lg f-f-p"> Get
                                    Started
                                </Link>
                            </div>
                        </div>
                        <div className="w-1/2 sm:w-2/5 h-64 md:h-auto m-auto flex items-center overflow-hidden">
                            <Image className="md:absolute md:w-1/2 md:-ml-28"
                                   src={props.heroImg} alt="Gain advantage"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
