import { errorHandler } from "@/utils/common";
import axios from "axios";

interface RegistrationData {
  name: string;
  email: string;
  password: string;
}

export const registerRoute = () => {
  const API = axios.create({ baseURL: process.env.LOCAL_ENV });
  const REGISTER_USER = (data: RegistrationData) =>
    API.post("/api/auth/auth", data);
  return { REGISTER_USER };
};
