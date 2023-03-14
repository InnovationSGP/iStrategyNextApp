"use client";
import React from "react";
import BlogComponent from "./content/BlogComponent";
import HeroComponent from "../components/HeroComponent";
import blogPng from "../components/assets/blogPNG.png";
import { HeroCTA } from "../components/HeroCTA";
import { Feature2 } from "../components/FeatureSection";

export default function Blog() {
  return (
    <div>
      <BlogComponent />
      <Feature2 />
    </div>
  );
}
