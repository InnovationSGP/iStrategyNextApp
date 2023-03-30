import { errorHandler } from "@/utils/common";
import { mongooseConnection } from "@/utils/mongodb";
import { User } from "models/User";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";

export const authOptions: NextAuthOptions = {
  secret: process.env.SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
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

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/secure",
    signOut: "/secure",
  },
  callbacks: {
    async session({ session, user, token }: any) {
      session.user = token.user;
      return session;
    },

    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
  },
};

export default NextAuth(authOptions);
