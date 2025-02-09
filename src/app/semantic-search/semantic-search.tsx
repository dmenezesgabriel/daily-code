"use client";

import { useCallback, useEffect, useRef, useState } from "react";

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

export function SemanticSearch() {
  const [result, setResult] = useState(null);
  const [ready, setReady] = useState(null);
  const [status, setStatus] = useState("Loading...");
  const [progress, setProgress] = useState(0);
  const [embeddings, setEmbeddings] = useState<Record<
    string,
    { textChunks: string[]; chunkEmbeddings: number[][] }
  > | null>(null);

  const worker = useRef(null);

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

    const onMessageReceived = (e) => {
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
      worker.current.removeEventListener("message", onMessageReceived);
  });

  const classify = useCallback((text) => {
    if (worker.current) {
      worker.current.postMessage({ text });
    }
  }, []);

  return (
    <div className="relative z-10 flex flex-col items-center justify-center">
      <h1 className="mb-2 text-center text-5xl font-bold">Semantic Search</h1>

      <input
        className="mb-4 w-full max-w-xs rounded border border-gray-300 p-2"
        type="text"
        placeholder="Enter text here"
        onInput={(e) => {
          classify(e.target.value);
        }}
      />

      <p className="mt-2 text-gray-700">{status}</p>

      {progress > 0 && progress < 100 && (
        <div className="mt-2 h-4 w-full max-w-xs rounded-full bg-gray-200">
          <div
            className="h-4 rounded-full bg-blue-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}

      {ready !== null && result && (
        <div className="mt-4 w-full max-w-xs text-left">
          {result.map(({ slug, score, text }) => (
            <div key={slug} className="mb-4 rounded border p-4 shadow">
              <h2 className="text-lg font-semibold">
                <a
                  href={`/blog/${slug}`}
                  className="text-blue-600 hover:underline"
                >
                  {slug} ({score.toFixed(2)})
                </a>
              </h2>
              <p className="mt-2 text-sm text-gray-700">"{text}"</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
