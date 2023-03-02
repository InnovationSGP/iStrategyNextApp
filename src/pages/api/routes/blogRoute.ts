import axios, { AxiosRequestConfig } from "axios";

export const blogsRoute: any = () => {
  const options: AxiosRequestConfig = {
    headers: { "Content-Type": "multipart/form-data" },
  };
  const API = axios.create({ baseURL: process.env.LOCAL_ENV });
  const POST_BLOG = (data: any) => API.post("/api/post/image", data);
  return { POST_BLOG };
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
