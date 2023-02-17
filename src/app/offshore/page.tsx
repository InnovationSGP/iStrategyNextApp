"use client";
import ImageFunction from "@/utils/ImageFunction";
import React from "react";

import backImage from "../components/assets/teamPNG.png";
import devopsImage from "../../../public/assets/devops.png";

export default function Offshore() {
  return (
    <div>
      {" "}
      <div className="p-2 mt-8 md:p-8 ">
        <div className="sm:w-auto bg-primaryBlue relative flex items-center justify-center h-full px-2">
          <ImageFunction
            alt={"team hero image"}
            imageURL={backImage}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
          <div className="bg-white h-full w-full md:p-10 relative flex items-center justify-center">
            <div className="leading-4 sm:w-3/6 w-5/6 flex items-center justify-center ">
              <h2 className="text-xl sm:text-2xl p-4 items-center text-center uppercase font-bold">
                Continous Improvement
              </h2>
              <div>
                <ImageFunction
                  imageURL={devopsImage}
                  height={350}
                  alt="picture of a devops logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
