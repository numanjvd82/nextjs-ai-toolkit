"use client";

import { convertBlobToUrl } from "@/lib/utils";
import { useState } from "react";
import useSWR from "swr";

// The fetcher function to make the request to the Hugging Face API
const fetcher = async (url: string, text: string) => {
  const payload = {
    inputs: text,
  };

  const result = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_HUGGING_FACE_AUTH_TOKEN}`,
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(payload),
  });

  return result.blob();
};

export default function Home() {
  const [inputText, setInputText] = useState<string>("");

  const {
    data: blob,
    error,
    isValidating,
  } = useSWR(
    inputText
      ? [
          `https://api-inference.huggingface.co/models/ZB-Tech/Text-to-Image`,
          inputText,
        ]
      : null,
    ([url, text]) => fetcher(url, text),
    {
      revalidateOnFocus: false, // Optionally disable auto-fetching on focus
    }
  );

  const url = blob ? convertBlobToUrl(blob) : undefined;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12">
      <h1 className="text-5xl font-bold mb-2 text-center">Transformers.js</h1>
      <h2 className="text-2xl mb-4 text-center">
        Next.js template (client-side with SWR)
      </h2>

      <input
        type="text"
        className="w-full max-w-xs p-2 border border-gray-300 rounded mb-4"
        placeholder="Enter text here"
        onChange={(e) => setInputText(e.target.value)}
      />

      {isValidating && (
        <pre className="bg-gray-100 p-2 rounded">Loading...</pre>
      )}

      {error && (
        <pre className="bg-red-100 p-2 rounded">
          Error occurred: {error.message}
        </pre>
      )}

      {url && <img src={url} alt="Generated image" />}
    </main>
  );
}
