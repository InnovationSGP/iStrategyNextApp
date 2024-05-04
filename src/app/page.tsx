import HeroComponent from "./components/HeroComponent";
import blogPng from "./components/assets/HeroImage.png";
import {BlogCarousel} from "./resources/content/BlogCarousel";
import {homePageContent} from "@/content/homepage";
import {Feature3} from "@/app/components/Features/Feature3";
import {Feature4} from "@/app/components/Features/Feature4";
import {TrustedPartners} from "@/app/components/TrustedPartners";


export default function Home() {
    return (
        <main>

            <HeroComponent heroImg={blogPng} header={homePageContent.heroSection.headerText}
                           headerText={homePageContent.heroSection.headerParagraph}/>
            <TrustedPartners/>
            <Feature4/>
            <Feature3/>
            <BlogCarousel/>


        </main>
    );
}


// "react-quill": "^2.0.0",
