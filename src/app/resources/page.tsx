"use client";
import React from "react";
import BlogComponent from "./content/BlogComponent";
import HeroFeature from "../components/HeroFeatureComponent";
import featurePNG from "../../../public/assets/backgroundImg.png";

export default function Blog() {
  return (
    <div className="relative">
      <div className="flex justify-center items-center">
        <p className="text-4xl text-primaryBlue font-bold">Blogs</p>
      </div>

      <BlogComponent />
    </div>
  );
}
