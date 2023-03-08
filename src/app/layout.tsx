"use client";
import React from "react";
import "./globals.css";
import "react-quill/dist/quill.snow.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const toastOptions = {
    className:
      "border-2 border-secondaryPurpleLight p-4 font-secondaryPurpleLight",
  };
  return (
    <html lang="en">
      <head />
      <SessionProvider>
        <body className=" overflow-x-hidden  ">
          <Toaster toastOptions={toastOptions} />
          <Navigation />
          {children}
          <Footer />
        </body>
      </SessionProvider>
    </html>
  );
}
