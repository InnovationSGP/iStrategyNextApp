import Link from "next/link";
import {page_routes} from "@/lib/pageRoutes";
import {features, featuresHeader} from "@/content/features";
import {FeatureItem} from "@/app/components/Features/FeatureItem";
import React from "react";

export function Feature4() {
    return (
        <div className="bg-gray-800 h-full py-4 sm:py-8 md:py-14">
            <div className="mx-auto max-w-7xl p-12 px-6 lg:px-8">
                <div className="mx-auto lg:text-center">
                    <div className="flex flex-col items-center text-white justify-center pb-2">
                        <div
                            className="w-auto bg-secondaryPurpleLight bg-opacity-40 rounded-lg px-8 py-2  shadow-sm">
                            <Link href={page_routes.resourceCenter} className="text-sm">
                                {featuresHeader.bulletText}
                            </Link>
                        </div>
                    </div>
                    <p className="mt-2 text-3xl sm:text-4xl md:text-6xl capitalize text-center text-white">
                        {featuresHeader.header}
                    </p>
                    <p className="mt-6 text-lg leading-8 text-white">
                        {featuresHeader.subHeading}
                    </p>
                </div>

                <div className="p-8">
                    <div>
                        <div className="py-12">
                            <div className="max-w-8xl mx-auto container">
                                <div tabIndex={0} aria-label="group of cards"
                                     className="flex flex-col md:flex-row items-center justify-between sm:justify-between">
                                    {features.map((feature, index) => <FeatureItem key={index} feature={feature}/>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
}