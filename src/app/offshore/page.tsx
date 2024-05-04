"use client";
import React from "react";
import Feature from "../components/Features/FeatureSection";
import {BlogCarousel} from "../resources/content/BlogCarousel";
import {PrimaryCTA} from "../components/Hero/HeroCTA";
import {Testimonial} from "../components/Testimonial/Testimonial";


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
