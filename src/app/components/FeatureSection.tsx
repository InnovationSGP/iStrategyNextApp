import Link from "next/link";
import {
  features,
  featuresHeader,
  features2list,
} from "../../content/features";
import { Bullet } from "./Bullet";
import { page_routes } from "@/lib/pageRoutes";
import Image from "next/image";
import feature2PNG from "../../../public/assets/teamPNG.png";
import feature2PNG2 from "../../../public/assets/isgModel.png";

export default function Feature() {
  return (
    <div className="bg-white py-14  sm:py-14 ">
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
    <div className="p-4">
      <div className=" px-6 mx-auto">
        <section className="mb-8 text-gray-800 text-center lg:text-left">
          <div className="sm:px-6 py-12 md:px-12">
            <div className="mx-auto xl:px-8">
              <div className="grid lg:grid-cols-2 place-items-center">
                <div className="md:mt-12 lg:mt-0 mb-12 lg:mb-0">
                  <div className="relative block rounded-lg shadow-lg px-6 pt-12 pb-6 md:px-12 lg:-mr-14 z-1 bg-opacity-30 backdrop-filter backdrop-blur-lg">
                    <h2 className="text-3xl font-bold mb-6">
                      Why are we great for you?
                    </h2>
                    <p className="text-gray-500 mb-6">
                      We offer the following services at a high level, driving
                      business delivery and change.
                    </p>

                    <div className="grid md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-x-6">
                      {features2list.map((feature) => (
                        <Feature2ListItem data={feature} key={feature.id} />
                      ))}
                    </div>
                  </div>
                </div>
                <div
                  className="md:mb-12 lg:mb-0 delay-[300ms] duration-[600ms] taos:scale-[0.6] taos:opacity-0"
                  data-taos-offset="400"
                >
                  <Image
                    src={feature2PNG2}
                    className="w-full rounded-lg shadow-lg rotate-lg-6"
                    alt="Feature 2 Hero"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
function Feature2ListItem(props: any) {
  return (
    <div className="mb-6">
      <p className="flex items-center">
        <svg
          className="w-4 h-4 mr-2 text-gray-900"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
          ></path>
        </svg>
        {props.data.feature}
      </p>
    </div>
  );
}
