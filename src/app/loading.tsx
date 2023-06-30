import React from "react";
import Image from "next/image";
import image2 from '../../public/assets/ISGicon.png'

function Loading() {
    return (
        <>
            <div className="absolute bg-gray-200 bg-opacity-200 z-10 h-full w-full flex items-center justify-center">
                <div className="flex items-center">
                    <div className=' flex items-center justify-center'>
                        <Image
                            src={image2}
                            className="animate-pulse"
                            width={200}
                            height={300}
                            alt="hero image"
                        />
                    </div>

                </div>
            </div>


        </>
    );
}


export default Loading;
