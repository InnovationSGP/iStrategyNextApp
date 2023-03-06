import { NextApiRequest, NextApiResponse } from "next/types";
import { errorHandler } from "@/utils/common";
import { mongooseConnection } from "@/utils/mongodb";
import { getToken } from "next-auth/jwt";
import { Blogs } from "models/blogs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      await mongooseConnection();
      const token = await getToken({ req });
      const blogs = await Blogs.find().sort({ createdAt: -1 });
      if (!blogs) return res.status(401).json({ msg: "No Blogs found" });
      if (!token) return res.status(401).json({ msg: "Token Not Found" });
      if (token) return res.json(blogs);
    } catch (error: any) {
      return res
        .status(500)
        .json({ messages: error.message, trace: error.stack });
    }
  } else {
    return errorHandler("Request method not allowed", res, 400);
  }
}
