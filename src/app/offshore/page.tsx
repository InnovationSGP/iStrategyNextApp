"use client";
import ImageFunction from "@/utils/ImageFunction";
import React from "react";

import backImage from "../components/assets/teamPNG.png";
import devopsImage from "../../../public/assets/devops.png";
import Feature from "../components/FeatureSection";
import { BlogCarousel } from "../resources/content/BlogCarousel";
import { HeroCTA, PrimaryCTA } from "../components/HeroCTA";
import { Testimonial } from "../components/Testimonial";
import OffshorePNG from "../../../public/assets/offshorestaff.png";
import { OffshoreHero } from "../components/OffshoreHero";

export default function Offshore() {
  return (
    <div>
      <OffshoreHero
        heroImg={OffshorePNG}
        heroText="Innovate Faster With Our Offshore Teams."
      />
      <Feature />
      <Testimonial />
      <PrimaryCTA />
      <BlogCarousel />
    </div>
  );
}
