import React from "react";
import {LogoBrand} from "@/utils/Logo";

const Footer = () => {
    const todaysDate = new Date().getFullYear();

    return (
        <div className="mx-auto pt-4 shadow  mt-8">
            <section className="bg-primaryBlue dark:bg-gray-900">
                <div className="container px-8 py-6 mx-auto flex flex-col items-center">
                    <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3 items-center ">
                        <div>
              <span className="inline-block p-3 text-white rounded-full bg-primaryPink dark:bg-gray-800">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </span>

                            <h2 className="mt-4 text-lg font-medium text-white dark:text-white">
                                Email
                            </h2>
                            <p className="mt-2 text-white">
                                Our friendly team is here to help.
                            </p>
                            <p className="mt-2 text-white ">sales@innovationsgp.com </p>
                        </div>

                        <div>
              <span className="inline-block p-3 text-white rounded-full bg-primaryPink dark:bg-gray-800">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </span>

                            <h2 className="mt-4 text-lg font-medium text-white dark:text-white">
                                Office
                            </h2>

                            <p className="mt-2 text-white dark:text-white">Remote,</p>
                            <p className="mt-2 text-white ">Kansas City, KS</p>
                        </div>

                        <div>
              <span className="inline-block p-3 text-white rounded-full bg-primaryPink dark:bg-gray-800">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </span>

                            <h2 className="mt-4 text-lg font-medium text-white dark:text-white">
                                Phone
                            </h2>
                            <p className="mt-2 text-white ">Mon-Fri from 8am to 6pm.</p>
                            <p className="mt-2 text-white ">+1 (785) 925-2129</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center pt-12">
                        <LogoBrand footer/>
                        <p className="text-sm  text-white mt-4">
                            Copyright © {todaysDate} Innovation Strategy Group LLC dba
                            InnovationSGP.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Footer;
