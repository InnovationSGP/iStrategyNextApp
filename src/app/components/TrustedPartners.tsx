import {trustPartners} from "@/content/features";
import stratewise from "../../../public/assets/stratewise.png";
import isgpBW from "../../../public/assets/isgplogoBW.png";
import Image from "next/image";
import React from "react";

export function TrustedPartners() {
    return (
        <div className='bg-primaryBackground '>
            <div className="2xl:px-20 md:px-10 2xl:mx-auto 2xl:container">
                <div className="md:py-12 py-8 px-4 ">
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="lg:text-5xl md:text-4xl text-2xl font-bold leading-10 text-gray-800">{trustPartners.header}</h1>
                        <p className="text-base leading-normal text-center text-gray-600 mt-4 xl:w-1/2 w-10/12">{trustPartners.subHeading}</p>
                    </div>
                    <div className="flex items-center justify-center mt-10">
                        <div
                            className="flex flex-col md:flex-row items-center justify-center">
                            <PartnerBrand image={stratewise} altText={'stratewise logo'}/>
                            <PartnerBrand image={isgpBW} altText={'innovation strategy logo'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );

    function PartnerBrand({image, altText}: { image: any, altText: string }) {
        return (
            <div className={'p-2 w-full'}>
                <div className="w-full px-6 h-32 bg-gray-300 flex items-center justify-center">
                    <Image src={image} alt={altText} width={120} height={180}/>
                </div>
            </div>
        );
    }

}