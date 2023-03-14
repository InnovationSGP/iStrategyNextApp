"use client";
import { FaceSmileIcon } from "@heroicons/react/24/outline";

export function SessionBanner(props: { data: any }) {
  return (
    <div className="bg-gray-100" data-cy="session_banner">
      <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex w-0 flex-1 items-center">
            <span className="flex rounded-lg bg-primaryPurple p-2">
              <FaceSmileIcon
                className="h-6 w-6 text-white"
                aria-hidden="true"
              />
            </span>
            <p className="ml-3 truncate font-medium text-primaryBlue">
              <span className="md:hidden">
                Welcome {props.data?.user.name}!
              </span>
              <span className="hidden md:inline">
                Welcome {props.data?.user.name}!
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
