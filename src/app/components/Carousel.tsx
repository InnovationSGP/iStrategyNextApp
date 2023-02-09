"use client";
import React, { useState } from "react";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import ImageFunction from "../utils/ImageFunction";
import devops from "../../../public/assets/devops.png";

export default function Carousel() {
  return (
    <div className="p-4">
      <div className=" flex items-center justify-center w-full sm:p-2">
        {/* Carousel for desktop and large size devices */}

        <CarouselProvider
          className="lg:block hidden"
          naturalSlideWidth={100}
          naturalSlideHeight={100}
          isIntrinsicHeight={true}
          totalSlides={4}
          visibleSlides={1}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex gap-1 p-2 items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-30 left-0 ml-8 bg-primaryBlue outline-2 outline-white focus:outline-none p-2 focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
              id="prev"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div
                  id="slider"
                  className="flex items-center justify-start transition ease-out duration-700"
                >
                  <Slide index={0}>
                    <div className="md:container md:mx-auto flex justify-between p-4 relative w-full border-2 border-black sm:w-auto">
                      <div className="flex flex-col">
                        <span className="md:text-5xl">Innovation</span>
                        <span>
                          We run a team of experts capable of rapidly iterating
                          and delivering value-driven solutions to our client
                          customers.
                        </span>
                      </div>
                      <div>
                        <ImageFunction imageURL={devops} />
                      </div>
                    </div>
                  </Slide>
                  <Slide index={1}>
                    <div className="md:container md:mx-auto flex justify-between p-4 relative w-full border-2 border-black sm:w-auto">
                      <div className="flex flex-col">
                        <span className="md:text-5xl">Innovation</span>
                        <span>
                          We run a team of experts capable of rapidly iterating
                          and delivering value-driven solutions to our client
                          customers.
                        </span>
                      </div>
                      <div>
                        <ImageFunction imageURL={devops} />
                      </div>
                    </div>
                  </Slide>
                  <Slide index={2}>
                    <div className="md:container md:mx-auto flex justify-between p-4 relative w-full border-2 border-black sm:w-auto">
                      <div className="flex flex-col">
                        <span className="md:text-5xl">Innovation</span>
                        <span>
                          We run a team of experts capable of rapidly iterating
                          and delivering value-driven solutions to our client
                          customers.
                        </span>
                      </div>
                      <div>
                        <ImageFunction imageURL={devops} />
                      </div>
                    </div>
                  </Slide>
                  <Slide index={3}>
                    <div className="md:container md:mx-auto flex justify-between p-4 relative w-full border-2 border-black sm:w-auto">
                      <div className="flex flex-col">
                        <span className="md:text-5xl">Innovation</span>
                        <span>
                          We run a team of experts capable of rapidly iterating
                          and delivering value-driven solutions to our client
                          customers.
                        </span>
                      </div>
                      <div>
                        <ImageFunction imageURL={devops} />
                      </div>
                    </div>
                  </Slide>
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-30 right-0 mr-8 p-2 bg-primaryBlue outline-1 outline-white focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              id="next"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>

        {/* Carousel for tablet and medium size devices */}
        <CarouselProvider
          className="lg:hidden md:block hidden"
          naturalSlideWidth={100}
          naturalSlideHeight={100}
          isIntrinsicHeight={true}
          totalSlides={3}
          visibleSlides={1}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-30 left-0 ml-8 p-2 bg-primaryBlue outline-1 outline-white focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
              id="prev"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div
                  id="slider"
                  className="h-full w-full flex gap-1 items-center p-2 justify-between transition ease-out duration-700"
                >
                  <Slide index={0}>
                    <div className="flex justify-between relative w-full sm:w-auto">
                      <div className="flex flex-col">
                        <span className="md:text-5xl">Innovation</span>
                        <span>
                          We run a team of experts capable of rapidly iterating
                          and delivering value-driven solutions to our client
                          customers.
                        </span>
                      </div>
                      <div>
                        <ImageFunction imageURL={devops} />
                      </div>
                    </div>
                  </Slide>
                  <Slide index={1}>
                    <div className="flex justify-between relative w-full sm:w-auto">
                      <div className="flex flex-col">
                        <span className="md:text-5xl">Innovation</span>
                        <span>
                          We run a team of experts capable of rapidly iterating
                          and delivering value-driven solutions to our client
                          customers.
                        </span>
                      </div>
                      <div>
                        <ImageFunction imageURL={devops} />
                      </div>
                    </div>
                  </Slide>
                  <Slide index={2}>
                    <div className="flex justify-between relative w-full sm:w-auto">
                      <div className="flex flex-col">
                        <span className="md:text-5xl">Innovation</span>
                        <span>
                          We run a team of experts capable of rapidly iterating
                          and delivering value-driven solutions to our client
                          customers.
                        </span>
                      </div>
                      <div>
                        <ImageFunction imageURL={devops} />
                      </div>
                    </div>
                  </Slide>
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-30 right-0 mr-8 p-2 bg-primaryBlue outline-1 outline-white focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              id="next"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>

        {/* Carousel for mobile and Small size Devices */}
        <CarouselProvider
          className="block md:hidden "
          naturalSlideWidth={100}
          naturalSlideHeight={100}
          isIntrinsicHeight={true}
          totalSlides={3}
          visibleSlides={1}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-30 left-0 ml-8 p-2 bg-primaryBlue outline-1 outline-white focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
              id="prev"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div
                  id="slider"
                  className="h-full w-full flex gap-1 items-center p-2 justify-between transition ease-out duration-700"
                >
                  <Slide index={0}>
                    <div className="flex justify-between relative w-full sm:w-auto">
                      <div className="flex flex-col">
                        <span className="md:text-5xl">Innovation</span>
                        <span>
                          We run a team of experts capable of rapidly iterating
                          and delivering value-driven solutions to our client
                          customers.
                        </span>
                      </div>
                      <div>
                        <ImageFunction imageURL={devops} />
                      </div>
                    </div>
                  </Slide>
                  <Slide index={1}>
                    <div className="flex justify-between relative w-full sm:w-auto">
                      <div className="flex flex-col">
                        <span className="md:text-5xl">Innovation</span>
                        <span>
                          We run a team of experts capable of rapidly iterating
                          and delivering value-driven solutions to our client
                          customers.
                        </span>
                      </div>
                      <div>
                        <ImageFunction imageURL={devops} />
                      </div>
                    </div>
                  </Slide>
                  <Slide index={2}>
                    <div className="flex justify-between relative w-full sm:w-auto">
                      <div className="flex flex-col">
                        <span className="md:text-5xl">Innovation</span>
                        <span>
                          We run a team of experts capable of rapidly iterating
                          and delivering value-driven solutions to our client
                          customers.
                        </span>
                      </div>
                      <div>
                        <ImageFunction imageURL={devops} />
                      </div>
                    </div>
                  </Slide>
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute z-30 right-0 mr-8 p-2 bg-primaryBlue outline-1 outline-white focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              id="next"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
}
