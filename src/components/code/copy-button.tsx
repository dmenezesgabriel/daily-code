"use client";

import { Clipboard, ClipboardCheck } from "lucide-react";
import type { JSX } from "react";
import { useState } from "react";

interface CopyButtonProps {
  textToCopy: string;
}

export function CopyButton({ textToCopy }: CopyButtonProps): JSX.Element {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute right-2 top-2 hidden cursor-pointer rounded-md border border-slate-300 bg-transparent px-2 py-1 text-xs text-slate-300 group-hover:inline-block"
    >
      {copied ? (
        <ClipboardCheck size={16} strokeWidth={2} />
      ) : (
        <Clipboard size={16} strokeWidth={2} />
      )}
    </button>
  );
}
