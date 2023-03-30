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
  const { name, email, password } = req.body;
  if (req.method === "POST") {
    try {
      await mongooseConnection();
      let user = await User.findOne({ email });
      if (user) {
        return errorHandler("User email is already registered", res, 400);
      }
      const sessionToken = await getToken({ req });
      if (!sessionToken) return errorHandler("Token is not found", res, 401);

      user = new User({
        name: name,
        email: email,
        password: password,
      });
      const saltRounds: number = 12;
      const salt = await bcrypt.genSalt(saltRounds);
      user.password = await bcrypt.hash(password, salt);
      await user.save();

      const payload = {
        id: user.id,
        email: user.email,
      };

      const token = await jwt.sign(payload, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRY,
      });
      const expiry = await expiryCalculator(new Date(), 72);
      return res.json({
        id: user.id,
        email: user.email,
        userToken: token,
        expiry: expiry.toISOString(),
      });
    } catch (error: any) {
      res.status(500).json({ message: error.message, trace: error.stack });
    }
  } else {
    return errorHandler("Request Method Not Allowed", res);
  }
}
