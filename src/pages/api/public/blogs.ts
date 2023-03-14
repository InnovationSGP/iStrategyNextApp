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
      const connect = await mongooseConnection();
      const blogs = await Blogs.find({ published: true }).sort({
        createdAt: -1,
      });
      if (!blogs) return res.status(401).json({ msg: "No Blogs found" });
      return res.json(blogs);
    } catch (error: any) {
      return res
        .status(500)
        .json({ messages: error.message, trace: error.stack });
    }
  } else {
    return errorHandler("Request method not allowed", res, 400);
  }
}
