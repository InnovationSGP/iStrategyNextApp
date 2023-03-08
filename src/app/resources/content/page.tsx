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
    <div className="relative isolate overflow-hidden bg-white px-6 py-8 sm:py-8 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-primaryBlue">
                {props.blog.resource}
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {props.blog.header}
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                by - {props.blog.author}
              </p>
            </div>
          </div>
        </div>
        <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src={props.blog.img}
            alt={props.blog.header}
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              {props.blog.content}
              {/* <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon
                    className="mt-1 h-5 w-5 flex-none text-primaryBlue"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Push to deploy.
                    </strong>{" "}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon
                    className="mt-1 h-5 w-5 flex-none text-primaryBlue"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      SSL certificates.
                    </strong>{" "}
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                    qui lorem cupidatat commodo.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-primaryBlue"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Database backups.
                    </strong>{" "}
                    Ac tincidunt sapien vehicula erat auctor pellentesque
                    rhoncus. Et magna sit morbi lobortis.
                  </span>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
      <HeroCTA />
    </div>
  );
}
