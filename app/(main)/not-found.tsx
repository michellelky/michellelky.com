import React from "react";

import ErrorBlock from "@/components/error-block";

export const metadata = {
  title: "404: Not Found",
};

export default function NotFound() {
  return (
    <div className="full-page">
      <ErrorBlock title="Not Found" message="Oops... there's nothing here" />
    </div>
  );
}
