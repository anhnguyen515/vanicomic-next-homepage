import { useRouter } from "next/router";
import React from "react";

export default function ChapterDetail() {
  const router = useRouter();
  const { chapter_slug } = router.query;
  console.log(router.query);
  return <>chapter slug: {chapter_slug}</>;
}
