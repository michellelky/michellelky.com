import React from "react";

const title = "Language Learning | Michelle Lau";
const description = "My resources for learning languages";

export const metadata = {
  title,
  description,
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

export default function LanguagePage() {
  return (
    <div className="full-page">
      <h1>Language Learning</h1>
    </div>
  );
}
