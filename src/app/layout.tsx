"use client";
import React from "react";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <SessionProvider>
        <body className=" overflow-x-hidden  ">
          <Toaster
            toastOptions={{
              className:
                "border-2 border-secondaryPurpleLight p-4 font-secondaryPurpleLight",
            }}
          />
          <Navigation />
          <Banner />
          {children}
          <Footer />
        </body>
      </SessionProvider>
    </html>
  );
}
