"use client";
import React from "react";
import BlogComponent from "./content/BlogComponent";
import HeroFeature from "../components/HeroFeatureComponent";
import featurePNG from "../../../public/assets/backgroundImg.png";

export default function Blog() {
    return (
        <div className="relative">

            <HeroFeature
                heroImg={featurePNG}
                heroTxt="Resources"
            />

            <BlogComponent/>
        </div>
    );
}
