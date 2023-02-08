"use client";
import Link from "next/link";
import React from "react";

export const LogoBrand = (props: any) => {
  return (
    <Link data-cy="logo" href={"/"}>
      <span className="text-5xl font-itim cursor-pointer">
        iStrat<span className="text-primaryPurple">e</span>gy
      </span>
    </Link>
  );
};
