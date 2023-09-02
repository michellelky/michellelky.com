import "@/styles/reset.css";
import "@/styles/globals.css";
import type { Metadata } from "next";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import { poppins } from "@/styles/fonts";

export const metadata: Metadata = {
  title: "Michelle Lau - Frontend Developer",
  description: "Portfolio of Michelle Lau - Frontend Developer",
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
