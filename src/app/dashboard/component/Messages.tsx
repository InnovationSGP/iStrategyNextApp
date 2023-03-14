"use client";
import { IncomingContactMessages } from "@/lib/types";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { EachMessage } from "./EachMessage";

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
