"use client";
import React from "react";
import ImageFunction from "../../utils/ImageFunction";
import teamPNG from "../../../public/assets/teamPNG.png";
import HeroComponent from "../components/HeroComponent";
import CardComponent from "../components/Card";
import { PrimaryCTA } from "../components/HeroCTA";
import { BlogCarousel } from "../resources/content/page";
import { Feature2 } from "../components/FeatureSection";

export default function Staffing() {
  return (
    <div data-cy="staffing-section">
      <HeroComponent heroTxt="Build Inspiring TEAMS" heroImg={teamPNG} />
      <CardComponent />
      <PrimaryCTA />
      <Feature2 />
      <BlogCarousel />
    </div>
  );
}
