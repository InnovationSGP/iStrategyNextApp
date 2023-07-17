import {Feature3, Feature4, TrustedPartners} from "./components/FeatureSection";
import HeroComponent from "./components/HeroComponent";
import blogPng from "./components/assets/blogPNG.png";
import {BlogCarousel} from "./resources/content/BlogCarousel";


export default function Home() {
    return (
        <main>

            <HeroComponent heroImg={blogPng} headerText={"What we do"}
                           heroTxt={"We are a strategic hub, providing\n" +
                               "                            support, guidance, and\n" +
                               "                            resources to our subsidiary\n" +
                               "                            companies. With a long-term investment perspective, we foster\n" +
                               "                            growth, innovation, and operational excellence across our portfolio."}/>
            <Feature4/>


            <Feature3/> <TrustedPartners/>
            <BlogCarousel/>


        </main>
    );
}
