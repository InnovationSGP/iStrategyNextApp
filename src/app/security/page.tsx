"use client";
import React from "react";

import cyberPNG from "../../../public/assets/cybersecurityPNG1.png";
import Image from "next/image";
import { OffshoreHero } from "../components/OffshoreHero";
import Feature from "../components/FeatureSection";
import { Testimonial } from "../components/Testimonial";
import { PrimaryCTA } from "../components/HeroCTA";
import { BlogCarousel } from "../resources/content/BlogCarousel";

export default function Security() {
  return (
    <>
      <OffshoreHero heroImg={cyberPNG} heroText="Shift-Left Cyber Security" />
      <Feature />
      <Testimonial />
      <PrimaryCTA />
      <BlogCarousel />
    </>
  );
}
