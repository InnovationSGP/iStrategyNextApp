import { errorHandler } from "@/utils/common";
import axios from "axios";

export const routes = () => {
  const API = axios.create({ baseURL: process.env.LOCAL_ENV });
  const POST_MESSAGE = (data: any) => API.post("/api/post/contactform", data);
  return { POST_MESSAGE };
};
