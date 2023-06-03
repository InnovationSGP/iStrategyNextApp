import React from "react";
import ImageFunction from "../../utils/ImageFunction";

export default function HeroComponent(props: {
    heroTxt: string;
    heroImg: any;
    headerText: string
}) {
    return (
        <div className="h-screen relative">
            <div className="sm:w-auto h-full flex items-center">
                <ImageFunction
                    alt={"team hero image"}
                    imageURL={props.heroImg}
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: "cover",
                    }}
                />
                <div className="absolute md:ml-28 p-6 md:p-6 sm:w-3/4 md:w-1/4 backdrop-blur bg-white/50">
                    <div>
                        <p className='text-2xl md:text-2xl lg:text-3xl leading font-bold'>{props.headerText}</p>
                        <p className='text-md md:text-md lg:text-xl text-gray-800'>{props.heroTxt}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
