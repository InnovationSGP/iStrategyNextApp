"use client";
import React from "react";
import ImageFunction from "../../utils/ImageFunction";
import hero from "../../../public/assets/isgModelCenter.png";
import teamPNG from "../../../public/assets/teamPNG.png";
import HeroComponent from "../components/HeroComponent";
import CardComponent from "../components/Card";
import { HeroCTA } from "../components/HeroCTA";

export default function Staffing() {
  return (
    <div data-cy="staffing-section">
      {/* hero section */}
      <HeroComponent heroTxt="Build Inspiring TEAMS" heroImg={teamPNG} />
      <HeroCTA />
      {/* Cards */}
      <CardComponent />
    </div>
  );
}
