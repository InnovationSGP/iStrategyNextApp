import { NextApiRequest, NextApiResponse } from "next";
import { errorHandler } from "@/utils/common";
import { mongooseConnection } from "../../../utils/mongodb";
import multer from "multer";
import path from "path";
import nc from "next-connect";
import { getToken } from "next-auth/jwt";
import { Blogs } from "../../../../models/blogs";
import { readFileSync } from "fs";
import fs from "fs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { author, date, header, content, img } = req.body;

    try {
      await mongooseConnection();
      const token = await getToken({ req });
      const { _id: userID }: any = token?.user;

      if (!token) return errorHandler("Token is not found", res, 401);

      const blogResource = new Blogs({
        user: userID,
        author: author,
        date: date,
        header: header,
        content: content,
        img: img,
      });
      await blogResource.save();
      return res.status(201).json(blogResource);
    } catch (error: any) {
      return res
        .status(500)
        .json({ messages: error.message, trace: error.stack });
    }
  } else {
    return errorHandler("Request method not allowed", res, 400);
  }
}
