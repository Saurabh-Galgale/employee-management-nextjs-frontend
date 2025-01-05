"use client";

import React, { useState, useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { Provider } from "react-redux";
import { store } from "../store";
import "./globals.css";
import Header from "./Header";

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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Your App Title</title>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {isLoading ? (
          <div id="loading-screen" className="loading-screen">
            <img src="/logo.svg" alt="Loading" height="50%" />
            <h1>Employee Management System</h1>
            <h2>Loading...</h2>
          </div>
        ) : (
          <div id="app-content">
            <Provider store={store}>
              <ThemeProvider theme={theme}>
                <Header />
                <div>{children}</div>
              </ThemeProvider>
            </Provider>
          </div>
        )}
      </body>
    </html>
  );
}
