"use client";

import { useEffect } from "react";

import ErrorBlock from "@/components/error-block";

export const metadata = {
  title: "404: Not Found",
};

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="full-page">
      <ErrorBlock
        title="Not Found"
        message="Sorry... Can't find the project you're looking for"
      />
    </div>
  );
}
