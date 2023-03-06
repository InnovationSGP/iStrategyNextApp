import { errorHandler } from "@/utils/common";
import { mongooseConnection } from "@/utils/mongodb";
import { Blogs } from "models/blogs";
import { getToken } from "next-auth/jwt";
import { NextApiRequest, NextApiResponse } from "next/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { query }: any = req;
    const { published } = req.body;
    try {
      await mongooseConnection();
      const blogs = await Blogs.findOne({ _id: query.id });
      const token = await getToken({ req });
      if (!token) return errorHandler("Token is not found", res, 401);
      if (!blogs) return errorHandler("Message is not found", res, 401);
      const updateBlog = await Blogs.findOneAndUpdate(
        { _id: query.id },
        { $set: { published: published } },
        { new: true }
      );
      return res.status(200).json(updateBlog);
    } catch (error: any) {
      return res
        .status(500)
        .json({ messages: error.message, trace: error.stack });
    }
  } else {
    return errorHandler("Request method not permitted", res, 500);
  }
}
