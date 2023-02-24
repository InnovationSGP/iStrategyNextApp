"use client";
import { IncomingContactMessages, User } from "@/lib/types";
import { FaceSmileIcon, MegaphoneIcon } from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import { FC, useState } from "react";
import Loading from "../components/Loading";
import useSWR from "swr";
import ErrorComponent from "../components/Error";
import { useGetMessages } from "@/pages/api/routes/messagesRoutes";
import ReactPaginate from "react-paginate";

interface SessionProps {}

const Session: FC<SessionProps> = () => {
  const [show, setShow] = useState(false);
  const session = useSession();
  const { data, status } = session as any;
  const { messages, isError } = useGetMessages();

  if (status === "loading") return <Loading />;
  if (isError || !messages) return <ErrorComponent />;

  return (
    <div>
      <div className="bg-primaryBlue" data-cy="session_banner">
        <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex w-0 flex-1 items-center">
              <span className="flex rounded-lg bg-primaryPurple p-2">
                <FaceSmileIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </span>
              <p className="ml-3 truncate font-medium text-white">
                <span className="md:hidden">Welcome {data.user.name}!</span>
                <span className="hidden md:inline">
                  Welcome {data.user.name}!
                </span>
              </p>
            </div>
            <div className="order-3 mt-2  flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
              <a
                href="/blog"
                className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-50"
              >
                logout
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col p-10 sm:flex-row">
        <div className="basis-1/2 p-4">
          <div className="   ">
            <Messages messages={messages} />
          </div>
        </div>
        <div className="basis-1/2">
          <Badge />
        </div>
      </div>
    </div>
  );
};

export default Session;

function Badge(props: any) {
  const [show, setShow] = useState(null);

  return (
    <div className="py-12 px-4">
      <div className="lg:max-w-[356px] md:max-w-[516px] max-w-[343px] mx-auto">
        <div className="mx-auto bg-white px-3 py-4 rounded">
          <div>
            <img
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Group%20813077.png"
              className="mx-auto"
            />
          </div>
          <div className="lg:block hidden">
            <div className="flex justify-between items-center gap-x-4 px-8">
              <div aria-label="one">
                <div className="flex gap-2 items-center">
                  <svg
                    width={20}
                    height={8}
                    viewBox="0 0 20 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width={20} height={8} rx={4} fill="#EF4444" />
                  </svg>
                  <p className="text-xs font-medium leading-3 text-gray-800">
                    Poor
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <svg
                    width={20}
                    height={8}
                    viewBox="0 0 20 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width={20} height={8} rx={4} fill="#FACC15" />
                  </svg>
                  <p className="text-xs font-medium leading-3 text-gray-800">
                    Fair
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <svg
                    width={20}
                    height={8}
                    viewBox="0 0 20 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width={20} height={8} rx={4} fill="#BEF264" />
                  </svg>
                  <p className="text-xs font-medium leading-3 text-gray-800">
                    Satisfactory
                  </p>
                </div>
              </div>
              <div aria-label="two">
                <div className="flex items-center gap-2">
                  <svg
                    width={20}
                    height={8}
                    viewBox="0 0 20 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width={20} height={8} rx={4} fill="#14B8A6" />
                  </svg>
                  <p className="text-xs font-medium leading-3 text-gray-800">
                    Good
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <svg
                    width={20}
                    height={8}
                    viewBox="0 0 20 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width={20} height={8} rx={4} fill="#22C55E" />
                  </svg>
                  <p className="text-xs font-medium leading-3 text-gray-800">
                    Better
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <svg
                    width={20}
                    height={8}
                    viewBox="0 0 20 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width={20} height={8} rx={4} fill="#15803D" />
                  </svg>
                  <p className="text-xs font-medium leading-3 text-gray-800">
                    Exceptional
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:hidden block">
            <div className="flex flex-wrap justify-between gap-3 items-center px-8">
              <div className="flex gap-2 items-center">
                <svg
                  width={20}
                  height={8}
                  viewBox="0 0 20 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width={20} height={8} rx={4} fill="#EF4444" />
                </svg>
                <p className="text-xs font-medium leading-3 text-gray-800">
                  Poor
                </p>
              </div>
              <div className="flex items-center gap-2 ">
                <svg
                  width={20}
                  height={8}
                  viewBox="0 0 20 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width={20} height={8} rx={4} fill="#FACC15" />
                </svg>
                <p className="text-xs font-medium leading-3 text-gray-800">
                  Fair
                </p>
              </div>
              <div className="flex items-center gap-2 ">
                <svg
                  width={20}
                  height={8}
                  viewBox="0 0 20 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width={20} height={8} rx={4} fill="#BEF264" />
                </svg>
                <p className="text-xs font-medium leading-3 text-gray-800">
                  Satisfactory
                </p>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  width={20}
                  height={8}
                  viewBox="0 0 20 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width={20} height={8} rx={4} fill="#14B8A6" />
                </svg>
                <p className="text-xs font-medium leading-3 text-gray-800">
                  Good
                </p>
              </div>
              <div className="flex items-center gap-2 ">
                <svg
                  width={20}
                  height={8}
                  viewBox="0 0 20 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width={20} height={8} rx={4} fill="#22C55E" />
                </svg>
                <p className="text-xs font-medium leading-3 text-gray-800">
                  Better
                </p>
              </div>
              <div className="flex items-center gap-2 ">
                <svg
                  width={20}
                  height={8}
                  viewBox="0 0 20 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width={20} height={8} rx={4} fill="#15803D" />
                </svg>
                <p className="text-xs font-medium leading-3 text-gray-800">
                  Exceptional
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Messages(props: { messages: IncomingContactMessages[] }) {
  const [show, setShow] = useState(null);

  // pagination
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 5;
  const pagesVisited = pageNumber * itemsPerPage;
  const pageCount = Math.ceil(props.messages.length / itemsPerPage);
  const changePage = ({ selected }: any) => setPageNumber(selected);

  const paginatedItems = props.messages
    .slice(pagesVisited, pagesVisited + itemsPerPage)
    .map((message: any) => <EachMessage key={message._id} message={message} />);

  //pagination
  return (
    <>
      <div>
        <div className="w-full h-full">
          <div className="px-2 md:px-2 py-4 md:py-2">
            <div className="flex items-center justify-between">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
                Incoming Messages
              </p>
              <div className="py-2 px-2 flex items-center text-xs font-medium leading-none text-gray-600 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded">
                <p>Sort By:</p>
                <select className="focus:outline-none bg-transparent ml-1">
                  <option className="text-sm text-indigo-800">Latest</option>
                  <option className="text-sm text-indigo-800">Oldest</option>
                  <option className="text-sm text-indigo-800">Latest</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center flex-col">
            <div className="bg-white w-full">{paginatedItems}</div>
            <div className="p-4">
              <ReactPaginate
                pageCount={pageCount}
                previousLabel={"Previous"}
                nextLabel={"Next"}
                onPageChange={changePage}
                containerClassName={
                  "relative inline-flex items-center bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
                }
                nextLinkClassName={
                  "relative items-center border border-grey-300 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-4 py-2 text-xs font-medium"
                }
                previousLinkClassName={
                  "relative items-center border border-grey-300 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-4 py-2 text-xs font-medium"
                }
                activeLinkClassName={
                  "relative inline-flex items-center border font-bold border-primaryBlue bg-white px-4 py-2 text-xs font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                }
                activeClassName={
                  "relative inline-flex items-center bg-white px-4 py-2 text-xs font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                }
                disabledClassName={
                  "relative inline-flex items-center bg-white px-4 py-2 text-xs font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                }
                pageClassName={
                  "relative inline-flex items-center bg-white px-4 py-2 text-xs font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function EachMessage(props: { message: IncomingContactMessages }) {
  return (
    <div className="mt-4 p-2 overflow-x-auto shadow-sm hover:bg-gray-100">
      <div className="flex justify-between">
        <div className="flex flex-col basis-2/3">
          <h2>Received</h2>
          <span className="">
            <span className="text-xs focus:outline-none leading-none text-green-500  rounded">
              From: {props.message.name}
            </span>
          </span>
        </div>
        <div className="flex justify-between  items-center">
          <button className="text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">
            View Message
          </button>
        </div>
      </div>
    </div>
  );
}
