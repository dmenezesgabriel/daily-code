"use client";

import { Bot, Send, User } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import { ProgressBar } from "./progress-bar";

interface ChatbotProps {
  className?: string;
}

interface Message {
  text: string;
  sender: "user" | "bot";
}

export function Chatbot({ className }: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [status, setStatus] = useState("Loading...");
  const [ready, setReady] = useState<boolean | null>(null);
  const [progress, setProgress] = useState(0);

  const worker = useRef<Worker | null>(null);

  useEffect(() => {
    if (!worker.current) {
      worker.current = new Worker(
        new URL("../app/worker.ts", import.meta.url),
        {
          type: "module",
        },
      );
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
          setStatus("Model Ready! Ask me anything.");
          break;
        case "complete":
          setMessages((prev) => [
            ...prev,
            { text: "Aqui está a resposta...", sender: "bot" },
          ]);
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
  }, []);

  const sendMessage = useCallback((text: string) => {
    if (worker.current) {
      setMessages((prev) => [...prev, { text: text, sender: "user" }]);
      worker.current.postMessage({ text });
      setInput("");
    }
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-4 right-4 z-50 flex flex-col rounded-lg shadow-lg",
        isOpen ? "w-96" : "w-24",
        className,
      )}
    >
      <button
        className="cartoon-button mb-2 rounded-t-lg bg-blue-200 p-3 font-bold text-gray-900"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Esconder Chatbot" : "Mostrar Chatbot"}
      </button>

      {isOpen && (
        <div className="cartoon-border flex h-96 flex-col justify-between bg-white p-4">
          <div className="mb-4 h-64 overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn("mb-2 flex items-start rounded-lg p-2", {
                  "flex-row-reverse bg-gray-100 text-right":
                    message.sender === "user",
                  "bg-blue-100 text-left": message.sender === "bot",
                })}
              >
                {message.sender === "user" ? (
                  <User className="mr-2 h-6 w-6" />
                ) : (
                  <Bot className="mr-2 h-6 w-6" />
                )}
                <div>{message.text}</div>
              </div>
            ))}
            <p className="mt-2 text-xl font-bold text-gray-700">{status}</p>

            {progress > 0 && progress < 100 && (
              <ProgressBar progress={progress} variant="robot" />
            )}
          </div>

          <div className="flex items-center">
            <input
              type="text"
              className="cartoon-input mr-2 w-full rounded-full border-2 border-black p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Digite sua mensagem..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage(input);
                }
              }}
            />
            <button
              className="cartoon-button rounded-full bg-blue-300 p-3"
              onClick={() => sendMessage(input)}
            >
              <Send className="h-6 w-6 text-gray-900" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
