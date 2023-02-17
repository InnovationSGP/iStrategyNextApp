"use client";
import React from "react";
import HeroComponent from "../components/HeroComponent";
import heroImage from "../components/assets/automationAsset.png";
import heroImage2 from "../components/assets/teamPNG.png";
import ImageFunction from "../../utils/ImageFunction";
import { HeroCTA } from "../components/HeroCTA";
export default function Delivery() {
  return (
    <div>
      <HeroComponent heroImg={heroImage} heroTxt={"Smart delivery"} />
      <HeroCTA />

      <div className="p-2 mt-8 md:p-8">
        <div className="sm:w-auto bg-primaryBlue relative flex items-center justify-center h-full px-2">
          <ImageFunction
            alt={"team hero image"}
            imageURL={heroImage2}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
          <div className="bg-white h-full w-full md:p-10 relative flex items-center justify-center">
            <div className="leading-4 sm:w-3/6 w-5/6 flex items-center justify-center flex-col">
              <h2 className="text-xl sm:text-2xl p-4 items-center text-center font-bold">
                EXPLORE INNOVATIVE SOLUTIONS THAT WORK
              </h2>
              <span className="sm:text-lg text-sm text-center">
                Our approach to assisting clients in navigating complexity
                involves addressing their challenges through three primary
                perspectives: end user & customer, talent & workforce, and
                operational & business continuity. This approach encompasses a
                wide range of actions, including enhancing customer experiences,
                improving talent development, and adjusting day-to-day
                operations to gain a competitive advantage.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* card section */}
    </div>
  );
}
