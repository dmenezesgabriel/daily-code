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
  const [embeddings, setEmbeddings] = useState<Record<string, number[]>[]>([]);

  const worker = useRef(null);

  async function search(queryEmbedding: string) {
    const scores = Object.entries(embeddings).map(([slug, emb]) => ({
      slug,
      score: cosineSimilarity(queryEmbedding, emb),
    }));
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

      {ready !== null && (
        <pre className="rounded bg-gray-100 p-2">
          {ready && result && JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  );
}
