import Image from "next/image";
import Banner from "./components/Banner";
import Feature, {Feature2} from "./components/FeatureSection";
import HeroComponent from "./components/HeroComponent";
import blogPng from "./components/assets/blogPNG.png";
import {HeroCTA} from "./components/HeroCTA";
import {BlogCarousel} from "./resources/content/BlogCarousel";

export default function Home() {
    return (
        <main>
            <Banner/>
            <HeroComponent heroImg={blogPng} heroTxt={"Latest TECHNOLOGIES"}/>
            <HeroCTA/>
            <Feature/>
            <Feature2/>
            <BlogCarousel/>
        </main>
    );
}
