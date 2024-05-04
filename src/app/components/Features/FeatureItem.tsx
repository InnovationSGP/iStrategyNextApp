import React from "react";

export function FeatureItem({feature}: any) {
    return (
        <div
            className="flex flex-col items-center justify-between p-8 md:py-0 p-6 w-full hover:scale-125 cursor-pointer min-h-40 ">
            <div
                className="text-white rounded-full border border-2 border-white p-8 flex items-center justify-center mt-2 transition-colors duration-300 ease-in-out hover:bg-gradient-to-r from-blue-600 via-green-500 to-blue-400 hover:border-none ">
                <feature.icon
                    className="h-10 w-10 text-white"
                    aria-hidden="true"
                />
            </div>
            <div>
                <h4
                    className="focus:outline-none text-lg font-medium leading-6  p-2 capitalize text-gray-800 text-center text-white pt-5">
                    {feature.name}
                </h4>
            </div>


        </div>

    );
}