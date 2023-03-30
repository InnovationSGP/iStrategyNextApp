import { User } from "@/lib/types";
import { errorHandler } from "@/utils/common";
import axios from "axios";

export const registerRoute = () => {
  const API = axios.create({ baseURL: process.env.NEXTAUTH_URL });
  const REGISTER_USER = (data: User) => API.post("/api/auth/register", data);
  const EDIT_USER = (data: {
    id: string;
    name: string;
    email: string;
    admin: boolean;
  }) => API.post("/api/auth/resetadmin", data);
  return { REGISTER_USER, EDIT_USER };
};
