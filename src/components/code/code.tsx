import type { JSX } from "react";

import { CopyButton } from "./copy-button";
import { getLanguageFromClass, highlight } from "./shared";

interface CodeProps {
  children: string;
  className?: string;
}

export function Code({ children, className }: CodeProps): JSX.Element {
  if (!children) return <pre className={className}>{children}</pre>;

  const highlightedCode = highlight(
    children.trim(),
    getLanguageFromClass(className),
  );

  return (
    <div className="group relative">
      <CopyButton textToCopy={children} />
      {highlightedCode}
    </div>
  );
}
