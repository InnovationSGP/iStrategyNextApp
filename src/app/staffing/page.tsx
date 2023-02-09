"use client";
import React from "react";
import ImageFunction from "../utils/ImageFunction";
import hero from "../../../public/assets/isgModelCenter.png";

export default function Staffing() {
  return (
    <div data-cy="staffing-section">
      <h1>Staffing</h1>
      <div className="bg-no-repeat bg-cover bg-center md:p-16">
        <div className="flex flex-col-reverse sm:flex-row justify-between">
          <div className="flex flex-col">
            <div className="bg-primaryBlue w-full sm:w-96 justify-center items-center text-center p-4">
              <span className="uppercase text-secondaryPurpleLight text-3xl sm:text-4xl font-bold whitespace-nowrap">
                Innovate with us
              </span>
            </div>
            <div className="flex justify-between items-start ">
              <div className=" flex flex-col items-start justify-between pr-6 p-4 md:px-0">
                <span className="text-primaryBlue text-2xl font-bold">
                  5+ years
                </span>{" "}
                <span> Public Sector</span>{" "}
              </div>
              <div className=" flex flex-col items-start justify-between pr-6 p-4 md:px-0">
                <span className="text-primaryBlue text-2xl font-bold">10+</span>{" "}
                <span>Solutions </span>{" "}
              </div>
              <div className=" flex flex-col items-start justify-between pr-6 p-4 md:px-0">
                <span className="text-primaryBlue text-2xl font-bold">
                  10+ years
                </span>{" "}
                <span>Experience</span>{" "}
              </div>
            </div>
          </div>

          <div>
            <ImageFunction
              imageURL={hero}
              alt="Innovation Strategy Group LLC"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
