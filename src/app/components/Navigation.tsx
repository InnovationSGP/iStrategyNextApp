"use client";
import React, { useState } from "react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { LogoBrand } from "../../utils/Logo";

const solutions = [
  {
    name: "Delivery",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "/delivery",
    icon: ChartBarIcon,
  },
  {
    name: "Offshore",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "/offshore",
    icon: ArrowPathIcon,
  },
  {
    name: "Consulting",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "/consulting",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "IT Security",
    description: "Your customers' data will be safe and secure.",
    href: "/security",
    icon: ShieldCheckIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools that you're already using.",
    href: "/integrations",
    icon: Squares2X2Icon,
  },
];
const callsToAction = [
  { name: "Blog", href: "/blog", icon: PlayIcon },
  { name: "Contact Sales", href: "/contactus", icon: PhoneIcon },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  return (
    <div data-cy="nav-section">
      <Popover className="relative bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-between ">
            <div className="flex justify-start items-center lg:w-0 lg:flex-1 text-black ">
              <LogoBrand />
            </div>

            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primaryBlue">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group
              as="nav"
              className="hidden font-sourceSans uppercase md:flex"
            >
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      data-cy="consulting-pop"
                      className={classNames(
                        open ? "text-gray-900" : "text-primaryBlue",
                        "px-6 items-center bg-white font-medium hover:text-gray-900 focus:outline-none border-r-2 border-primaryBlue text-xl "
                      )}
                    >
                      <span className="hover:border-b-2 uppercase hover:border-b-primaryBlue hover:ease-in hover:duration-300  px-6 pb-2">
                        Consulting
                      </span>
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 "
                      enterTo="opacity-100 "
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Popover.Panel
                        data-cy="consulting-panel"
                        className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2"
                      >
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {solutions.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 flex normal-case items-start rounded-lg p-3 hover:bg-gray-50"
                              >
                                <item.icon
                                  className="h-6 w-6 flex-shrink-0 text-primaryBlue"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                          <div className="space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                            {callsToAction.map((item) => (
                              <div key={item.name} className="flow-root">
                                <a
                                  href={item.href}
                                  className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                                >
                                  <item.icon
                                    className="h-6 w-6 flex-shrink-0 text-gray-400"
                                    aria-hidden="true"
                                  />
                                  <span className="ml-3">{item.name}</span>
                                </a>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <a
                data-cy="staffing-link"
                href="/staffing"
                className="text-xl px-6 font-medium text-primaryBlue hover:text-gray-900 border-r-2 border-primaryBlue focus:border-primaryBlue"
              >
                <span className="hover:border-b-2 px-6 pb-2 hover:border-b-primaryBlue hover:ease-in hover:duration-300 border-primaryBlue focus:border-b-2 focus:border-primaryBlue">
                  Staffing
                </span>
              </a>
              <a
                data-cy="delivery-link"
                href="/delivery"
                className="text-xl px-6  font-medium text-primaryBlue hover:text-gray-900 border-r-2  border-primaryBlue   focus:border-primaryBlue"
              >
                <span className="hover:border-b-2 px-6 pb-2 hover:border-b-primaryBlue hover:ease-in hover:duration-300 border-primaryBlue focus:border-b-2 focus:border-primaryBlue">
                  Delivery
                </span>
              </a>
            </Popover.Group>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 "
          enterTo="opacity-100 "
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 "
          leaveTo="opacity-0 "
        >
          {/* MOBILE */}
          <Popover.Panel
            focus
            className="absolute z-40 inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
          >
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl ">iStrategy</span>
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primaryBlue">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                      >
                        <item.icon
                          className="h-6 w-6 flex-shrink-0 text-primaryBlue"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="space-y-6 py-6 px-5">
                <div>
                  <a
                    href="/contactus"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-primaryBlue px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-primaryBlue"
                  >
                    Contact Us Now
                  </a>
                  <p className="mt-6 text-center text-base font-medium text-gray-500">
                    Existing client?{" "}
                    <a
                      href="#"
                      className="text-primaryBlue hover:text-primaryBlue"
                    >
                      Sign in (coming soon)
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}
