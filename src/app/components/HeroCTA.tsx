import Link from "next/link";
import React from "react";
import {page_routes} from "../../lib/pageRoutes";

export function HeroCTA() {
    return (
        <div
            data-cy="HeroSectionCTA"
            className="flex justify-center item-center bg-primaryPurple p-4 py-6 "
        >
            <div className="flex justify-center items-center gap-4 flex-col md:flex-row">
        <span className="text-white text-xl md:text-2xl font-bold">
          Let us work together
        </span>
                <Link
                    href={page_routes.contactUs}
                    className="text-xl md:text-4xl font-bold shadow text-primaryBlue p-4 px-8 rounded-sm bg-white cursor-pointer hover:bg-gray-100 hover:text-black hover:scale-105 transform ease-in-out duration-300"
                >
                    Ready to Talk?
                </Link>
            </div>
        </div>
    );
}

export function PrimaryCTA() {
    return (
        <section
            className="my-14 grid items-center justify-center grid-cols-1 px-4 py-24 text-center lg:grid-cols-3 border shadow-sm">
            <div className="col-auto lg:col-start-2">
                <p className="mb-2 text-base font-semibold text-primary">
                    Currently accepting new clients
                </p>
                <h2 className="mb-6 text-3xl font-normal tracking-tight md:leading-tight md:text-4xl md:mb-6">
                    Innovate with us today.
                </h2>
                <Link
                    href={page_routes.contactUs}
                    className="my-2 text-xl md:text-2xl font-bold shadow text-white p-4 px-8 rounded-xl bg-primaryBlue cursor-pointer hover:bg-gray-100 hover:text-black hover:scale-105 transform ease-in-out duration-300"
                >
                    Contact Us
                </Link>
            </div>
        </section>
    );
}
