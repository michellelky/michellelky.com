import React from "react";
import ErrorBlock from "@/components/error";

export default function NotFound() {
  return (
    <div className="full-page">
      <ErrorBlock title="404" message="Oops... looks like you're lost" />
    </div>
  );
}
