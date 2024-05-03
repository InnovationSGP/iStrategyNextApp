"use client";
import React from "react";
import ImageFunction from "../../utils/ImageFunction";
import teamPNG from "../../../public/assets/teamPNG.png";
import HeroComponent from "../components/HeroComponent";
import CardComponent from "../components/Card";
import {PrimaryCTA} from "../components/HeroCTA";
import {BlogCarousel} from "../resources/content/BlogCarousel";
import HeroComponent2 from "../components/HeroComponentSecondary";
import {Feature2} from "@/app/components/Features/Feature2";

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
