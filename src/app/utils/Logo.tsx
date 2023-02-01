"use client";
import React from "react";
import isg5 from "../images/isg5.png";
import Image from "next/image";
import "./customstyle.css";

export const Logo = (props: any) => {
  return (
    <Image
      src={isg5}
      alt="Innovation Strategy Brand Logo"
      width={50}
      height={800}
    />
  );
};

export const LogoBrand = (props: any) => {
  return (
    <span className="text-5xl font-itim pl-2 cursor-pointer">
      iStrat<span className="text-primaryPurple">e</span>gy
    </span>
  );
};
