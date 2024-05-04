"use client";
import React from "react";
import Feature from "../components/Features/FeatureSection";
import {BlogCarousel} from "../resources/content/BlogCarousel";
import {PrimaryCTA} from "../components/Hero/HeroCTA";
import {Testimonial} from "../components/Testimonial/Testimonial";
import OffshorePNG from "../../../public/assets/remoteWorker.png"
import {OffshoreHero} from "../components/OffshoreHero";

export default function Offshore() {
    return (
        <div>
       
            <Feature/>
            <Testimonial/>
            <PrimaryCTA/>
            <BlogCarousel/>
        </div>
    );
}
