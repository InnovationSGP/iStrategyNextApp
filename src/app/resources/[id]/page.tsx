"use client";
import { FunctionComponent } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

interface BlogResourceProps {}

const BlogResource: FunctionComponent<BlogResourceProps> = () => {
  const router = useRouter();
  //   const params = useSearchParams();
  //   const id = params.get("id");
  //   console.log(id);

  return <div>BlogResource: </div>;
};

export default BlogResource;
