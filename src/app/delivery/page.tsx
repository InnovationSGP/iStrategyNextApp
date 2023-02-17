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
                EXPLORE THE SOLUTION THAT’S RIGHT FOR YOU.
              </h2>
              <span className="sm:text-lg text-sm text-center">
                We help our clients find their way through complexity by
                addressing their challenges through three core lenses: customer,
                workforce, and operational. This can mean anything from
                transforming customer experiences, to developing better talent,
                to adapting your day-to-day operations to gain a competitive
                edge.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* card section */}
    </div>
  );
}
