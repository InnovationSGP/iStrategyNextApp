import { errorHandler } from "@/utils/common";
import { mongooseConnection } from "@/utils/mongodb";
import { MessageForm } from "models/ContactForm";
import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";

export default async function get_message_from_database(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      await mongooseConnection();
      const token = await getToken({ req });
      const message = await MessageForm.find().sort({ createdAt: -1 });
      if (!token) return errorHandler("No token found", res, 401);
      if (!message) return errorHandler("There are no messages", res, 400);
      return res.json(message);
    } catch (error: any) {
      res.status(500).json({ messages: error.message, trace: error.stack });
    }
  } else errorHandler("Request Method Not Allowed", res);
}
