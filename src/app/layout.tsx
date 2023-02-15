"use client";
import React from "react";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
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
    </html>
  );
}
