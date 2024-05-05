"use client";
import React from "react";

import Feature from "../components/Features/FeatureSection";
import {BlogCarousel} from "../resources/content/BlogCarousel";
import HeroComponent2 from "@/app/components/Hero/HeroComponent2";
import {pageContents} from "@/content/pageCopy";
import {TrustedPartners} from "@/app/components/TrustedPartners";

export default function Security() {
    return (
        <>
            <HeroComponent2 headerText={pageContents.securityPage.headerText} bullet={pageContents.securityPage.bullet}
                            catchPhrase={pageContents.securityPage.catchPhrase}
                            headerParagraph={pageContents.securityPage.headerParagraph}/>
            <Feature/>
            <BlogCarousel/>
            <TrustedPartners/>

        </>
    );
}
