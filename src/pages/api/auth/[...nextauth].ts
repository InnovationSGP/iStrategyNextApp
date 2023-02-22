import { errorHandler } from "@/utils/common";
import { mongooseConnection } from "@/utils/mongodb";
import { User } from "models/User";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "iStrategy",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        await mongooseConnection();
        let user = await User.findOne({ email });

        if (!user) throw new Error("User Not Found");

        const matchPassword = await compare(password, user.password);

        if (!matchPassword) throw new Error("Incorrect Password");

        const payload = { email: email, password: password };

        const res = await fetch(process.env.LOCAL_ENV + "/secure", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        user = await res.json();

        if (res.ok && user) return user;

        if (!res.ok) throw new Error(user.message);
      },
    }),
  ],
  pages: {
    signIn: "/secure",
  },
};

export default NextAuth(authOptions);
