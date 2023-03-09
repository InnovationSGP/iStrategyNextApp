"use client";
import { FunctionComponent, Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import Loading from "@/app/components/Loading";
import {
  useGetBlogs_Public,
  useGetEachBlog_Public,
} from "../../../pages/api/routes/blogRoute";
import ErrorComponent from "@/app/components/Error";
import LockClosedIcon from "@heroicons/react/24/outline/LockClosedIcon";
import ServerIcon from "@heroicons/react/24/outline/ServerIcon";
import { CloudArrowUpIcon } from "@heroicons/react/24/outline";
import CustomSpinner from "@/app/components/Spinner";
import { BlogObject } from "../../../lib/types";
import { blogsRoute } from "../../../pages/api/routes/blogRoute";
import { HeroCTA } from "../../components/HeroCTA";
import Link from "next/link";

interface BlogResourceProps {}

const BlogResource: FunctionComponent<BlogResourceProps> = () => {
  const params = useSearchParams();
  const [loading, setLoading] = useState<any>();
  const [data, setData] = useState<any>();
  const id = params.get("id");

  const { GET_A_BLOG } = blogsRoute();

  useEffect(() => {
    setLoading(true);
    GET_A_BLOG(id).then((payload: any) => {
      const { data } = payload;
      setData(data[0]);
      setLoading(false);
    });
  }, [id]);

  // const { eachblog, isError, isLoading } = useGetEachBlog_Public(id);
  // const filterData = blogs.filter((blog: any) => blog._id === id);
  // console.log(filterData);

  return (
    <div>
      <Suspense fallback={<CustomSpinner />}>
        {loading ? <CustomSpinner /> : <Content blog={data} />}
      </Suspense>
    </div>
  );
};

export default BlogResource;

function Content(props: { blog: BlogObject }) {
  console.log(props.blog);
  return (
    <div className="">
      <div className="pb-8">
        <div className="flex justify-center item-center bg-primaryBlue p-4 py-6 ">
          <div className="flex justify-center items-center gap-4 flex-col md:flex-row">
            <span className="text-white text-xl md:text-2xl font-bold">
              Resource Center
            </span>
          </div>
        </div>

        <div className="p-5 mx-auto sm:p-4 md:p-4 dark:bg-gray-800 dark:text-gray-100 ">
          <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
            <img
              src={props.blog.img}
              alt=""
              className="w-full h-60 sm:h-96 dark:bg-gray-500"
            />
            <div className="p-6 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900 bg-white shadow">
              <div className="space-y-2">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="inline-block text-2xl font-semibold sm:text-3xl capitalize"
                >
                  {props.blog.header}
                </a>
                <p className="text-xs dark:text-gray-400">
                  By
                  <Link
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs hover:underline"
                  >
                    {" "}
                    - {props.blog.author}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:px-40">
          <div className="dark:text-gray-100">
            <div dangerouslySetInnerHTML={{ __html: props.blog.content }} />
          </div>
        </div>
      </div>

      <div className="pt-2">
        <HeroCTA />
      </div>
    </div>
  );
}
