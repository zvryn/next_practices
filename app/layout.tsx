import Navbar from "@/components/Navbar";
import React from "react";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Test Website",
  description: "NextJS 15 Tutorial",
  keywords: "Camping",
};

const layout = ({ children }) => {
  return (
    <html>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default layout;
