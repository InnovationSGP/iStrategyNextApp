import { errorHandler, expiryCalculator } from "@/utils/common";
import { mongooseConnection } from "@/utils/mongodb";
import { SignJWT } from "jose";
import { User } from "models/User";
import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

export default async function authRouter(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id, name, email, admin } = req.body;
  if (req.method === "POST") {
    try {
      const sessionToken = await getToken({ req });
      if (!sessionToken) return errorHandler("Token is not found", res, 401);

      await mongooseConnection();
      let user = await User.findOne({ _id: id });
      if (!user) return errorHandler("User not found", res, 400);

      const resetPassword = await User.findOneAndUpdate(
        { _id: id },
        { $set: { name: name, email: email, admin: admin } },
        { new: true }
      );
      return res.status(200).json(resetPassword);
    } catch (error: any) {
      res.status(500).json({ message: error.message, trace: error.stack });
    }
  } else {
    return errorHandler("Request Method Not Allowed", res);
  }
}
