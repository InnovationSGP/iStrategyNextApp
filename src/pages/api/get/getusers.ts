import { errorHandler } from "@/utils/common";
import { mongooseConnection } from "@/utils/mongodb";
import { User } from "models/User";
import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";

export default async function get_all_users(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      await mongooseConnection();
      const token = await getToken({ req });
      const users = await User.find();
      if (!users) return res.status(401).json({ msg: "No Users Added to DB" });
      if (!token) return res.status(401).json({ msg: "Token Not Found" });
      if (token) return res.json(users);
    } catch (error: any) {
      return res
        .status(500)
        .json({ messages: error.message, trace: error.stack });
    }
  } else errorHandler("Request Method Not Allowed", res);
}
