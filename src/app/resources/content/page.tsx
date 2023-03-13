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
import ImageFunction from "@/utils/ImageFunction";
import { page_routes } from "@/lib/pageRoutes";
import Image from "next/image";

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
  }, []);

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

        <article>
          <div className="grid items-center grid-cols-1 md:grid-cols-2">
            <div className="order-2 h-64 md:order-1 md:h-full">
              <Image
                src={props.blog?.img}
                className="object-cover w-full h-full bg-center"
                alt={`Picture of ${props.blog?.img}`}
                width={400}
                height={600}
              />
            </div>
            <div className="order-1 w-full px-4 py-12 mx-auto text-left md:w-3/4 md:py-48 md:order-2 md:px-0">
              <p className="mb-3 text-gray-500">
                <time>
                  {new Date(props.blog?.date).toLocaleDateString(undefined, {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </p>
              <h1
                className="mb-5 text-3xl font-bold text-gray-900 md:leading-tight md:text-4xl capitalize"
                itemProp="headline"
                title={props.blog?.header}
              >
                {props.blog?.header}
              </h1>
              <Link className="flex items-center text-gray-700" href="#">
                <div className="avatar"></div>
                <div className="ml-2">
                  <p className="text-sm font-semibold text-gray-800 capitalize">
                    {props.blog?.author}
                  </p>
                </div>
              </Link>
            </div>
          </div>

          <section className="sm:px-24 flex flex-col relative py-4 pt-14">
            <main className="dark:text-gray-100">
              <hr />
              <div dangerouslySetInnerHTML={{ __html: props.blog?.content }} />
            </main>
          </section>
        </article>
        <div className="pt-2">
          <HeroCTA />
        </div>
        <div className="shawdow pt-8">
          <BlogCarousel />
        </div>
      </div>
    </div>
  );
}

export const BlogCarousel = () => {
  const { blogs, isLoading, isError } = useGetBlogs_Public();
  return (
    <section className="px-4 py-4 mx-auto bg-white ">
      <h2 className="mb-2 text-3xl font-extrabold leading-tight text-primaryBlue py-4 items-center text-center">
        Recent Resources{" "}
      </h2>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 text-primaryBlue">
        {blogs || blogs?.length > 0
          ? blogs
              .slice(0, 3)
              .map((blog: BlogObject) => (
                <BlogCarouselCard data={blog} key={blog._id} />
              ))
          : "No recent blogs"}
      </div>
      <div className="text-center pt-8 flex justify-end ">
        <Link
          className="text-xs md:text-lg font-bold shadow text-primaryBlue p-4 px-4 rounded-sm bg-gray-100 cursor-pointer hover:bg-primaryBlue hover:text-white hover:scale-105 transform ease-in-out duration-300 animate-bounce"
          href={page_routes.resourceCenter}
        >
          Load More
        </Link>
      </div>
    </section>
  );
};

function BlogCarouselCard(props: { data: BlogObject }) {
  return (
    <div className="">
      <Link href={`${page_routes.resourceCenter}/content?id=${props.data._id}`}>
        <Image
          src={props.data.img}
          className="object-cover w-full h-56 mb-5 bg-center rounded"
          alt={props.data.header}
          loading="lazy"
          width={400}
          height={600}
        />
      </Link>
      <h2 className="mb-2 text-lg font-semibold text-primaryBlue">
        <Link
          href={`${page_routes.resourceCenter}/content?id=${props.data._id}`}
          className="text-primaryBlue hover:text-purple-700 capitalize"
        >
          {props.data.header}
        </Link>
      </h2>

      <p className="mb-3 text-sm font-normal text-gray-500">
        <Link
          href={`${page_routes.resourceCenter}/content?id=${props.data._id}`}
          className="font-medium text-primaryBlue hover:text-purple-700"
        >
          {props.data.author}
        </Link>{" "}
        -{" "}
        {new Date(props.data.date).toLocaleDateString(undefined, {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
    </div>
  );
}
