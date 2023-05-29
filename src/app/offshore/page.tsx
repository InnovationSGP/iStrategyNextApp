"use client";
import React from "react";
import Feature from "../components/FeatureSection";
import {BlogCarousel} from "../resources/content/BlogCarousel";
import {PrimaryCTA} from "../components/HeroCTA";
import {Testimonial} from "../components/Testimonial";
import OffshorePNG from "../../../public/assets/remoteWorker.png"
import {OffshoreHero} from "../components/OffshoreHero";

export default function Offshore() {
    return (
        <div>
            <OffshoreHero
                heroImg={OffshorePNG}
                heroText="Innovate Faster With Our Offshore Teams."
            />
            <Feature/>
            <Testimonial/>
            <PrimaryCTA/>
            <BlogCarousel/>
        </div>
    );
}
