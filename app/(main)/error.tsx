"use client";

import React from "react";

import ErrorBlock from "@/components/error-block";

export default function Error() {
  return (
    <div className="full-page">
      <ErrorBlock title="Oops." message="Something went wrong" />
    </div>
  );
}
