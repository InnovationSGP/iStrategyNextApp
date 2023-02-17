import {
  articleResource,
  blogResource,
  newsResource,
} from "@/content/blogsContent";
import React from "react";
import Blog from "../blog/page";
import { HeroCTA } from "./HeroCTA";

const BlogComponent = () => {
  const blogContent = blogResource.slice(0, 3);
  const articleContent = articleResource.slice(0, 2);
  const newsContent = newsResource.slice(0, 2);

  return (
    <div className="font-sourceSans">
      <section className=" container mx-auto px-4 py-8 ">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-4 xl:grid-cols-2">
          {articleContent.map((article, index) => (
            <ArticleCard key={index} data={article} />
          ))}
        </div>
      </section>

      <section className=" container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 py-4 xl:grid-cols-3">
          {blogContent.map((blog, index) => (
            <BlogCard key={index} data={blog} />
          ))}
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900 ">
        <div className="containershadow flex flex-col px-4 py-10 items-center justify-between bg-primaryBlue">
          <h2 className="text-2xl font-semibold tracking-tight text-white xl:text-3xl">
            Join us and get the update from anywhere
          </h2>

          <div className="p-4">
            <div className="flex flex-col items-center justify-center space-y-3 sm:space-y-0 sm:flex-row sm:-mx-2">
              <input
                id="email"
                type="text"
                className="px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md sm:mx-2 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-sky-400 dark:focus:border-sky-400 focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Email Address"
              />

              <button className="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-sky-500 rounded-md focus:ring focus:ring-sky-300 focus:ring-opacity-80 fo sm:mx-2 hover:bg-sky-400 focus:outline-none focus:bg-sky-400">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className=" container mx-auto px-4 py-8 ">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-4 xl:grid-cols-2">
          {newsContent.map((news, index) => (
            <NewsCard key={index} data={news} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogComponent;

function NewsCard(props: { data: any }) {
  return (
    <div className="border-2 border-gray-200 shadow hover:scale-105 transition ease-in-out">
      <img
        className="object-cover object-center w-full h-64 lg:h-80"
        src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt=""
      />

      <div className="p-6 flex flex-col justify-center items-center">
        <span className="text-gray-400 uppercase tracking-wider">Article</span>

        <h1 className="mt-4 p-4 text-xl font-semibold text-gray-800 uppercase dark:text-white text-center">
          What do you want to know about UI
        </h1>

        <a
          href="#"
          className="inline-block font-bold text-sky-500 hover:text-sky-400"
        >
          Learn more
        </a>
      </div>
    </div>
  );
}

function BlogCard(props: { data: any }) {
  return (
    <div className="border-2 border-gray-200 shadow hover:scale-105 transition ease-in-out">
      <img
        className="object-cover object-center w-full h-64 lg:h-80"
        src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTbDroD8JBly4YN-kttERe-REhf1Ago4jgen2nZFLR0wjm2IKU"
        alt=""
      />

      <div className="p-6 flex items-center justify-center flex-col">
        <span className="flex items-center justify-center text-gray-500 uppercase tracking-wider">
          Blog
        </span>

        <h1 className="mt-4 text-xl text-center font-semibold text-gray-800 dark:text-white ">
          057: DevTools Mini Series - Interaction
        </h1>
        <a
          href="#"
          className="inline-block py-4 font-bold text-sky-500 hover:text-sky-400"
        >
          Learn more
        </a>
      </div>
    </div>
  );
}

function ArticleCard(props: { data: any }) {
  return (
    <div className="border-2 border-gray-200 shadow hover:scale-105 transition ease-in-out ">
      <img
        className="object-cover object-center w-full h-64 lg:h-80"
        src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt=""
      />

      <div className="p-6 flex flex-col justify-center items-center">
        <span className="text-gray-400 uppercase tracking-wider">Article</span>

        <h1 className="mt-4 p-4 text-xl font-semibold text-gray-800 uppercase dark:text-white text-center">
          What do you want to know about UI
        </h1>

        <a
          href="#"
          className="inline-block font-bold text-sky-500 hover:text-sky-400"
        >
          Learn more
        </a>
      </div>
    </div>
  );
}
