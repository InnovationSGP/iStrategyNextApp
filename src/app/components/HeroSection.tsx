import React from "react";
import bg from "../../../public/heroimage.png";
import hero from "../../../public/assets/isgModelCenter.png";
import ImageFunction from "../utils/ImageFunction";

export default function HeroSection() {
  return (
    <>
      <div className="">
        <div className="bg-no-repeat bg-cover bg-center md:p-16">
          <div className="flex flex-col-reverse sm:flex-row justify-between items-center">
            <div className="bg-primaryBlue w-full sm:w-96 justify-center items-center text-center p-4">
              <span className="uppercase text-white text-3xl sm:text-4xl font-bold whitespace-nowrap">
                Innovate with us
              </span>
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
        <div className="bg-gradient-to-r from-primaryBlue to-primaryPurple p-2">
          <div className="justify-center items-center p-4 flex flex-col md:flex-row">
            <span className=" uppercase text-2xl font-bold bg-white p-2 px-4 text-primaryBlue">
              contact Us
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
