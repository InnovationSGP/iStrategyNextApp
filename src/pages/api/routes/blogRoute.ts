import axios, { AxiosRequestConfig } from "axios";
import useSWR from "swr";

export const blogsRoute: any = () => {
  const options: AxiosRequestConfig = {
    headers: { "Content-Type": "multipart/form-data" },
  };
  const API = axios.create({ baseURL: process.env.NEXTAUTH_URL });
  const POST_BLOG = (data: any) => API.post("/api/post/createblog", data);
  const EDIT_BLOG = (id: string, data: any) =>
    API.post("/api/post/editblog?id=" + id, data);
  const PUBLISH_BLOG = (id: string, data: any) =>
    API.post("/api/post/publishblog?id=" + id, data);
  const DELETE_BLOG = (id: string, data: any) =>
    API.post("/api/post/deleteblog?id=" + id, data);
  const GET_A_BLOG = (id: string) => API.get("/api/public/eachblog?id=" + id);
  return { POST_BLOG, EDIT_BLOG, PUBLISH_BLOG, DELETE_BLOG, GET_A_BLOG };
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
const fetcherWithParams: any = (url: string, queryParams: string) =>
  fetch(`${url}${queryParams}`).then((res) => res.json());
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
  return { blogs: data, isLoading, isError: error };
}

export function useGetEachBlog_Public(id: any) {
  const { data, error, isLoading } = useSWR(
    `/api/public/eachblog?id=`,
    fetcherWithParams("/api/public/eachblog?id=", id)
  );
  return {
    eachblog: data,
    blogs: data,
    isLoading,
    isError: error,
  };
}
