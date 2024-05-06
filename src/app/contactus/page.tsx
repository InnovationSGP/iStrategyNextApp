"use client";
import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import toast from "react-hot-toast";
import {routes} from "@/pages/api/routes/messagesRoutes";
import {IncomingContactMessages} from "@/lib/types";
import {BlogCarousel} from "@/app/resources/content/BlogCarousel";
import ReCAPTCHA from "react-google-recaptcha";

function ContactUs() {
    return (
        <div className="">
            <ContactUsForm/>
            <BlogCarousel/>
        </div>
    );
}


export default ContactUs;


function ContactUsForm() {

    const [show, setShow] = useState(false);
    const {register, handleSubmit, formState: errors, reset}: any = useForm();
    const [captchaIsDone, setCaptchaIsDone] = useState(false);
    const siteKey: string = "6Ld_QNMpAAAAAKDLhdPZL9tls13saV7s1FZIWMRW"

    const onChange = () => setCaptchaIsDone(true)

    const formSubmit = async (payload: IncomingContactMessages) => {
        try {
            const {POST_MESSAGE} = routes();

            if (captchaIsDone) {
                await POST_MESSAGE(payload);
                await reset({
                    name: "",
                    email: "",
                    phone: "",
                    message: "",
                });

                console.log("payload sent to db");
                toast.success("Thank you for the message. We will reach out to you shortly", {
                    duration: 4000,
                    position: "top-center",
                });
            }


        } catch (err: any) {
            console.log(err);
            toast.error(err);
        }
    };


    return <div className="w-full h-[80vh] bg-gray-100 flex items-center justify-center py-4">
        <div className="relative bg-white drop-shadow-md rounded lg:px-28 px-8">
            <div className="container mx-auto p-16">
                <div className="lg:flex">
                    <div
                        className="xl:w-2/5 lg:w-2/5 bg-primaryBlue py-16 xl:rounded-bl rounded-tl rounded-tr xl:rounded-tr-none">
                        <div className="xl:w-5/6 xl:px-0 px-8 mx-auto">
                            <h1 className="xl:text-4xl text-3xl pb-4 text-white font-bold">Get in touch</h1>
                            <p className="text-xl text-white pb-8 leading-relaxed font-normal lg:pr-4">Got a
                                question about us? Are you interested in partnering with us? Have some
                                suggestions or just want to say Hi? Just contact us. We are here to asset
                                you.</p>
                            <div className="flex pb-4 items-center">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         className="icon icon-tabler icon-tabler-phone-call" width={20}
                                         height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff"
                                         fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z"/>
                                        <path
                                            d="M4 4h5l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v5a1 1 0 0 1 -1 1a16 16 0 0 1 -16 -16a1 1 0 0 1 1 -1"/>
                                        <path d="M15 7a2 2 0 0 1 2 2"/>
                                        <path d="M15 3a6 6 0 0 1 6 6"/>
                                    </svg>
                                </div>
                                <p className="pl-4 text-white text-base">+1 (785)-925-2129</p>
                            </div>
                            <div className="flex items-center">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         className="icon icon-tabler icon-tabler-mail" width={20} height={20}
                                         viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none"
                                         strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z"/>
                                        <rect x={3} y={5} width={18} height={14} rx={2}/>
                                        <polyline points="3 7 12 13 21 7"/>
                                    </svg>
                                </div>
                                <p className="pl-4 text-white text-base">sales@innovationsgp.com</p>
                            </div>
                            <p className="text-lg text-white pt-10 tracking-wide">
                                1170 W 135th St, <br/>
                                Overland Park, KS 66221
                            </p>
                            {/*<a href="javascript:void(0)">*/}
                            {/*    <p className="text-white pt-16 font-bold tracking-wide underline">View Job*/}
                            {/*        Openings</p>*/}
                            {/*</a>*/}
                        </div>
                    </div>
                    <div
                        className="xl:w-3/5 lg:w-3/5 bg-gray-200 h-full pt-5 pb-5 xl:pr-5 xl:pl-0 rounded-tr rounded-br">


                        <form onSubmit={handleSubmit(formSubmit)} className="bg-white py-4 px-8 rounded-tr rounded-br">
                            <h1 className="text-4xl text-gray-800 font-extrabold mb-6">Let's Get Connected!</h1>
                            <div className="block xl:flex w-full flex-wrap justify-between mb-6">
                                <div className="w-2/4 max-w-xs mb-6  xl:mb-0">
                                    <div className="flex  flex-col">
                                        <label htmlFor="name"
                                               className="text-gray-800 text-sm text-xl font-semibold leading-tight tracking-normal mb-2">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            tabIndex={0}
                                            aria-label="Please input name"
                                            required
                                            autoComplete="name"
                                            name="name"
                                            {...register("name")}
                                            className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                                            placeholder="name"/>
                                    </div>
                                </div>
                                <div className="w-2/4 max-w-xs xl:flex xl:justify-end">
                                    <div className="flex flex-col">
                                        <label htmlFor="email"
                                               className="text-gray-800 text-sm text-xl font-semibold leading-tight tracking-normal mb-2">
                                            Email
                                        </label>
                                        <input id="email"
                                               tabIndex={0}
                                               aria-label="Please input email"
                                               type="email"
                                               required
                                               autoComplete="email"
                                               name="email"
                                               {...register("email", {required: true})}
                                               className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                                               placeholder="email"/>
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-full flex-wrap">
                                <div className="w-2/4 max-w-xs">
                                    <div className="flex flex-col">
                                        <label htmlFor="phone"
                                               className="text-gray-800 text-sm  text-xl font-semibold leading-tight tracking-normal mb-2">
                                            Phone
                                        </label>
                                        <input required id="phone"
                                               tabIndex={0}
                                               role="input"
                                               aria-label="Please input phone number"
                                               type="tel"
                                               autoComplete="phone"
                                               name="phone"
                                               {...register("phone")}
                                               className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                                               placeholder="phone"/>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full mt-6">
                                <div className="flex flex-col">
                                    <label className="text-sm font-semibold text-xl text-gray-800 mb-2"
                                           htmlFor="message">
                                        Message
                                    </label>
                                    <textarea placeholder="leave us a note" name="message"
                                              tabIndex={0}
                                              aria-label="leave a message"
                                              role="textbox"
                                              autoComplete="message"
                                              required
                                              {...register("message", {required: true})}
                                              className="border-gray-300 border mb-4 rounded py-2 text-sm outline-none resize-none px-3 focus:border focus:border-indigo-700"
                                              rows={8} id="message" defaultValue={""}/>
                                </div>
                                <p className="text-xs leading-3 text-gray-600 py-4">
                                    By clicking submit you agree to our terms of service, privacy
                                    policy on contacting you via your email or phone number (if
                                    provided).
                                </p>

                                <div className='py-2'>
                                    <ReCAPTCHA
                                        sitekey={siteKey}
                                        onChange={onChange}
                                    />

                                </div>
                                <div className='py-4'>
                                    <button type="submit"
                                            className={captchaIsDone ? "focus:outline-none bg-primaryBlue" +
                                                " transition duration-150 ease-in-out hover:bg-indigo-600 rounded" +
                                                " text-white px-8 py-3 text-sm leading-6" : "focus:outline-none" +
                                                " bg-primaryBlue transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm leading-6 opacity-50 cursor-not-allowed"}>
                                        Submit
                                    </button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    </div>;
}