import { poppins } from "@/styles/fonts";
import { BASE_URL } from "@/content/constants";

const title = "Photography | Michelle Lau";
const description = "This is where I put my photography";

export const metadata = {
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

export default function PhotoRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
