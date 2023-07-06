"use client";
import React, {forwardRef} from "react";
import {Fragment, useState, useEffect} from "react";
import {Popover, Transition} from "@headlessui/react";
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartBarIcon,
    ShieldCheckIcon,
    Squares2X2Icon,
    XMarkIcon,
    LockOpenIcon,
    InboxArrowDownIcon,
    LockClosedIcon,
    PresentationChartBarIcon, QuestionMarkCircleIcon
} from "@heroicons/react/24/outline";
import {LogoBrand} from "@/utils/Logo";
import {signOut, useSession} from "next-auth/react";
import toast from "react-hot-toast";
import {useRouter} from "next/navigation";
import Link from "next/link";
import {page_routes} from "@/lib/pageRoutes";
import {motion, useScroll, useSpring} from "framer-motion";


function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
    const session = useSession();
    const {data} = session;
    const router = useRouter();
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

    const {scrollYProgress} = useScroll()
    const scaleX = useSpring(scrollYProgress)

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
            name: "Staffing",
            description: "Leverage our offshore resources",
            href: page_routes.staffing,
            icon: PresentationChartBarIcon,
        },
        {
            name: "Resources",
            description: "View blogs, news, articles and other resources",
            href: page_routes.resourceCenter,
            icon: Squares2X2Icon,
        },

        {
            name: "Contact us",
            description: "Let's get you some help",
            href: page_routes.contactUs,
            icon: InboxArrowDownIcon,
        },

        {
            name: "About us",
            description: "Learn more about out services",
            href: page_routes.about,
            icon: QuestionMarkCircleIcon,
        },

        {
            name: data?.user ? 'Logout' : 'Admin Login',
            description: data?.user ? 'Logout' : null,
            href: data?.user ? page_routes.secure : page_routes.secure,
            icon: data?.user ? LockClosedIcon : LockOpenIcon,
        },

    ];

    function getLogout() {
        return async function logout() {
            await signOut({
                callbackUrl: page_routes.secure,
            });
            return toast.success("Successfully Signed Out");
        };
    }

    function navItemClickFunction(item: any) {
        if (data) return getLogout()
        else return () => router.push(item.href);
    }

    return (
        <>
            <div
                data-cy="nav-section"
                className={`sticky top-0 z-10 bg-white shadow-sm`}
            >
                <Popover className="relative bg-white">
                    <div className="mx-auto px-6">
                        <div className="flex items-center justify-between py-6 md:justify-between ">
                            <div
                                className="flex justify-start items-center lg:w-0 lg:flex-1 text-black"
                                onClick={() => setShowOnHover(false)}
                            >
                                <LogoBrand/>
                            </div>

                            <div className="-my-2 -mr-2 md:hidden">
                                <Popover.Button
                                    className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primaryBlue">
                                    <span className="sr-only">Open menu</span>
                                    <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
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
                                    {({open}) => (
                                        <>
                                            <Popover.Button
                                                data-cy="consulting-pop"
                                                className={classNames(
                                                    open ? "text-gray-900" : "text-gray-600",
                                                    "px-6 items-center bg-white font-bold hover:text-gray-900 focus:outline-none text-xl "
                                                )}
                                            >
                      <span
                          className="hover:border-b-2 capitalize hover:border-b-primaryBlue hover:ease-in hover:duration-300 px-6 pb-2">
                        Services
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
                                                    <div
                                                        className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                                        <div
                                                            className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
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

                                                    </div>
                                                </Popover.Panel>
                                            </Transition>
                                        </>
                                    )}
                                </Popover>

                                <div>
                                    <Link
                                        data-cy="contact-link"
                                        href={page_routes.contactUs}
                                        className="text-xl px-6 font-bold text-gray-600 hover:text-gray-900 capitalize focus:border-primaryBlue"
                                    >
                  <span
                      className="hover:border-b-2 px-6 pb-2 hover:border-b-primaryBlue hover:ease-in hover:duration-300 border-primaryBlue focus:border-b-2 focus:border-primaryBlue whitespace-nowrap">
                    Contact Us
                  </span>
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        data-cy="contact-link"
                                        href={page_routes.about}
                                        className="text-xl px-6 font-bold text-gray-600 hover:text-gray-900 capitalize focus:border-primaryBlue"
                                    >
                  <span
                      className="hover:border-b-2 px-6 pb-2 hover:border-b-primaryBlue hover:ease-in hover:duration-300 border-primaryBlue focus:border-b-2 focus:border-primaryBlue whitespace-nowrap">
                    About Us
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
                        leaveTo="opacity-0"
                    >
                        {/* MOBILE */}
                        <Popover.Panel
                            focus
                            className={`absolute z-40 inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden`}
                        >
                            <div
                                className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                                <div className="px-5 pt-5 pb-6">
                                    <div className="flex items-center justify-between">
                                        <div className="p-2 cursor-pointer">
                                            <LogoBrand mobile/>
                                        </div>

                                        <div className="-mr-2">
                                            <Popover.Button
                                                className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primaryBlue">
                                                <span className="sr-only">Close menu</span>
                                                <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                                            </Popover.Button>
                                        </div>
                                    </div>
                                    <div className="mt-12">
                                        <nav className="grid gap-y-8">
                                            {solutions.map((item) => (
                                                <Popover.Button
                                                    onClick={navItemClickFunction(item)}
                                                    key={item.name}
                                                    className="-m-3 flex font-bold items-center rounded-md p-3 hover:bg-gray-50"
                                                >
                                                    <item.icon
                                                        className="h-6 w-6 flex-shrink-0 text-primaryBlue"
                                                        aria-hidden="true"
                                                    />
                                                    <span className="ml-3 text-base text-gray-900">
                          {item.name}
                        </span>
                                                </Popover.Button>
                                            ))}
                                        </nav>
                                    </div>


                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </Popover>

                <motion.div
                    className="bg-primaryBlue h-1 pl-0 "
                    style={{scaleX}}
                />
            </div>
        </>
    );
}

//
// ${
//                     navBarScroll
//                         ? " border-b-2 border-primaryBlue transition-all duration-300"
//                         : ""
//                 }