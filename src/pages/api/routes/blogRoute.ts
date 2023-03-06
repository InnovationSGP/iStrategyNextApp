import axios, { AxiosRequestConfig } from "axios";
import useSWR from "swr";

export const blogsRoute: any = () => {
  const options: AxiosRequestConfig = {
    headers: { "Content-Type": "multipart/form-data" },
  };
  const API = axios.create({ baseURL: process.env.LOCAL_ENV });
  const POST_BLOG = (data: any) => API.post("/api/post/createblog", data);
  const EDIT_BLOG = (id: string, data: any) =>
    API.post("/api/post/editblog?id=" + id, data);
  const PUBLISH_BLOG = (id: string, data: any) =>
    API.post("/api/post/publishblog?id=" + id, data);
  const DELETE_BLOG = (id: string, data: any) =>
    API.post("/api/post/deleteblog?id=" + id, data);
  return { POST_BLOG, EDIT_BLOG, PUBLISH_BLOG, DELETE_BLOG };
};

export const UPLOAD_IMAGE = async (asset: any) => {
  const data = await fetch(
    "https://api.cloudinary.com/v1_1/dvjuqa3a2/image/upload",
    {
      method: "POST",
      body: asset,
    }
  )
    .then((r) => r.json())
    .catch((e) => console.log(e));
  return data.url;
};

const fetcher: any = (url: any) => fetch(url).then((res) => res.json());
export function useGetBlogs() {
  const { data, error, isLoading } = useSWR(`/api/get/blogs`, fetcher);
  return {
    blogs: data,
    isLoading,
    isError: error,
  };
}
export function useGetBlogs_Public() {
  const { data, error, isLoading } = useSWR(`/api/public/blogs`, fetcher);
  const { data: eachblog } = useSWR(`/api/public/eachblog`, fetcher);
  return {
    eachblog: eachblog,
    blogs: data,
    isLoading,
    isError: error,
  };
}

// export function useGetEachBlog_Public() {
//   const { data, error, isLoading } = useSWR(`/api/public/eachblog`, fetcher);
//   return {
//     blogs: data,
//     isLoading,
//     isError: error,
//   };
// }
