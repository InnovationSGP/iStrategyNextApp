"use client";
import React from "react";
import BlogComponent from "./content/BlogComponent";
import HeroComponent from "../components/HeroComponent";
import blogPng from "../components/assets/blogPNG.png";
import { HeroCTA } from "../components/HeroCTA";
import { Feature2 } from "../components/FeatureSection";
import HeroFeature from "../components/HeroFeatureComponent";
import featurePNG from "../../../public/assets/backgroundImg.png";

export default function Blog() {
  return (
    <div className="relative">
      <div className="flex justify-center item-center bg-primaryBlue p-4 py-6 ">
        <div className="flex justify-center items-center gap-4 flex-col md:flex-row">
          <span className="text-white text-xl md:text-2xl font-bold">
            Resource Center
          </span>
        </div>
      </div>
      <HeroFeature
        heroImg={featurePNG}
        heroTxt="Successful completion of your project with a high degree of excellence in its scope, timeline, budget, and expected outcomes."
        heroTxt2="Person-Centered Project and Services Delivery"
      />
      <div className="">
        <HeroCTA />
      </div>
      <BlogComponent />
    </div>
  );
}
