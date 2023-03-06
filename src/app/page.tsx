import Image from "next/image";
import Banner from "./components/Banner";
import Feature from "./components/FeatureSection";
import Footer from "./components/Footer";
import HeroComponent from "./components/HeroComponent";
import blogPng from "./components/assets/blogPNG.png";
import { HeroCTA } from "./components/HeroCTA";

export default function Home() {
  return (
    <main>
      <Banner />
      <HeroComponent heroImg={blogPng} heroTxt={"Latest TECHNOLOGIES"} />
      <HeroCTA />
      <Feature />
    </main>
  );
}
