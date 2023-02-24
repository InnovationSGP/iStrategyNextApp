import { User } from "@/lib/types";
import { errorHandler } from "@/utils/common";
import axios from "axios";

export const registerRoute = () => {
  const API = axios.create({ baseURL: process.env.LOCAL_ENV });
  const REGISTER_USER = (data: User) => API.post("/api/auth/register", data);
  return { REGISTER_USER };
};
