"use client";
import {registerRoute} from "@/pages/api/routes/registerRoute";
import Link from "next/link";
import React from "react";
import {useForm} from "react-hook-form";
import {toast} from "react-hot-toast";

export default function Register() {
    const {handleSubmit, register, reset}: any = useForm();

    const handleRegister = async (data: any) => {
        const {REGISTER_USER} = registerRoute();
        if (data.password == "") toast.error("Please enter Password");
        if (data.password2 == "") toast.error("Please enter confirm password");
        if (data.password != data.password2) {
            toast.error("\nPassword did not match: Please try again...");
            return false;
        }
        const payload = {
            name: data.name,
            email: data.email,
            password: data.password,
        };

        await REGISTER_USER(payload)
            .then((response) => {
                reset({
                    name: "",
                    email: "",
                    password: "",
                    password2: "",
                });
                toast.success("Account Opened Successfully");
            })
            .catch((error) => {
                console.log(error.response.data);
                return toast.error(error.response.data.message);
            });
    };
    return (
        <div>
            <div className="bg-gradient-to-l from-primaryBlue to-primaryPurple">
                <div className="w-full flex items-center justify-center py-4">
                    <div className="relative bg-white shadow rounded py-12 lg:px-14 px-4 w-4/5">
                        <form onSubmit={handleSubmit(handleRegister)}>
                            <p className="p-4 md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">
                                Add a new admin
                            </p>

                            <div className="flex flex-col items-center">
                                <div className="p-2 flex flex-col w-full">
                                    <label
                                        htmlFor="name"
                                        className="text-base font-semibold leading-none text-gray-800"
                                    >
                                        Name
                                    </label>
                                    <input
                                        tabIndex={0}
                                        arial-label="Please input name"
                                        type="name"
                                        required
                                        className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                                        autoComplete="name"
                                        name="name"
                                        {...register("name", {required: true})}
                                    />
                                </div>
                                <div className="p-2 flex flex-col w-full">
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
                                <div className="p-2 flex flex-col w-full">
                                    <label
                                        htmlFor="password"
                                        className="text-base font-semibold leading-none text-gray-800"
                                    >
                                        Password
                                    </label>
                                    <input
                                        tabIndex={0}
                                        role="input"
                                        arial-label="Please input phone number"
                                        type="password"
                                        className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 "
                                        placeholder="Please input password number"
                                        autoComplete="password"
                                        name="password"
                                        {...register("password")}
                                    />
                                </div>

                                <div className="p-2 flex flex-col w-full">
                                    <label
                                        htmlFor="password2"
                                        className="text-base font-semibold leading-none text-gray-800"
                                    >
                                        Re-enter Password
                                    </label>
                                    <input
                                        tabIndex={0}
                                        role="input"
                                        arial-label="Please input phone number"
                                        type="password"
                                        className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 "
                                        placeholder="Please input password number"
                                        autoComplete="password"
                                        name="password2"
                                        {...register("password2")}
                                    />
                                </div>
                            </div>
                            <div></div>
                            {/* <p className="text-xs leading-3 text-gray-600 mt-4">
                By clicking submit you agree to our terms of service, privacy
                policy.{" "}
                <span>
                  {" "}
                  <Link
                    href="/secure"
                    className="font-bold cursor-pointer hover:border-b-2 border-primaryBlue text-primaryBlue"
                  >
                    {" "}
                    Return to Login
                  </Link>
                </span>
              </p> */}
                            <div className="flex items-center justify-center w-full">
                                <button
                                    className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none"
                                    type="submit"
                                >
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
