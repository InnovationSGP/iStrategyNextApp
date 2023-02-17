import { errorHandler } from "@/utils/common";
import { mongooseConnection } from "@/utils/mongodb";
import { MessageForm } from "models/ContactForm";
import { NextApiRequest, NextApiResponse } from "next";

export default async function get_message_from_database(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      await mongooseConnection();
      const message = await MessageForm.find().sort({ createdAt: -1 });
      if (!message) errorHandler("There are no messages", res, 400);
      res.json(message);
    } catch (error: any) {
      res.status(500).json({ messages: error.message, trace: error.stack });
    }
  } else errorHandler("Request Method Not Allowed", res);
}
