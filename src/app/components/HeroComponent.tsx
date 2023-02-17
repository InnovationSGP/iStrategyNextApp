import React from "react";
import ImageFunction from "../../utils/ImageFunction";

export default function HeroComponent(props: {
  heroTxt: string;
  heroImg: any;
}) {
  return (
    <div className="h-96 relative">
      <div className="sm:w-auto relative h-full">
        <ImageFunction
          alt={"team hero image"}
          imageURL={props.heroImg}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
        <div className=" absolute m-8 bg-white p-6 md:p-10">
          <span className="sm:text-xl text-2xl md:text-3xl lg:text-5xl font-bold leading-4 text-primaryBlue w-auto ">
            {props.heroTxt}
          </span>
        </div>
      </div>
    </div>
  );
}
