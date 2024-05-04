"use client";
import React from "react";

import cyberPNG from "../../../public/assets/cybersecurityPNG1.png";
import {OffshoreHero} from "../components/OffshoreHero";
import Feature from "../components/Features/FeatureSection";
import {Testimonial} from "../components/Testimonial";
import {PrimaryCTA} from "../components/HeroCTA";
import {BlogCarousel} from "../resources/content/BlogCarousel";

export default function Security() {
    return (
        <>
            <OffshoreHero heroImg={cyberPNG}
                          heroText="Third Party Risks Assessment and Cloud Applications Risks Assessment and Compliance Management"/>
            <Feature/>
            <PrimaryCTA/>
            <BlogCarousel/>
        </>
    );
}
