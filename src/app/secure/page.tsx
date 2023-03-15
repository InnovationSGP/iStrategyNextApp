"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { signIn, SignInResponse } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useState } from "react";
import Loading from "../components/Loading";
import Link from "next/link";

export default function Secure() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { status } = useSession();

  const signInHandler = async (data: any) => {
    try {
      await setLoading(true);
      await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      }).then(({ ok, error }: any) => {
        if (ok) router.push("/dashboard");
        else {
          toast.error(error);
          setLoading(false);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const { handleSubmit, register, reset }: any = useForm();
  return (
    <div>
      {loading ? <Loading /> : null}

      <div className="">
        <div className="w-full flex items-center justify-center py-8">
          <div className="relative bg-white shadow rounded py-8 lg:px-28 px-8">
            <form onSubmit={handleSubmit(signInHandler)}>
              <p className="p-4 md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">
                Employee Sign In
              </p>

              <div className="flex flex-col items-center">
                <div className="p-4 flex flex-col w-full">
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
                    placeholder="email"
                    name="email"
                    {...register("email", { required: true })}
                  />
                </div>
                <div className="p-4 flex flex-col w-full">
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
              </div>
              <div></div>
              {/* <p className="text-xs leading-3 text-gray-600 mt-4">
                By clicking submit you agree to our terms of service, privacy
                policy.{" "}
                <span>
                  <Link
                    href="/secure/register"
                    className="font-bold cursor-pointer hover:border-b-2 border-primaryBlue text-primaryBlue"
                  >
                    Create a Profile
                  </Link>
                </span>
              </p> */}
              <div className="flex items-center justify-center w-full">
                <button
                  className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
