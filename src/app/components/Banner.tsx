import {MegaphoneIcon, XMarkIcon} from "@heroicons/react/24/outline";
import Link from "next/link";
import {page_routes} from "@/lib/pageRoutes";

export default function Banner() {
    return (
        <div className="bg-primaryBlue" data-cy="banner">
            <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
                <div className="flex flex-wrap items-center justify-between">
                    <div className="flex w-0 flex-1 items-center">
            <span className="flex rounded-lg bg-primaryPurple p-2">
              <MegaphoneIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
              />
            </span>
                        <p className="ml-3 truncate font-medium text-white">
                            <span className="md:hidden">We are releasing a new product!</span>
                            <span className="hidden md:inline">
                Big news! We are launching our first SaaS solution!.
              </span>
                        </p>
                    </div>
                    <div className="order-3 mt-2  flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                        <Link
                            href={page_routes.resourceCenter}
                            className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-50"
                        >
                            Resource Center
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
