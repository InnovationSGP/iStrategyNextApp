import { features, featuresHeader } from "../../content/features";
import { Bullet } from "./Bullet";

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
