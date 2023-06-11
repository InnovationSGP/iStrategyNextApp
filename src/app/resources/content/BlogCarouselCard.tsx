"use client";
import { BlogObject } from "@/lib/types";
import Link from "next/link";
import { page_routes } from "@/lib/pageRoutes";
import Image from "next/image";

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
    <div className="w-full hover:shadow">
      <Link
        href={`${page_routes.resourceCenter}/content?id=${post.databaseId}`}
      >
        <Image
          src={post.featuredImage?.node.link}
          className="object-cover w-full h-56 mb-5 bg-center rounded"
          alt={post.title}
          loading="lazy"
          width={400}
          height={600}
        />
      </Link>
      <div className="p-4">
        <h2 className="mb-2 text-lg font-semibold text-primaryBlue">
          <Link
            href={`${page_routes.resourceCenter}/content?id=${post.databaseId}`}
            className="text-primaryBlue hover:text-primaryPurple capitalize"
          >
            {post.title}
          </Link>
        </h2>

        <p className="mb-3 text-sm font-normal text-gray-500">
          <Link
            href={`${page_routes.resourceCenter}/content?id=${post.databaseId}`}
            className="font-medium text-primaryBlue hover:text-primaryPurple"
          >
            {post.author.node.firtName}
          </Link>{" "}
          -{" "}
          {new Date(post.date).toLocaleDateString(undefined, {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
    </div>
  );
}
