import {useState, Fragment} from "react";
import CustomButton from "./Button";
import {Dialog, Transition} from "@headlessui/react";
import {Mailto} from "./Mailto";
import Link from "next/link";
import {TrashIcon} from "@heroicons/react/24/outline";
import {page_routes} from "@/lib/pageRoutes";

interface CustomModalTypes {
    header?: string;
    content: any;
    agreeFunction?: any;
    agreeFunctionText?: any;
    disagreeFunction?: any;
    disagreeFunctionText?: any;
    agreeButtonColor?: string;
    disagreeButtonColor?: string;
    buttonChildren?: any;
    linkTag?: boolean;
    linkTagColor?: string;
    headerIcon?: any;
}

export const LearnMoreModal = (props: CustomModalTypes) => {
    const {
        header,
        content,
        agreeFunction,
        agreeFunctionText,
        disagreeFunction,
        disagreeFunctionText,
        agreeButtonColor,
        disagreeButtonColor,
        buttonChildren,
        linkTag,
        linkTagColor,
        headerIcon,
    } = props;
    const [show, setshow_modal_XV] = useState(false);
    const openCustomModal = () => setshow_modal_XV(true);
    const closeCustomModal = () => setshow_modal_XV(false);
    return (
        <>
            {linkTag ? (
                <button
                    onClick={openCustomModal}
                    className={`underline ${linkTagColor} font-bold hover:bg-light hover:opacity-60`}
                >
                    {buttonChildren}
                </button>
            ) : (
                <CustomButton
                    txtColor="text-primaryBlue"
                    text={"Learn more"}
                    type={"button"}
                    clickFunction={openCustomModal}
                />
            )}

            <Transition appear show={show} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeCustomModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25"/>
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-2 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel
                                    className="w-4.5/5 sm:w-4/5 max-w-5xl mt-20 transform overflow-hidden rounded-sm bg-white p-4 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        {" "}
                                        <div className="flex justify-end">
                                            <button onClick={closeCustomModal}>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="w-6 h-6 text-black hover:text-gray-500"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="p-2">
                                            {headerIcon}
                                            <p className="px-2 text-2xl text-gray-800 font-semibold leading-5 mt-6">
                                                {header}
                                            </p>
                                        </div>
                                    </Dialog.Title>

                                    {/* //Content Section */}

                                    <div className="p-2">
                                        <div className="text-lg text-black">{content}</div>
                                        <div className="py-6 px-2">
                                            <Link
                                                href={page_routes.contactUs}
                                                className="my-2 text-md md:text-md font-bold shadow text-white p-2 px-4 rounded-md bg-primaryPurple cursor-pointer hover:bg-gray-100 hover:text-black hover:scale-105 transform ease-in-out duration-300"
                                            >
                                                Contact Us
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="m-4 flex">
                                        {agreeFunction && (
                                            <CustomButton
                                                txtColor="text-primaryBlue"
                                                text={"Learn more"}
                                                type={"button"}
                                                clickFunction={agreeFunction}
                                            />
                                        )}
                                    </div>
                                    <div className="m-4">
                                        {disagreeFunction && (
                                            <CustomButton
                                                txtColor="text-primaryBlue"
                                                text={"Learn more"}
                                                type={"button"}
                                                clickFunction={
                                                    disagreeFunction()
                                                        ? disagreeFunction
                                                        : closeCustomModal
                                                }
                                            />
                                        )}
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

interface ViewMessageModal {
    name: any;
    email: any;
    header: any;
    content: any;
    emailBody: any;
}

export const ViewMessageModal = (props: ViewMessageModal) => {
    const {name, email, header, content, emailBody} = props;
    const [show, setshow_modal_XV] = useState(false);
    const openCustomModal = () => setshow_modal_XV(true);
    const closeCustomModal = () => setshow_modal_XV(false);
    return (
        <>
            {
                <CustomButton
                    txtColor="text-primaryBlue text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none"
                    text={"View Message"}
                    type={"button"}
                    clickFunction={openCustomModal}
                />
            }

            <Transition appear show={show} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeCustomModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25"/>
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-2 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel
                                    className="w-3/5 max-w-5xl mt-24 transform overflow-hidden rounded-sm bg-white p-4 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        {" "}
                                        <div className="flex justify-end">
                                            <button onClick={closeCustomModal}>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="w-6 h-6 text-black hover:text-gray-500"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="p-2">
                                            <p className=" text-xl text-gray-800 font-semibold leading-5 mt-6 p-2 capitalize">
                                                {header}
                                            </p>
                                        </div>
                                    </Dialog.Title>

                                    {/* //Content Section */}

                                    <div className="p-2">
                                        <div className="text-sm text-gray-500 flex flex-col">
                                            <div className="p-2">{content}</div>

                                            <div className="p-2">
                                                <Mailto
                                                    email={email}
                                                    subject={`Hello ${name}, Thank You`}
                                                    body={emailBody}
                                                >
                                                    Email {name}
                                                </Mailto>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="m-4 flex"></div>
                                    <div className="m-4"></div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export const PlainModal = (props: {
    header: string;
    content: any;
    buttonText: string;
    buttonTWClasses: string;
}) => {
    const {header, content, buttonText, buttonTWClasses} = props;
    const [show, setshow_modal_XV] = useState(false);
    const openCustomModal = () => setshow_modal_XV(true);
    const closeCustomModal = () => setshow_modal_XV(false);
    return (
        <>
            {
                <CustomButton
                    txtColor={props.buttonTWClasses}
                    text={props.buttonText}
                    type={"button"}
                    clickFunction={openCustomModal}
                />
            }

            <Transition appear show={show} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeCustomModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25"/>
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-2 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel
                                    className="w-3/5 max-w-5xl mt-24 transform overflow-hidden rounded-sm bg-white p-4 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        {" "}
                                        <div className="flex justify-end">
                                            <button onClick={closeCustomModal}>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="w-6 h-6 text-black hover:text-gray-500"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="p-2">
                                            <p className=" text-xl text-gray-800 font-semibold leading-5 mt-6 p-2 capitalize">
                                                {header}
                                            </p>
                                        </div>
                                    </Dialog.Title>

                                    {/* //Content Section */}

                                    <div className="p-2">
                                        <div className="text-sm text-gray-500 flex flex-col">
                                            <div className="p-2">{content}</div>
                                        </div>
                                    </div>

                                    <div className="m-4 flex"></div>
                                    <div className="m-4"></div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export const HTMLModal = (props: {
    header: string;
    content: any;
    buttonText: string;
    buttonTWClasses: string;
}) => {
    const {header, content, buttonText, buttonTWClasses} = props;
    const [show, setshow_modal_XV] = useState(false);
    const openCustomModal = () => setshow_modal_XV(true);
    const closeCustomModal = () => setshow_modal_XV(false);
    return (
        <>
            {
                <CustomButton
                    txtColor={props.buttonTWClasses}
                    text={props.buttonText}
                    type={"button"}
                    clickFunction={openCustomModal}
                />
            }

            <Transition appear show={show} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeCustomModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25"/>
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-2 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel
                                    className="w-3/5 max-w-5xl mt-24 transform overflow-hidden rounded-sm bg-white p-4 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        {" "}
                                        <div className="flex justify-end">
                                            <button onClick={closeCustomModal}>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="w-6 h-6 text-black hover:text-gray-500"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="p-2">
                                            <p className=" text-xl text-gray-800 font-semibold leading-5 mt-6 p-2 capitalize">
                                                {header}
                                            </p>
                                        </div>
                                    </Dialog.Title>

                                    {/* //Content Section */}

                                    <div className="p-2">
                                        <div className="text-sm text-gray-500 flex flex-col">
                                            <div
                                                className="p-2"
                                                dangerouslySetInnerHTML={{__html: content}}
                                            />
                                        </div>
                                    </div>

                                    <div className="m-4 flex"></div>
                                    <div className="m-4"></div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export const DeleteModal = (props: { header: string; delete: any }) => {
    const [show, setshow_modal_XV] = useState(false);
    const openCustomModal = () => setshow_modal_XV(true);
    const closeCustomModal = () => setshow_modal_XV(false);
    return (
        <div>
            <div>
        <span onClick={openCustomModal} className=" ">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-14 h-14 hover:bg-red-200 cursor-pointer text-red-700 hover:scale-105 p-2 rounded-sm"
          >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </span>
            </div>

            <Transition appear show={show} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeCustomModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25"/>
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-2 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel
                                    className="w-3/5 max-w-5xl mt-24 transform overflow-hidden rounded-sm bg-white p-4 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        {" "}
                                        <div className="flex justify-end">
                                            <CustomButton
                                                txtColor={
                                                    "py-2 px-4 text-white bg-gray-400 rounded-sm shadow text-sm"
                                                }
                                                text={"Dimiss"}
                                                type={"button"}
                                                clickFunction={closeCustomModal}
                                            />
                                        </div>
                                        <div className="p-2">
                                            <p className=" text-xl text-gray-800 font-semibold leading-5 mt-6 px-8 capitalize">
                                                {props.header}
                                            </p>
                                        </div>
                                    </Dialog.Title>

                                    {/* //Content Section */}

                                    <div className="p-2">
                                        <div className="text-sm text-gray-500 flex flex-col">
                                            <div className="p-2">
                                                <div className="p-6">
                          <span
                              className={`py-2 px-3  cursor-pointer bg-red-700 text-white`}
                              onClick={async () => {
                                  await props.delete();
                                  return closeCustomModal();
                              }}
                          >
                            Yes! Delete Resource
                          </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="m-4 flex"></div>
                                    <div className="m-4"></div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
};

export const EditModal = (props: { header: string; content: any }) => {
    const [show, setshow_modal_XV] = useState(false);
    const openCustomModal = () => setshow_modal_XV(true);
    const closeCustomModal = () => setshow_modal_XV(false);
    return (
        <div>
            <div>
        <span onClick={openCustomModal} className=" ">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-14 h-14 hover:bg-green-200 cursor-pointer text-green-700 hover:scale-105 p-2 rounded-sm"
          >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
        </span>
            </div>

            <Transition appear show={show} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeCustomModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25"/>
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-2 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel
                                    className="w-3/5 max-w-5xl mt-24 transform overflow-hidden rounded-sm bg-white p-4 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        {" "}
                                        <div className="flex justify-end">
                                            <CustomButton
                                                txtColor={
                                                    "py-2 px-4 text-white bg-red-800 rounded-sm shadow text-sm"
                                                }
                                                text={"Dimiss"}
                                                type={"button"}
                                                clickFunction={closeCustomModal}
                                            />
                                        </div>
                                        <div className="p-2">
                                            <p className=" text-xl text-gray-800 font-semibold leading-5 mt-6 px-8 capitalize">
                                                {props.header}
                                            </p>
                                        </div>
                                    </Dialog.Title>

                                    {/* //Content Section */}

                                    <div className="p-2">
                                        <div className="text-sm text-gray-500 flex flex-col">
                                            <div className="p-2">{props.content}</div>
                                        </div>
                                    </div>

                                    <div className="m-4 flex"></div>
                                    <div className="m-4"></div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
};
export const PublishModal = (props: { header: string; content: any }) => {
    const [show, setshow_modal_XV] = useState(false);
    const openCustomModal = () => setshow_modal_XV(true);
    const closeCustomModal = () => setshow_modal_XV(false);
    return (
        <div>
            <div>
        <span onClick={openCustomModal} className=" ">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-14 h-14 hover:bg-indigo-100 cursor-pointer text-primaryBlue hover:scale-105 p-2 rounded-sm"
          >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>
            </div>

            <Transition appear show={show} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeCustomModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25"/>
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-2 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel
                                    className="w-3/5 max-w-5xl mt-24 transform overflow-hidden rounded-sm bg-white p-4 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        {" "}
                                        <div className="flex justify-end">
                                            <CustomButton
                                                txtColor={
                                                    "py-2 px-4 text-white bg-red-800 rounded-sm shadow text-sm"
                                                }
                                                text={"Dimiss"}
                                                type={"button"}
                                                clickFunction={closeCustomModal}
                                            />
                                        </div>
                                        <div className="p-2">
                                            <p className=" text-xl text-gray-800 font-semibold leading-5 mt-6 px-8 capitalize">
                                                {props.header}
                                            </p>
                                        </div>
                                    </Dialog.Title>

                                    {/* //Content Section */}

                                    <div className="p-2">
                                        <div className="text-sm text-gray-500 flex flex-col">
                                            <div className="p-2">{props.content}</div>
                                        </div>
                                    </div>

                                    <div className="m-4 flex"></div>
                                    <div className="m-4"></div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
};
