'use client'
import {features, featuresHeader, GRCFeatures} from "@/content/features";
import {Bullet} from "../Bullet";
import React from "react";
import {cardContent} from "@/content/cardContent";
import {LearnMoreModal} from "@/app/components/Modal";

export default function Feature() {
    return (

        <div className="bg-gray-100 flex items-center justify-center mt-10">
            <div className="2xl:container 2xl:mx-auto lg:px-20 md:py-12 md:px-6 py-9 px-4">
                <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 gap-6 py-12 ">
                    {/*  Grid Card */}
                    {GRCFeatures.map((feature, index) => (
                        <Service key={index} data={feature}/>
                    ))}
                </div>
            </div>
        </div>

    );
}


function Service(props: any) {
    return (
        <div
            className=" p-10 bg-white  border-gray-300 hover:border-t-4 hover:border-primaryBlue md:hover:scale-110 ease-in duration-300">
            {props.data.cardIcon}
            <p className=" text-2xl text-gray-800 font-semibold leading-5 mt-6">
                {props.data.name}
            </p>
            <p className=" font-normal text-lg leading-6 text-gray-600 my-4">
                {props.data.description}{" "}
            </p>

        </div>
    );
}
