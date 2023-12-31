"use client";

import React from "react";

import ErrorBlock from "@/components/error-block";

export default function NotFound() {
  return (
    <div className="full-page">
      <ErrorBlock title="Not Found" message="Oops... there's nothing here" />
    </div>
  );
}
