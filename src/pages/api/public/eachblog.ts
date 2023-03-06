import { NextApiRequest, NextApiResponse } from "next/types";
import { errorHandler } from "@/utils/common";
import { mongooseConnection } from "@/utils/mongodb";
import { getToken } from "next-auth/jwt";
import { Blogs } from "models/blogs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query }: any = req;
  if (req.method === "GET") {
    try {
      await mongooseConnection();
      const blogs = await Blogs.find({ _id: query.id, published: true });
      if (!blogs) return res.status(401).json({ msg: "Blog not found" });
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
