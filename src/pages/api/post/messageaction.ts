import { NextApiRequest, NextApiResponse } from "next";
import { errorHandler } from "@/utils/common";
import { mongooseConnection } from "../../../utils/mongodb";
import { MessageForm } from "../../../../models/ContactForm";
import { getToken } from "next-auth/jwt";

export default async function mutate_message(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { query }: any = req;
    const { read, responded } = req.body;
    try {
      await mongooseConnection();
      const message = await MessageForm.findOne({ _id: query.id });
      // const token = await getToken({ req });
      // if (!token) return errorHandler("Token is not found", res, 401);
      if (!message) return errorHandler("Message is not found", res, 401);
      const updateMessage = await MessageForm.findOneAndUpdate(
        { _id: query.id },
        { $set: { read: read, responded: responded } },
        { new: true }
      );
      return res.status(200).json(updateMessage);
    } catch (error: any) {
      return res
        .status(500)
        .json({ messages: error.message, trace: error.stack });
    }
  } else {
    return errorHandler("Request method not permitted", res, 500);
  }
}
