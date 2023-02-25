"use client";
import React from "react";
import bg from "../../../public/heroimage.png";
import hero from "../../../public/assets/isgModelCenter.png";
import ImageFunction from "../../utils/ImageFunction";
import devopsImage from "../../../public/assets/devops.png";
import Banner from "./Banner";
import { MegaphoneIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Feature from "./FeatureSection";
import CustomButton from "./Button";
import { useRouter } from "next/navigation";
import Link from "next/link";

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
                    <h2 className="lg:text-6xl md:text-5xl text-center text-4xl font-black p-2 leading-10 text-white">
                      Innovate
                    </h2>
                  </div>

                  <div data-cy="heroCTA">
                    <Link
                      className="bg-white mt-2 p-2 px-4 hover:scale-110 transition-all duration-300 hover:bg-gray-200 text-2xl sm:text-5xl font-bold rounded shadow-sm"
                      href={"/contactus"}
                    >
                      Contact Us
                    </Link>
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
        <Feature /> {/* the devops section */}
      </div>
    </>
  );
}
