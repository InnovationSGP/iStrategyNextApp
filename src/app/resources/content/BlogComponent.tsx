import {
  articleResource,
  blogResource,
  newsResource,
} from "@/content/blogsContent";
import React from "react";
import Blog from "../page";
import { useGetBlogs_Public } from "../../../pages/api/routes/blogRoute";
import { BlogObject } from "../../../lib/types";
import Link from "next/link";
import { page_routes } from "@/lib/pageRoutes";
import Image from "next/image";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import { HeroCTA } from "@/app/components/HeroCTA";
import Loading from "@/app/loading";

const BlogComponent = () => {
  const blogContent = blogResource.slice(0, 3);
  const articleContent = articleResource.slice(0, 2);
  const newsContent = newsResource.slice(0, 2);

  const { blogs, isLoading, isError } = useGetBlogs_Public();

  return (
    <section className="px-4 pt-6 flex flex-col justify-center items-center">
      <div className="p-6  container">
        <p className="py-2 text-primaryPurple font-bold text-2xl">
          Feature Resource
        </p>

        {blogs?.slice(0, 1).map((blog: BlogObject) => (
          <BlogFeatureCard data={blog} key={blog._id} />
        ))}
      </div>

      <div className="px-6 pt-4 container">
        <p className=" py-2 text-primaryPurple font-bold text-2xl">Resources</p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 py-4 xl:grid-cols-3 justify-items-center  ">
          {blogs || blogs?.length > 0 ? (
            blogs
              ?.slice(1)
              ?.map((blog: BlogObject) => (
                <BlogCard key={blog._id} data={blog} />
              ))
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </section>
  );
};
export default BlogComponent;

function BlogFeatureCard(props: { data: BlogObject }) {
  return (
    <section className="w-full shadow ">
      {/* <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        <div className="col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-3">
          <Link
            href={`${page_routes.resourceCenter}/content?id=${props.data._id}`}
          >
            <Image
              className="object-cover w-full h-64 mb-5 bg-center rounded"
              src={props.data?.img}
              alt="Blog Card Image"
              width={600}
              height={450}
              loading="lazy"
            />
          </Link>
          <p className="mb-2 text-xs font-semibold tracking-wider text-gray-400 uppercase">
            {props.data?.resource ? props.data?.resource : "Resource"}
          </p>
          <h2 className="mb-2 capitalize text-xl font-bold leading-snug text-gray-900">
            <Link
              href={`${page_routes.resourceCenter}/content?id=${props.data._id}`}
              className="text-gray-900 hover:text-purple-700"
            >
              {props.data?.header}{" "}
            </Link>
          </h2>

          <Link
            className="flex items-center text-gray-700"
            target="_blank"
            href={`${page_routes.resourceCenter}/content?id=${props.data._id}`}
          >
            <div className="">
              <p className="text-sm font-semibold text-gray-900">
                {props.data?.author}
              </p>
              <p className="text-sm text-gray-600">
                {new Date(props.data?.date).toLocaleDateString(undefined, {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </Link>
        </div>
      </div> */}

      <div className="grid items-center grid-cols-1 md:grid-cols-2">
        <div className="order-2 h-64 md:order-1 md:h-full">
          <Image
            src={props.data?.img}
            className="object-cover w-full h-full bg-center"
            alt={`Picture of ${props.data?.img}`}
            width={400}
            height={600}
          />
        </div>
        <div className="order-1 w-full px-4 py-12 mx-auto text-left md:w-3/4 md:py-48 md:order-2 md:px-0">
          <p className="mb-3 text-gray-500">
            <time>
              {new Date(props.data?.date).toLocaleDateString(undefined, {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </p>
          <h1
            className="mb-5 text-3xl font-bold cursor-pointer hover:text-primaryPurple text-gray-900 md:leading-tight md:text-4xl capitalize"
            itemProp="headline"
            title={props.data?.header}
          >
            {props.data?.header}
          </h1>
          <Link
            className="flex items-center text-gray-700"
            href={`${page_routes.resourceCenter}/content?id=${props.data._id}`}
          >
            <div className="avatar"></div>
            <div className="ml-2">
              <p className="text-sm font-semibold text-gray-800 capitalize">
                {props.data?.author}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

function BlogCard(props: { data: BlogObject }) {
  return (
    <div className="cursor-pointer  shadow hover:scale-105 transition ease-in-out bg-white">
      <Image
        className="object-cover object-center w-full h-64 lg:h-80"
        src={props.data.img}
        alt="Blog Card Image"
        width={600}
        height={450}
        loading="lazy"
      />

      <div className="p-6 flex items-start  justify-center flex-col ">
        <span className="flex items-center justify-center text-gray-500 capitalize tracking-wider font-bold ">
          {props.data.resource ? props.data.resource : "Resource"}
        </span>
        <Link
          target="_blank"
          href={`${page_routes.resourceCenter}/content?id=${props.data._id}`}
          className="mt-2 pb-4 text-xl capitalize text-center font-semibold text-gray-800 dark:text-white hover:text-primaryPurple "
        >
          {props.data.header}
        </Link>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-xs p-4">
          Published:{" "}
          {new Date(props.data.date).toLocaleDateString(undefined, {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
      </div>
    </div>
  );
}

//Future Feature
// function ResourceSection(props: { blogs: any }) {
//   const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

//   const filters = [
//     {
//       id: "color",
//       name: "Color",
//       options: [
//         { value: "white", label: "White", checked: false },
//         { value: "beige", label: "Beige", checked: false },
//         { value: "blue", label: "Blue", checked: true },
//         { value: "brown", label: "Brown", checked: false },
//         { value: "green", label: "Green", checked: false },
//         { value: "purple", label: "Purple", checked: false },
//       ],
//     },
//     {
//       id: "category",
//       name: "Category",
//       options: [
//         { value: "new-arrivals", label: "New Arrivals", checked: false },
//         { value: "sale", label: "Sale", checked: false },
//         { value: "travel", label: "Travel", checked: true },
//         { value: "organization", label: "Organization", checked: false },
//         { value: "accessories", label: "Accessories", checked: false },
//       ],
//     },
//     {
//       id: "size",
//       name: "Size",
//       options: [
//         { value: "2l", label: "2L", checked: false },
//         { value: "6l", label: "6L", checked: false },
//         { value: "12l", label: "12L", checked: false },
//         { value: "18l", label: "18L", checked: false },
//         { value: "20l", label: "20L", checked: false },
//         { value: "40l", label: "40L", checked: true },
//       ],
//     },
//   ];

//   return (
//     <div className="bg-white">
//       <div>
//         {/* Mobile filter dialog */}
//         <Transition.Root show={mobileFiltersOpen} as={Fragment}>
//           <Dialog
//             as="div"
//             className="relative z-40 lg:hidden"
//             onClose={setMobileFiltersOpen}
//           >
//             <Transition.Child
//               as={Fragment}
//               enter="transition-opacity ease-linear duration-300"
//               enterFrom="opacity-0"
//               enterTo="opacity-100"
//               leave="transition-opacity ease-linear duration-300"
//               leaveFrom="opacity-100"
//               leaveTo="opacity-0"
//             >
//               <div className="fixed inset-0 bg-black bg-opacity-25" />
//             </Transition.Child>

//             <div className="fixed inset-0 z-40 flex">
//               <Transition.Child
//                 as={Fragment}
//                 enter="transition ease-in-out duration-300 transform"
//                 enterFrom="translate-x-full"
//                 enterTo="translate-x-0"
//                 leave="transition ease-in-out duration-300 transform"
//                 leaveFrom="translate-x-0"
//                 leaveTo="translate-x-full"
//               >
//                 <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
//                   <div className="flex items-center justify-between px-4">
//                     <h2 className="text-lg font-bold text-gray-900">Filters</h2>
//                     <button
//                       type="button"
//                       className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
//                       onClick={() => setMobileFiltersOpen(false)}
//                     >
//                       <span className="sr-only">Close menu</span>
//                       <XMarkIcon className="h-6 w-6" aria-hidden="true" />
//                     </button>
//                   </div>

//                   {/* Filters */}
//                   <form className="mt-4 border-t border-gray-200">
//                     {props.blogs?.map((blog: BlogObject) => (
//                       <Disclosure
//                         as="div"
//                         key={blog._id}
//                         className="border-t border-gray-200 px-4 py-6"
//                       >
//                         {({ open }) => (
//                           <>
//                             <h3 className="-mx-2 -my-3 flow-root">
//                               <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
//                                 <span className="font-medium text-gray-900">
//                                   {blog.resource ? blog.resource : "Resource"}
//                                 </span>
//                                 <span className="ml-6 flex items-center">
//                                   {open ? (
//                                     <MinusIcon
//                                       className="h-5 w-5"
//                                       aria-hidden="true"
//                                     />
//                                   ) : (
//                                     <PlusIcon
//                                       className="h-5 w-5"
//                                       aria-hidden="true"
//                                     />
//                                   )}
//                                 </span>
//                               </Disclosure.Button>
//                             </h3>
//                             <Disclosure.Panel className="pt-6">
//                               <div className="space-y-6">
//                                 {props.blogs
//                                   ?.filter(
//                                     (matchingBlog: BlogObject) =>
//                                       matchingBlog.resource === blog.resource
//                                   )
//                                   .map((matchedBlog: BlogObject) => (
//                                     <div
//                                       key={matchedBlog.author}
//                                       className="flex items-center"
//                                     >
//                                       <input
//                                         id={`filter-${matchedBlog._id}`}
//                                         name={`${matchedBlog._id}[]`}
//                                         type="checkbox"
//                                         className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
//                                       />
//                                       <label
//                                         htmlFor={`filter-mobile-${matchedBlog._id}`}
//                                         className="ml-3 min-w-0 flex-1 text-gray-500"
//                                       >
//                                         {matchedBlog.author}
//                                       </label>
//                                     </div>
//                                   ))}
//                               </div>
//                             </Disclosure.Panel>
//                           </>
//                         )}
//                       </Disclosure>
//                     ))}
//                   </form>
//                 </Dialog.Panel>
//               </Transition.Child>
//             </div>
//           </Dialog>
//         </Transition.Root>

//         <main className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
//           <div className="flex items-baseline justify-between border-b border-gray-200 mt-8 pb-6">
//             <h1 className="text-2xl font-bold tracking-tight text-gray-900">
//               Other Resources{" "}
//             </h1>

//             <div className="flex items-center">
//               <Menu as="div" className="relative inline-block text-left">
//                 <div>
//                   <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
//                     Sort
//                     <ChevronDownIcon
//                       className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
//                       aria-hidden="true"
//                     />
//                   </Menu.Button>
//                 </div>

//                 <Transition
//                   as={Fragment}
//                   enter="transition ease-out duration-100"
//                   enterFrom="transform opacity-0 scale-95"
//                   enterTo="transform opacity-100 scale-100"
//                   leave="transition ease-in duration-75"
//                   leaveFrom="transform opacity-100 scale-100"
//                   leaveTo="transform opacity-0 scale-95"
//                 >
//                   <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
//                     <div className="py-1">
//                       {props.blogs?.map((blog: BlogObject) => (
//                         <Menu.Item key={blog.resource}>
//                           <Link
//                             href="#"
//                             className="bg-gray-100 hover:bg-white block px-4 py-2 text-sm"
//                           >
//                             {blog.resource ? blog.resource : "No Resource"}
//                           </Link>
//                         </Menu.Item>
//                       ))}
//                     </div>
//                   </Menu.Items>
//                 </Transition>
//               </Menu>

//               <button
//                 type="button"
//                 className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
//                 onClick={() => setMobileFiltersOpen(true)}
//               >
//                 <span className="sr-only">Filters</span>
//                 <FunnelIcon className="h-5 w-5" aria-hidden="true" />
//               </button>
//             </div>
//           </div>

//           <section aria-labelledby="products-heading" className="pt-6 pb-24">
//             <h2 id="products-heading" className="sr-only">
//               Products
//             </h2>

//             <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
//               {/* Filters */}
//               <form className="hidden lg:block">
//                 <h3 className="sr-only">Categories</h3>

//                 {props.blogs?.map((blog: BlogObject) => (
//                   <Disclosure
//                     as="div"
//                     key={blog._id}
//                     className="border-b border-gray-200 py-6"
//                   >
//                     {({ open }) => (
//                       <>
//                         <h3 className="-my-3 flow-root">
//                           <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
//                             <span className="font-medium text-gray-900">
//                               {blog.resource ? blog.resource : "No Resource"}
//                             </span>
//                             <span className="ml-6 flex items-center">
//                               {open ? (
//                                 <MinusIcon
//                                   className="h-5 w-5"
//                                   aria-hidden="true"
//                                 />
//                               ) : (
//                                 <PlusIcon
//                                   className="h-5 w-5"
//                                   aria-hidden="true"
//                                 />
//                               )}
//                             </span>
//                           </Disclosure.Button>
//                         </h3>
//                         <Disclosure.Panel className="pt-6">
//                           <div className="space-y-4">
//                             {props.blogs
//                               ?.filter(
//                                 (matchingBlog: BlogObject) =>
//                                   matchingBlog.resource === blog.resource
//                               )
//                               .map((matchedBlog: BlogObject) => (
//                                 <div
//                                   key={matchedBlog.author}
//                                   className="flex items-center"
//                                 >
//                                   <input
//                                     id={`filter-${matchedBlog._id}`}
//                                     name={`${matchedBlog._id}[]`}
//                                     type="checkbox"
//                                     className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
//                                   />
//                                   <label
//                                     htmlFor={`filter-${matchedBlog._id}`}
//                                     className="ml-3 text-sm text-gray-600"
//                                   >
//                                     {matchedBlog.author}
//                                   </label>
//                                 </div>
//                               ))}
//                           </div>
//                         </Disclosure.Panel>
//                       </>
//                     )}
//                   </Disclosure>
//                 ))}
//               </form>

//               {/* Product grid */}
//               <div className="lg:col-span-3">
//                 <div className="grid grid-cols-1 gap-6 md:grid-cols-2 py-4 xl:grid-cols-3">
//                   {props.blogs || props.blogs?.length > 0 ? (
//                     props.blogs
//                       ?.slice(1)
//                       ?.map((blog: BlogObject) => (
//                         <BlogCard key={blog._id} data={blog} />
//                       ))
//                   ) : (
//                     <CustomSpinner />
//                   )}
//                 </div>
//               </div>
//             </div>
//           </section>
//         </main>
//       </div>
//     </div>
//   );
// }
