"use client";
import { BlogObject } from "@/lib/types";
import Link from "next/link";
import { page_routes } from "@/lib/pageRoutes";
import Image from "next/image";
import { useWordpressSinglePost } from "../../../lib/gqlQueries";

// export function BlogCarouselCard({ data }: any) {
//   return (
//     <div className="w-full shadow">
//       <Link href={`${page_routes.resourceCenter}/content?id=${data._id}`}>
//         <Image
//           src={data.img}
//           className="object-cover w-full h-56 mb-5 bg-center rounded"
//           alt={data.header}
//           loading="lazy"
//           width={400}
//           height={600}
//         />
//       </Link>
//       <div className="p-4">
//         <h2 className="mb-2 text-lg font-semibold text-primaryBlue">
//           <Link
//             href={`${page_routes.resourceCenter}/content?id=${data._id}`}
//             className="text-primaryBlue hover:text-primaryPurple capitalize"
//           >
//             {data.header}
//           </Link>
//         </h2>

//         <p className="mb-3 text-sm font-normal text-gray-500">
//           <Link
//             href={`${page_routes.resourceCenter}/content?id=${data._id}`}
//             className="font-medium text-primaryBlue hover:text-primaryPurple"
//           >
//             {data.author}
//           </Link>{" "}
//           -{" "}
//           {new Date(data.date).toLocaleDateString(undefined, {
//             weekday: "long",
//             year: "numeric",
//             month: "long",
//             day: "numeric",
//           })}
//         </p>
//       </div>
//     </div>
//   );
// }

export function PostCarouselCard({ post }: any) {
  return (
    <div className="">
      <div className="w-full">
        <Link
          href={`${page_routes.resourceCenter}/content?id=${post.databaseId}`}
        >
          <Image
            src={post.featuredImage?.node.link}
            className="object-cover shadow-sm w-full mb-5 bg-center rounded"
            alt={post.title}
            loading="lazy"
            width={300}
            height={400}
          />
        </Link>
        <div className="py-4">
          <h2 className="mb-2 text-lg text-primaryBlue w-3/4 font-semibold leading-6">
            <Link
              href={`${page_routes.resourceCenter}/content?id=${post.databaseId}`}
              className="text-primaryBlue uppercase transition-all ease-in duration-300 hover:underline hover:text-primaryPurple "
            >
              {post.title}
            </Link>
          </h2>

          <p
            className="w-3/4 py-2 text-ellipsis text-gray-400 font-normal text-sm"
            dangerouslySetInnerHTML={{
              __html: `${post.content.slice(0, 150)}...`,
            }}
          />

          <p className="mb-3 text-sm font-normal text-gray-500">
            <Link
              href={`${page_routes.resourceCenter}/content?id=${post.databaseId}`}
              className="font-medium text-primaryBlue hover:text-primaryPurple"
            >
              {post.author.node.firtName}
            </Link>{" "}
            {new Date(post.date).toLocaleDateString(undefined, {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <h2 className="mb-2 text-lg text-primaryBlue w-3/4 font-normal leading-6">
            <Link
              href={`${page_routes.resourceCenter}/content?id=${post.databaseId}`}
              className="text-primaryBlue uppercase transition-all ease-in duration-300 hover:underline hover:text-primaryPurple "
            >
              read more
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
}
