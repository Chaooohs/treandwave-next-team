"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Slug() {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  }, []);

  return <main></main>;
}
