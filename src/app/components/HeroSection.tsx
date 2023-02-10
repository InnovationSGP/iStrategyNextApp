"use client";
import React from "react";
import bg from "../../../public/heroimage.png";
import hero from "../../../public/assets/isgModelCenter.png";
import ImageFunction from "../utils/ImageFunction";
import devopsImage from "../../../public/assets/devops.png";
import Banner from "./Banner";
import { MegaphoneIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Feature from "./FeatureSection";
import CustomButton from "./Button";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();
  const contactCTAEvent = () => {
    return router.push("/contactus");
  };

  return (
    <>
      <div>
        <div className="dark:bg-gray-900">
          <div className="pb-2">
            <div className="mx-auto bg-gradient-to-l from-primaryBlue to-primaryPurple h-96">
              <div className="mx-auto container w-full flex flex-col justify-center items-center">
                <div className="flex justify-center items-center flex-col">
                  <div className="mt-20">
                    <h2 className="lg:text-6xl md:text-5xl text-center text-4xl font-black leading-10 text-white">
                      How we innovate
                    </h2>
                  </div>
                  <div className="mt-6 mx-2 md:mx-0 text-center">
                    <p className="lg:text-lg md:text-base leading-6 text-sm  text-white">
                      5 years, consistent quality solutions delivery
                    </p>
                  </div>
                  <div data-cy="heroCTA">
                    <CustomButton
                      color="bg-white"
                      txtColor="text-primaryBlue font-bold"
                      type="button"
                      size="text-2xl"
                      space="py-2 px-4 m-4"
                      text="Contact Us"
                      hoverFocus="hover:bg-gray-300"
                      clickFunction={contactCTAEvent}
                      isDisabled={false}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto container md:-mt-28 -mt-20 flex justify-center items-center ">
              <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-x-2 gap-y-2 lg:gap-x-6 md:gap-x-6  md:gap-y-6">
                <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
                  <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">
                    10+
                  </h2>
                  <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">
                    PM Years
                  </p>
                </div>
                <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
                  <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">
                    10+
                  </h2>
                  <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">
                    Projects Completed
                  </p>
                </div>
                <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
                  <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">
                    2
                  </h2>
                  <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">
                    State IT Projects
                  </p>
                </div>
                <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
                  <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800">
                    5+
                  </h2>
                  <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">
                    Top IT Certs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* the devops section */}
        <div className="md:container md:mx-auto flex justify-center gap-4 items-center p-2 md:p-4 py-24 sm:py-32 border-t-2 border-primaryPurple relative w-full my-8 sm:w-auto">
          <div className="flex flex-col gap-2 justify-center">
            <span className="md:text-5xl text-2xl font-bold">Innovation</span>
            <span className="w-60">
              We run a team of experts capable of rapidly iterating and
              delivering value-driven solutions to our client customers.
            </span>
          </div>

          <div>
            <ImageFunction
              imageURL={devopsImage}
              height={350}
              alt="picture of a devops logo"
            />
          </div>
        </div>
        <Feature />
      </div>
    </>
  );
}
