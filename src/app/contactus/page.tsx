"use client";
import React, {useState} from "react";
import {useForm} from "react-hook-form";
import toast from "react-hot-toast";
import {routes} from "@/pages/api/routes/messagesRoutes";
import {IncomingContactMessages} from "@/lib/types";

function ContactUs() {
    const [show, setShow] = useState(false);
    const {register, handleSubmit, formState: errors, reset}: any = useForm();

    const formSubmit = async (payload: IncomingContactMessages) => {
        try {
            const {POST_MESSAGE} = routes();
            await POST_MESSAGE(payload);
            await reset({
                name: "",
                email: "",
                phone: "",
                message: "",
            });
            console.log("payload sent to db");
            toast.success("Message Sent, we will get back to you shortly", {
                duration: 4000,
                position: "top-center",
            });
        } catch (err: any) {
            console.log(err);
            toast.error(err);
        }
    };

    return (
        <div className="">
            <div className="w-full flex items-center justify-center py-4">
                <div className="relative bg-white drop-shadow-md rounded py-12 lg:px-28 px-8">
                    <form onSubmit={handleSubmit(formSubmit)}>
                        <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">
                            Let’s chat!
                        </p>
                        <div className="md:flex items-center mt-8">
                            <div className=" w-4/5 flex flex-col">
                                <label
                                    htmlFor="name"
                                    className="text-base font-semibold leading-none text-gray-800"
                                >
                                    Name
                                </label>
                                <input
                                    tabIndex={0}
                                    arial-label="Please input name"
                                    className="text-base w-full leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                                    placeholder="Please input name"
                                    type="text"
                                    required
                                    autoComplete="name"
                                    name="name"
                                    {...register("name")}
                                />
                            </div>
                        </div>
                        <div className="md:flex items-center mt-8">
                            <div className="md:w-72 flex flex-col">
                                <label
                                    htmlFor="phone"
                                    className="text-base font-semibold leading-none text-gray-800"
                                >
                                    Phone Number
                                </label>
                                <input
                                    tabIndex={0}
                                    role="input"
                                    arial-label="Please input phone number"
                                    type="phone"
                                    className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 "
                                    placeholder="Please input phone number"
                                    autoComplete="phone"
                                    name="phone"
                                    {...register("phone")}
                                />
                            </div>
                            <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                                <label
                                    htmlFor="email"
                                    className="text-base font-semibold leading-none text-gray-800"
                                >
                                    Email
                                </label>
                                <input
                                    tabIndex={0}
                                    arial-label="Please input email"
                                    type="email"
                                    required
                                    className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                                    autoComplete="email"
                                    name="email"
                                    {...register("email", {required: true})}
                                />
                            </div>
                        </div>
                        <div>
                            <div className="w-full flex flex-col mt-8">
                                <label
                                    htmlFor="message"
                                    className="text-base font-semibold leading-none text-gray-800"
                                >
                                    Message
                                </label>
                                <textarea
                                    tabIndex={0}
                                    aria-label="leave a message"
                                    role="textbox"
                                    className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none"
                                    defaultValue={""}
                                    autoComplete="message"
                                    name="message"
                                    required
                                    {...register("message", {required: true})}
                                />
                            </div>
                        </div>

                        <p className="text-xs leading-3 text-gray-600 mt-4">
                            By clicking submit you agree to our terms of service, privacy
                            policy on contact you via your email or phone number (if
                            provided).
                        </p>
                        <div className="flex items-center justify-center w-full">
                            <button
                                className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-primaryPurple rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none"
                                type="submit"
                            >
                                SUBMIT
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
