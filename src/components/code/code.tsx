"use client";

import { JSX, useEffect, useState } from "react";

import { getLanguageFromClass, highlight } from "./shared";

interface CodeProps {
  children: string;
  className?: string;
}

export function Code({ children, className }: CodeProps): JSX.Element {
  const [nodes, setNodes] = useState<JSX.Element | null>(null);

  useEffect(() => {
    if (!children) return;

    void highlight(children.trim(), getLanguageFromClass(className)).then(
      setNodes,
    );
  }, [children, className]);

  return nodes ?? <pre className={className}>{children}</pre>;
}
