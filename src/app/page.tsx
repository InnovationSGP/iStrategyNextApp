'use client'
import HeroComponent from "./components/Hero/HeroComponent";
import blogPng from "./components/assets/HeroImage.png";
import {BlogCarousel} from "./resources/content/BlogCarousel";
import {pageContents} from "@/content/pageCopy";
import {Feature3} from "@/app/components/Features/Feature3";
import {Feature4} from "@/app/components/Features/Feature4";
import {TrustedPartners} from "@/app/components/TrustedPartners";


export default function Home() {
    return (
        <main>

            <HeroComponent heroImg={blogPng} header={pageContents.homePage.headerText}
                           headerText={pageContents.homePage.headerParagraph}/>
            <TrustedPartners/>
            <Feature4/>
            <BlogCarousel/>


        </main>
    );
}