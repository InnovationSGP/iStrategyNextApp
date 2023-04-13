import React from "react";
import Image from "next/image";
import Link from "next/link";
import {page_routes} from "@/lib/pageRoutes";
import image2 from "../../../public/assets/standup.png";
import image3 from "../../../public/assets/devops.jpeg";

export default function HeroComponent2(props: {}) {
    return (
        <section
            className="grid grid-cols-1 gap-0 bg-white md:grid-cols-2">
            <div className="flex flex-col items-center justify-center px-8 sm:px-4 py-4 md:py-24 ">
                <div className="flex flex-col p-4 w-full sm:w-3/5">
                    <h1 className="mb-6 text-4xl md:text-5xl xl:text-7xl font-bold leading-tight text-primaryBlue ">
                        Successful completion of your project with a high degree of{" "}
                        <span className="text-primaryPurple">excellence</span>
                    </h1>
                    <p className="font-bold text-md sm:text-xl pb-2">
                        In its scope, timeline, budget, and expected outcomes.
                    </p>
                    <div className="py-4 flex items-center justify-start gap-3">
                        <Link
                            href={page_routes.contactUs}
                            className="rounded-full bg-primaryBlue text-white shadow-xl px-6 py-2 cursor-pointer hover:bg-primaryPurple hover:scale-105 transform ease-in-out duration-300 font-bold whitespace-nowrap"
                        >
                            Contact Us
                        </Link>
                        <Link
                            href={page_routes.resourceCenter}
                            className="rounded-full bg-white border-2 border-black drop-shadow-lg px-4 py-2 hover:bg-gray-100 hover:text-black hover:scale-105 transform ease-in-out duration-300 font-bold whitespace-nowrap"
                        >
                            Resources &#x1f58a;
                        </Link>

                    </div>
                </div>
            </div>
            <div className="flex flex-row gap-2 p-4 justify-center">
                <div className="flex justify-center items-center ">
                    <div className="border drop-shadow-xl rounded-lg">
                        <Image
                            src={image2}
                            className="object-cover w-full h-64 bg-gray-100 md:h-full"
                            loading="lazy"
                            width={400}
                            height={600}
                            alt="hero image"
                        />
                    </div>
                </div>

                <div className="flex justify-center items-center ">
                    <div className="border drop-shadow-xl rounded-lg">
                        <Image
                            src={image3}
                            className="object-cover w-full h-64 bg-gray-100 md:h-full"
                            loading="lazy"
                            width={400}
                            height={600}
                            alt="hero image"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
