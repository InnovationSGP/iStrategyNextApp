"use client";
import React from "react";
import { Fragment, useState, useEffect } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
  LockOpenIcon,
  NewspaperIcon,
  InboxArrowDownIcon,
  LockClosedIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import { LogoBrand } from "../../utils/Logo";
import { signOut, useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Loading from "./Loading";
import { page_routes } from "@/lib/pageRoutes";

const solutions = [
  {
    name: "Delivery",
    description: "Get work done, and done fast",
    href: page_routes.Delivery,
    icon: ChartBarIcon,
  },
  {
    name: "Offshore",
    description: "Build strategic workstreams to drive your growth",
    href: page_routes.Offshore,
    icon: ArrowPathIcon,
  },
  {
    name: "IT Security",
    description: "Your customers' data will be safe and secure.",
    href: page_routes.ITSecurity,
    icon: ShieldCheckIcon,
  },
  {
    name: "Resources",
    description: "View blogs, news, articles and other resources",
    href: page_routes.resourceCenter,
    icon: Squares2X2Icon,
  },
];
const callsToAction = [
  { name: "Resources", href: page_routes.resourceCenter, icon: NewspaperIcon },
  { name: "Contact ", href: page_routes.contactUs, icon: InboxArrowDownIcon },
  { name: "Login", href: page_routes.secure, icon: LockOpenIcon },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  const session = useSession();
  const { data } = session;
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showOnHover, setShowOnHover] = useState(false);

  const closeModal = () => (setShowOnHover: any) => !showOnHover;

  const [navBarScroll, setNavBarScroll] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setNavBarScroll(true);
    } else {
      setNavBarScroll(false);
    }
  };

  useEffect(() => {
    return window.addEventListener("scroll", changeNavbarColor);
  }, []);

  return (
    <div
      data-cy="nav-section"
      className={`sticky top-0 z-10 bg-white ${
        navBarScroll
          ? " border-b-2 border-primaryPurple transition-all duration-300"
          : ""
      }`}
    >
      <Popover className="relative bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between  py-6 md:justify-between ">
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
              className="hidden font-sourceSans capitalize md:flex items-center justify-center"
            >
              <Popover
                onMouseEnter={() => setShowOnHover(true)}
                onMouseLeave={() => setShowOnHover(false)}
                className="relative"
              >
                {({ open }) => (
                  <>
                    <Popover.Button
                      data-cy="consulting-pop"
                      className={classNames(
                        open ? "text-gray-900" : "text-gray-600",
                        "px-6 items-center bg-white font-bold hover:text-gray-900 focus:outline-none text-xl "
                      )}
                    >
                      <span className="hover:border-b-2 capitalize hover:border-b-primaryBlue hover:ease-in hover:duration-300 px-6 pb-2">
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
                      show={showOnHover}
                    >
                      <Popover.Panel
                        data-cy="consulting-panel"
                        className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2"
                      >
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {solutions.map((item) => (
                              <Link
                                onClick={() => setShowOnHover(false)}
                                key={item.name}
                                href={item.href}
                                className="-m-3 flex normal-case items-start rounded-lg p-3 hover:bg-gray-50"
                              >
                                <item.icon
                                  className="h-6 w-6 flex-shrink-0 text-primaryBlue"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <p className="text-base  text-gray-900 capitalize font-bold">
                                    {item.name}
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {item.description}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                          <div
                            data-cy="consulting-panel-CTAs"
                            className="space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8 flex items-center justify-center"
                          >
                            {data?.user ? (
                              <div className="flex justify-between">
                                <span
                                  className=" flex items-center cursor-pointer p-4  capitalize font-bold text-gray-900 hover:bg-gray-100  hover:border-b-2 border-primaryBlue"
                                  onClick={() =>
                                    router.push(page_routes.dashboard)
                                  }
                                >
                                  <HomeIcon
                                    className="h-6 w-6 flex-shrink-0 font-bold text-black"
                                    aria-hidden="true"
                                  />
                                  <span className="ml-3">Dashboard</span>
                                </span>
                                <span
                                  className="flex items-center cursor-pointer p-4 capitalize font-bold text-gray-900 hover:bg-gray-100  hover:border-b-2 border-primaryBlue"
                                  onClick={async function logout() {
                                    await setLoading(true);
                                    await signOut({
                                      callbackUrl: page_routes.secure,
                                    });
                                    return toast.success(
                                      "Successfully Signed Out"
                                    );
                                  }}
                                >
                                  <LockClosedIcon
                                    className="h-6 w-6 flex-shrink-0 text-black"
                                    aria-hidden="true"
                                  />
                                  <span className="ml-3">logout</span>
                                </span>
                              </div>
                            ) : (
                              callsToAction.map((item) => (
                                <div key={item.name} className="flow-root">
                                  <Link
                                    onClick={() => setShowOnHover(false)}
                                    href={item.href}
                                    className="-m-3 flex items-center p-3 font-bold capitalize text-gray-900 hover:bg-gray-100  hover:border-b-2 border-primaryBlue"
                                  >
                                    <item.icon
                                      className="h-6 w-6 flex-shrink-0 text-gray-400"
                                      aria-hidden="true"
                                    />
                                    <span className="ml-3">{item.name}</span>
                                  </Link>
                                </div>
                              ))
                            )}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <Link
                data-cy="staffing-link"
                href={page_routes.staffing}
                className="text-xl px-6 font-bold text-gray-600 hover:text-gray-900 capitalize focus:border-primaryBlue"
              >
                <span className="hover:border-b-2 px-6 pb-2 hover:border-b-primaryBlue hover:ease-in hover:duration-300 border-primaryBlue focus:border-b-2 focus:border-primaryBlue">
                  Staffing
                </span>
              </Link>
              <div>
                <Link
                  data-cy="contact-link"
                  href={page_routes.contactUs}
                  className="text-xl px-6 font-bold text-gray-600 hover:text-gray-900 capitalize focus:border-primaryBlue"
                >
                  <span className="hover:border-b-2 px-6 pb-2 hover:border-b-primaryBlue hover:ease-in hover:duration-300 border-primaryBlue focus:border-b-2 focus:border-primaryBlue whitespace-nowrap">
                    Contact Us
                  </span>
                </Link>
              </div>
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
            className={`absolute z-40 inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden`}
          >
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg ">
                      <LogoBrand />
                    </span>
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primaryBlue">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-12">
                  <nav className="grid gap-y-8">
                    {solutions.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex font-bold items-center rounded-md p-3 hover:bg-gray-50"
                      >
                        <item.icon
                          className="h-6 w-6 flex-shrink-0 text-primaryBlue"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-base text-gray-900">
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="flex items-center justify-center space-y-6 py-6 px-5">
                <div>
                  <Link
                    href={page_routes.contactUs}
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-primaryBlue px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-primaryBlue"
                  >
                    Contact Us Now
                  </Link>

                  {data?.user ? (
                    <div className="flex">
                      <span
                        className=" flex items-center cursor-pointer p-4 capitalize font-bold text-gray-900 hover:bg-gray-100  hover:border-b-2 border-primaryBlue"
                        onClick={() => router.push(page_routes.dashboard)}
                      >
                        <HomeIcon
                          className="h-6 w-6 flex-shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="ml-3">Dashboard</span>
                      </span>
                      <span
                        className="cursor-pointer hover:border-b-2 hover:border-primaryBlue p-4 flex items-center justify-center text-primaryBlue hover:text-primaryBlue"
                        onClick={async function logout() {
                          await signOut({
                            callbackUrl: page_routes.secure,
                          });
                          return toast.success("Successfully Signed Out");
                        }}
                      >
                        <LockClosedIcon
                          className="h-6 w-6 flex-shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                        <span className="px-2">logout</span>
                      </span>
                    </div>
                  ) : (
                    <p className="p-4 text-center text-base capitalize font-bold text-gray-500">
                      Existing client?
                      <Link
                        href={page_routes.secure}
                        className="text-primaryBlue pl-2 cursor-pointer hover:border-b-2 hover:border-primaryBlue hover:text-primaryBlue"
                      >
                        Sign in
                      </Link>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}
