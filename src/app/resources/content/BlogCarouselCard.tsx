"use client";
import { BlogObject } from "../../../lib/types";
import Link from "next/link";
import { page_routes } from "@/lib/pageRoutes";
import Image from "next/image";

export function BlogCarouselCard(props: { data: BlogObject }) {
  return (
    <div className="w-full shadow">
      <Link href={`${page_routes.resourceCenter}/content?id=${props.data._id}`}>
        <Image
          src={props.data.img}
          className="object-cover w-full h-56 mb-5 bg-center rounded"
          alt={props.data.header}
          loading="lazy"
          width={400}
          height={600}
        />
      </Link>
      <div className="p-4">
        <h2 className="mb-2 text-lg font-semibold text-primaryBlue">
          <Link
            href={`${page_routes.resourceCenter}/content?id=${props.data._id}`}
            className="text-primaryBlue hover:text-purple-700 capitalize"
          >
            {props.data.header}
          </Link>
        </h2>

        <p className="mb-3 text-sm font-normal text-gray-500">
          <Link
            href={`${page_routes.resourceCenter}/content?id=${props.data._id}`}
            className="font-medium text-primaryBlue hover:text-purple-700"
          >
            {props.data.author}
          </Link>{" "}
          -{" "}
          {new Date(props.data.date).toLocaleDateString(undefined, {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
    </div>
  );
}
