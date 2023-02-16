"use client";
import React from "react";
import BlogComponent from "../components/BlogComponent";
import HeroComponent from "../components/HeroComponent";
import blogPng from "../components/assets/blogPNG.png";
import { HeroCTA } from "../components/HeroCTA";

export default function Blog() {
  return (
    <div>
      <HeroComponent heroImg={blogPng} heroTxt={"Latest INSIGHTS"} />
      <HeroCTA />
      <BlogComponent />
    </div>
  );
}
