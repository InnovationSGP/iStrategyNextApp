"use client";
import {FunctionComponent, Suspense, useEffect, useState} from "react";
import {useRouter, useSearchParams, usePathname} from "next/navigation";
import {useGetEachBlog_Public} from "../../../pages/api/routes/blogRoute";
import ErrorComponent from "@/app/components/Error";
import LockClosedIcon from "@heroicons/react/24/outline/LockClosedIcon";
import ServerIcon from "@heroicons/react/24/outline/ServerIcon";
import {CloudArrowUpIcon} from "@heroicons/react/24/outline";
import {BlogObject} from "../../../lib/types";
import {blogsRoute} from "../../../pages/api/routes/blogRoute";
import {HeroCTA} from "../../components/HeroCTA";
import Link from "next/link";
import ImageFunction from "@/utils/ImageFunction";
import Image from "next/image";
import {BlogCarousel} from "./BlogCarousel";
import Loading from "@/app/loading";

interface BlogResourceProps {
}

const BlogResource: FunctionComponent<BlogResourceProps> = () => {
    const params = useSearchParams();
    const [loading, setLoading] = useState<any>();
    const [data, setData] = useState<any>();
    const id = params.get("id");
    const {GET_A_BLOG} = blogsRoute();

    useEffect(() => {
        setLoading(true);
        GET_A_BLOG(id).then((payload: any) => {
            const {data} = payload;
            setData(data[0]);
            setLoading(false);
        });
    }, []);

    return (
        <div>
            <Suspense fallback={<Loading/>}>
                {loading ? <Loading/> : <Content blog={data}/>}
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

                <article className="p-4">
                    <div className="grid items-center grid-cols-1 md:grid-cols-2">
                        <div className="order-2 h-64 md:order-1 md:h-full">
                            <Image
                                src={props.blog?.img}
                                className="object-cover w-full h-full bg-center"
                                alt={`Blog Post Image`}
                                width={400}
                                height={600}
                            />
                        </div>
                        <div
                            className="order-1 w-full px-4 py-12 mx-auto text-left md:w-3/4 md:py-48 md:order-2 md:px-0">
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
                            <hr/>
                            <div dangerouslySetInnerHTML={{__html: props.blog?.content}}/>
                        </main>
                    </section>
                </article>
                <div className="pt-2">
                    <HeroCTA/>
                </div>
                <div className="shawdow pt-8">
                    <BlogCarousel/>
                </div>
            </div>
        </div>
    );
}
