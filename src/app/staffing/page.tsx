"use client";
import React from "react";
import ImageFunction from "../../utils/ImageFunction";
import teamPNG from "../../../public/assets/teamPNG.png";
import HeroComponent from "../components/HeroComponent";
import CardComponent from "../components/Card";
import {PrimaryCTA} from "../components/HeroCTA";
import {BlogCarousel} from "../resources/content/BlogCarousel";
import {Feature2} from "../components/FeatureSection";
import HeroComponent2 from "../components/HeroComponentSecondary";

export default function Staffing() {
    return (
        <div data-cy="staffing-section">
            <HeroComponent2/>
            <CardComponent/>
            <PrimaryCTA/>
            <BlogCarousel/>
        </div>
    );
}
