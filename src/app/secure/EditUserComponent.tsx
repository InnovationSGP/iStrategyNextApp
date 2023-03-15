"use client";
import { registerRoute } from "@/pages/api/routes/registerRoute";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

export default function EditUser(props: { user: any }) {
  const { handleSubmit, register, reset }: any = useForm({
    defaultValues: {
      name: props.user.name,
      email: props.user.email,
      admin: props.user.admin,
    },
  });

  const handleRegister = async (data: any) => {
    const { EDIT_USER } = registerRoute();

    const payload = {
      id: props.user._id,
      name: data.name,
      email: data.email,
      admin: data.admin,
    };

    await EDIT_USER(payload)
      .then((response) => {
        reset({
          name: "",
          email: "",
          admin: "",
        });
        toast.success("User Information Updated");
      })
      .catch((error) => {
        console.log(error.response.data);
        return toast.error("Something went wrong");
      });
  };
  return (
    <div>
      <div className="bg-gradient-to-l from-primaryBlue to-primaryPurple">
        <div className="w-full flex items-center justify-center py-4">
          <div className="relative bg-white shadow rounded py-12 lg:px-14 px-4 w-4/5">
            <form onSubmit={handleSubmit(handleRegister)}>
              <p className="p-4 md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">
                Edit User
              </p>

              <div className="flex flex-col items-center">
                <div className="p-2 py-4 flex flex-col w-full">
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
                    className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                    autoComplete="name"
                    name="name"
                    {...register("name")}
                  />
                </div>

                <div className="p-2 py-4 flex flex-col w-full">
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
                    className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                    autoComplete="email"
                    name="email"
                    {...register("email")}
                  />
                </div>

                <div className="p-2 py-4 flex flex-col w-full">
                  <label
                    htmlFor="admin"
                    className="text-base font-semibold leading-none text-gray-800"
                  >
                    Admin
                  </label>
                  <select
                    name="admin"
                    id="admin"
                    className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 "
                    placeholder="Please input password number"
                    {...register("admin")}
                  >
                    <option value="true">True</option>
                    <option value="false">False</option>
                  </select>
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
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
