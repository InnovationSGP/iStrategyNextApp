import { errorHandler } from "@/utils/common";
import axios from "axios";
import useSWR from "swr";

export const routes = () => {
  const API = axios.create({ baseURL: process.env.LOCAL_ENV });
  const POST_MESSAGE = (data: any) => API.post("/api/post/contactform", data);
  const GET_MESSAGES = (token: any) => API.get("/api/get/messages", token);
  return { POST_MESSAGE, GET_MESSAGES };
};

const fetcher = (url: any) => fetch(url).then((res) => res.json());
export function useGetMessages() {
  const { data, error, isLoading } = useSWR(`/api/get/messages`, fetcher);

  return {
    messages: data,
    isLoading,
    isError: error,
  };
}
