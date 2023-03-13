import Link from "next/link";
import {
  features,
  featuresHeader,
  features2list,
} from "../../content/features";
import { Bullet } from "./Bullet";
import { page_routes } from "@/lib/pageRoutes";
import Image from "next/image";

export default function Feature() {
  return (
    <div className="bg-white py-14  sm:py-14 mt-12 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <div className="flex flex-col items-center justify-center">
            <Bullet text="PM Factory is Opening Soon" />
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-primaryPurple">
              {featuresHeader.headerBanner}
            </h2>
          </div>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {featuresHeader.header}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {featuresHeader.subHeading}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primaryPurple">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export function Feature2() {
  return (
    <div className="p-8">
      <section className="px-8 py-20 mx-auto max-w-7xl text-white p-8 rounded-2xl overflow-hidden shadow-sm bg-gray-100 border-2 border-white  bg-opacity-80 backdrop-filter backdrop-blur-lg ">
        <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-y-32 gap-x-10 lg:gap-x-24 ">
          <div className="">
            <h2 className="mb-3 text-3xl font-extrabold leading-tight tracking-tight text-center py-8 text-black sm:text-left md:text-4xl">
              Innovating Together
            </h2>
            {/* <p className="mb-6 text-lg text-center text-white sm:text-left md:text-xl">
              Let's build a relationship based on innovative ideas leading to
              highly valuable outcomes and value for you.
            </p> */}
            <Link
              href={page_routes.contactUs}
              className="my-2 text-xl md:text-2xl font-bold shadow text-white p-4 px-6 rounded-lg bg-primaryBlue cursor-pointer hover:bg-gray-100 hover:text-black hover:scale-105 transform ease-in-out duration-300"
            >
              Contact Us
            </Link>
          </div>
          <div className="flex flex-col flex-grow space-y-5">
            {features2list.map((feature) => (
              <Feature2ListItem data={feature} key={feature.id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
function Feature2ListItem(props: any) {
  return (
    <div className="flex items-start">
      <svg
        viewBox="0 0 20 20"
        fill="currentColor"
        className="flex-none w-5 h-5 mt-1 mr-2 text-black"
      >
        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
      </svg>
      <p className="text-lg text-black">{props.data.feature}</p>
    </div>
  );
}
