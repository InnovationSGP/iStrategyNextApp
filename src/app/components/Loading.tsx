import React, {FunctionComponent} from "react";
import Image from "next/image";
import image2 from "../../../public/assets/ISGicon.png";

interface LoadingProps {
}

const Loading: FunctionComponent<LoadingProps> = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="bg-white">
                <div className=" rounded relative">
                    <div
                        className="bg-white w-[190px] h-[190px] relative flex justify-center items-center animate-pulse">
                        <Image
                            src={image2}
                            className="animate-pulse"
                            width={200}
                            height={300}
                            alt="hero image"
                        />

                        <div className="rounded-full bg-white w-[150px] h-[150px]"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loading;