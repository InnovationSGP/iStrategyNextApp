import { errorHandler } from "@/utils/common";
import { mongooseConnection } from "@/utils/mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { MessageForm } from "../../../../models/ContactForm";

export default async function post_message_to_database(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email, first, last, message, phone } = req.body;

    try {
      await mongooseConnection();
      const contactmessage = new MessageForm({
        email: email,
        first: first,
        last: last,
        message: message,
        phone: phone,
      });
      await contactmessage.save();
      return res.json({
        email: contactmessage.email,
        first: contactmessage.first,
        last: contactmessage.last,
        message: contactmessage.message,
        phone: contactmessage.phone,
      });
    } catch (error: any) {
      res.status(500).json({ message: error.message, trace: error.stack });
    }
  } else errorHandler("Request Method Not Allowed", res);
}
