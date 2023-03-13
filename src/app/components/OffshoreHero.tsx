"use client";
import React from "react";
import Link from "next/link";
import { page_routes } from "@/lib/pageRoutes";
import Image from "next/image";

export function OffshoreHero(props: any) {
  return (
    <section className="grid grid-cols-1 gap-0 bg-purple-100 bg-opacity-25 md:grid-cols-2">
      <div className="flex flex-col items-start justify-center px-4 py-24 lg:px-20">
        <h1 className="mb-6 text-4xl font-bold leading-tight text-primaryBlue md:text-4xl lg:text-5xl">
          {props.heroText}{" "}
        </h1>
        <Link
          href={page_routes.contactUs}
          className="my-2 text-xl md:text-2xl font-bold shadow text-white p-4 px-8 rounded-md bg-primaryBlue cursor-pointer hover:bg-gray-100 hover:text-black hover:scale-105 transform ease-in-out duration-300"
        >
          Contact Us
        </Link>
      </div>
      <div>
        <Image
          src={props.heroImg}
          className="object-cover w-full h-64 bg-gray-100 md:h-full"
          loading="lazy"
          width={400}
          height={600}
          alt="hero image"
        />
      </div>
    </section>
  );
}
