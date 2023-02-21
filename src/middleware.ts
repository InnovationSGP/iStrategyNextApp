import { NextRequest, NextResponse } from "next/server";
import { verifyAuth } from "./lib/auth";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("userToken")?.value;
  const verifiedToken =
    token && (await verifyAuth(token).catch((err) => console.log(err)));

  if (req.nextUrl.pathname.startsWith("/secure") && !verifiedToken) return;
  if (req.url.includes("/secure") && verifiedToken)
    return NextResponse.redirect(new URL("/dashboad", req.url));
  if (!verifiedToken) return NextResponse.redirect(new URL("/secure", req.url));
}

export const config = {
  matcher: ["/dashboard", "/secure"],
};
