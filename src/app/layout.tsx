"use client";

import React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Your App Title</title>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
