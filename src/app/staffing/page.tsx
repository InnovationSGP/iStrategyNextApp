"use client";
import React from "react";
import CardComponent from "../components/Card";
import {BlogCarousel} from "../resources/content/BlogCarousel";
import HeroComponent4 from "../components/Hero/HeroComponent4";
import {pageContents} from "@/content/pageCopy";

export default function Staffing() {
    return (
        <div data-cy="staffing-section">
            <HeroComponent4 headerText={pageContents.staffingPage.headerText} bullet={pageContents.staffingPage.bullet}
                            catchPhrase={pageContents.staffingPage.catchPhrase}
                            headerParagraph={pageContents.staffingPage.headerParagraph}/>
            <CardComponent/>
            <BlogCarousel/>
        </div>
    );
}
