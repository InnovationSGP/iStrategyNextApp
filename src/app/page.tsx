import Image from "next/image";
import Banner from "./components/Banner";
import Feature from "./components/FeatureSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HomePageContent";

export default function Home() {
  return (
    <main>
      <Banner />
      <HeroSection />
    </main>
  );
}
