"use client";
import Link from "next/link";
import React from "react";

export const LogoBrand = (props: any) => {
  return (
    <Link
      data-cy="logo"
      href={"/"}
      className={`text-5xl font-itim p-2 cursor-pointer ${props.textColor}`}
    >
      strate<span className="text-primaryPurple">w</span>ise
    </Link>
  );
};
