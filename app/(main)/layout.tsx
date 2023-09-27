import React from "react";
import type { Metadata } from "next";
import { cookies } from "next/headers";

import "@/styles/reset.css";
import "@/styles/globals.css";
import { poppins } from "@/styles/fonts";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import { BASE_URL, USER_THEME } from "@/content/constants";

const title = "Michelle Lau - Frontend Developer";
const description = "Portfolio of Michelle Lau - Frontend Developer";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(BASE_URL),
  openGraph: {
    title,
    description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function MainRootLayout({
  children,
}: {
  children: React.ReactElement;
}) {
  const userTheme = cookies().get(USER_THEME);
  const theme = userTheme?.value || "light";

  return (
    <html lang="en" data-color-theme={theme}>
      <body className={`${poppins.className} ${theme}`}>
        <NavBar />
        <main className="site-base">{children}</main>
        <Footer initialTheme={theme} />
      </body>
    </html>
  );
}
