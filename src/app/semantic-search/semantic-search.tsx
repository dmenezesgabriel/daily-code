"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { Card } from "@/components/card";

function cosineSimilarity(a: number[], b: number[]): number {
  if (a.length !== b.length) {
    throw new Error("Vectors must be the same length");
  }

  let dot = 0,
    normA = 0,
    normB = 0;

  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }

  if (normA === 0 || normB === 0) {
    return 0;
  }

  return dot / (Math.sqrt(normA) * Math.sqrt(normB));
}

type ResultType = {
  slug: string;
  score: number;
  text: string;
}[];

export function SemanticSearch() {
  const [result, setResult] = useState<ResultType | null>(null);
  const [ready, setReady] = useState<boolean | null>(null);
  const [status, setStatus] = useState("Loading...");
  const [progress, setProgress] = useState(0);
  const [embeddings, setEmbeddings] = useState<Record<
    string,
    { textChunks: string[]; chunkEmbeddings: number[][] }
  > | null>(null);

  const worker = useRef<Worker | null>(null);

  async function search(queryEmbedding: number[]) {
    if (!embeddings) return;

    const scores = Object.entries(embeddings).map(
      ([slug, { textChunks, chunkEmbeddings }]) => {
        let bestMatch = { text: "", score: 0 };

        for (let i = 0; i < chunkEmbeddings.length; i++) {
          const score = cosineSimilarity(queryEmbedding, chunkEmbeddings[i]);

          if (score > bestMatch.score) {
            bestMatch = { text: textChunks[i], score };
          }
        }

        return { slug, score: bestMatch.score, text: bestMatch.text };
      },
    );

    scores.sort((a, b) => b.score - a.score);
    setResult(scores.filter((r) => r.score > 0.5));
  }

  useEffect(() => {
    fetch("/embeddings.json")
      .then((res) => res.json())
      .then((data) => {
        setEmbeddings(data);
      });
  }, []);

  useEffect(() => {
    if (!worker.current) {
      worker.current = new Worker(new URL("../worker.ts", import.meta.url), {
        type: "module",
      });
    }

    const onMessageReceived = (e: MessageEvent) => {
      switch (e.data.status) {
        case "initiate":
          setReady(false);
          setStatus("Initializing model...");
          break;
        case "download":
          setStatus(`Downloading: ${e.data.file}`);
          break;
        case "progress":
          setProgress(e.data.progress);
          setStatus(
            `Downloading ${e.data.file}: ${e.data.progress.toFixed(2)}%`,
          );
          break;
        case "done":
          setStatus(`Loaded: ${e.data.file}`);
          break;
        case "ready":
          setReady(true);
          setStatus("Model Ready! Type to Search.");
          break;
        case "complete":
          search(e.data.output);
          break;
        case "error":
          setStatus(`Error: ${e.data.message}`);
          console.error(e.data.message);
          break;
      }
    };

    worker.current.addEventListener("message", onMessageReceived);

    return () =>
      worker.current?.removeEventListener("message", onMessageReceived);
  });

  const classify = useCallback((text: string) => {
    if (worker.current) {
      worker.current.postMessage({ text });
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <input
          className="cartoon-input mb-4 w-full max-w-xs rounded-full border-4 border-black p-3 pr-12 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          type="text"
          placeholder="Digite sua busca"
          onInput={(e) => {
            classify((e.target as HTMLInputElement).value);
          }}
        />
      </div>

      <p className="mt-2 text-xl font-bold text-gray-700">{status}</p>

      {progress > 0 && progress < 100 && (
        <div className="cartoon-border mt-4 h-8 w-full max-w-md overflow-hidden rounded-full bg-gray-200">
          <div
            className="h-full bg-yellow-400 transition-all duration-300 ease-in-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}

      {ready !== null && result && (
        <div className="mt-8 w-full max-w-md space-y-4">
          {result.map(({ slug, score, text }) => (
            <Card.Root key={slug}>
              <Card.Category>Blog Post</Card.Category>
              <Card.Title>
                <a
                  href={`/blog/${slug}`}
                  className="text-blue-600 transition-colors duration-200 hover:text-blue-800"
                >
                  {slug}
                </a>
              </Card.Title>
              <Card.Excerpt>
                Score: {(score * 100).toFixed(0)}% - &quot;{text}&quot;
              </Card.Excerpt>
              <Card.Footer id={slug} />
            </Card.Root>
          ))}
        </div>
      )}
    </div>
  );
}
