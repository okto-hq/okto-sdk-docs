import React from "react";
import dynamic from "next/dynamic";
import type { AskCookbookConfig } from "@cookbookdev/docsbot/dist/react";
const BaseAskCookbook = dynamic<AskCookbookConfig>(
  () => import("@cookbookdev/docsbot/react"),
  {
    ssr: false,
  },
);

export default function AskCookbook() {
  const COOKBOOK_PUBLIC_API_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NmY0NTc5OGJkODc1Y2E3NmUwMGFmOWYiLCJpYXQiOjE3MjcyODkyNDAsImV4cCI6MjA0Mjg2NTI0MH0.jjwNwuxA0WhC8yuHDgXLmFfKj83_qUoiYj7FoCKx88k";

  return <BaseAskCookbook apiKey={COOKBOOK_PUBLIC_API_KEY} />;
}

