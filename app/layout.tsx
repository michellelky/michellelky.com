import type { Metadata } from "next";

import "@/styles/reset.css";
import "@/styles/globals.css";
import { poppins } from "@/styles/fonts";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

const title = "Michelle Lau - Frontend Developer";
const description = "Portfolio of Michelle Lau - Frontend Developer";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://michellelky.com"),
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} light`}>
        <NavBar />
        <main className="site-base">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
