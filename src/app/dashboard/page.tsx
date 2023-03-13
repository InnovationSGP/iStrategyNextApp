"use client";
import { IncomingContactMessages } from "@/lib/types";
import { FaceSmileIcon } from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import { FC, Suspense, useState } from "react";
import Loading from "../components/Loading";
import ErrorComponent from "../components/Error";
import { useGetMessages, routes } from "@/pages/api/routes/messagesRoutes";
import ReactPaginate from "react-paginate";
import { ViewMessageModal } from "../components/Modal";
import CustomSpinner from "../components/Spinner";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface SessionProps {}

const Session: FC<SessionProps> = () => {
  const [show, setShow] = useState(false);
  const { messages, isError, isLoading } = useGetMessages();
  const session = useSession();
  const { data, status } = session as any;
  if (status === "loading") <Loading />;
  if (isError) return <ErrorComponent />;

  return (
    <div>
      <div className="flex flex-col p-10 sm:flex-row">
        <div className="basis-1/2 p-4">
          <Suspense fallback={<Loading />}>
            <div>
              {isLoading ? <CustomSpinner /> : <Messages messages={messages} />}
            </div>
          </Suspense>
        </div>
        <div className="basis-1/2">
          <Badge />
        </div>
      </div>
    </div>
  );
};

export default Session;

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
export function Badge(props: any) {
  const [show, setShow] = useState(null);

  return (
    <div className="py-12 px-4">
      <div className="lg:max-w-[356px] md:max-w-[516px] max-w-[343px] mx-auto">
        <div className="mx-auto bg-white px-3 py-4 rounded">
          <div>Image Here</div>
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

export function Messages(props: { messages: IncomingContactMessages[] }) {
  const [show, setShow] = useState(null);

  // pagination
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 5;
  const pagesVisited = pageNumber * itemsPerPage;
  const pageCount = Math.ceil(props.messages?.length / itemsPerPage);
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

const EachMessage = (props: { message: IncomingContactMessages }) => {
  const readMessage = async (
    id: any,
    data: { read: boolean; responded: boolean }
  ) => {
    try {
      const { EDIT_MESSAGE } = routes();
      await EDIT_MESSAGE(id, data);
      await router.refresh();
      return toast.success("Email is marked read");
    } catch (error) {
      console.log(error);
    }
  };

  const router = useRouter();

  return (
    <div
      className={`mt-4 p-4 overflow-x-auto shadow-sm cursor-pointer ${
        props.message.read === true ? "bg-gray-300" : "bg-white"
      }  hover:bg-gray-100`}
    >
      <div className="flex justify-between">
        <div className="flex flex-col basis-2/3">
          <p className="text-xs text-black"></p>
          <h2 className="capitalize">Message From {props.message.name}</h2>
          <span className="flex gap-2">
            <button
              className="text-xs text-gray-400 hover:underline pt-1"
              onClick={() => {
                const payload = {
                  read:
                    props.message.read === true
                      ? (false as boolean)
                      : (true as boolean),
                  responded: props.message.responded,
                };
                return readMessage(props.message._id, payload);
              }}
            >
              {props.message.read === true ? `Unread` : "Read"}
            </button>

            <button
              className={`text-xs font-bold text-gray-400 hover:underline pt-1 ${
                props.message.responded === true
                  ? " text-gray-400 cursor-not-allowed"
                  : "text-green-600"
              }`}
              onClick={() => {
                const payload = {
                  read:
                    props.message.responded == true
                      ? true
                      : props.message.responded,
                  responded:
                    props.message.responded === true
                      ? (false as boolean)
                      : (true as boolean),
                };
                return readMessage(props.message._id, payload);
              }}
              disabled={props.message.responded === true ? true : false}
            >
              {props.message.responded === true
                ? `Responded ${new Date(
                    props.message.updatedAt
                  ).toLocaleDateString()}`
                : "Responded?"}
            </button>
          </span>
        </div>
        <div className="flex justify-between items-center flex-col">
          <ViewMessageModal
            name={props.message.name}
            email={props.message.email}
            content={props.message.message}
            header={`Message From ${
              props.message.name ? props.message.name : "Anonymous"
            }`}
            emailBody={"Thank you for contacting me."}
          />
        </div>
      </div>
    </div>
  );
};
