"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [status, setStatus] = useState("loading...");

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/health`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setStatus(data.status))
      .catch(() => setStatus("error"));
  }, []);

  return (
    <main style={{ padding: "40px" }}>
      <h1>Backend status: {status}</h1>
    </main>
  );
}