import { JSX } from "react";

import { getLanguageFromClass, highlight } from "./shared";

interface CodeProps {
  children: string;
  className?: string;
}

export function Code({ children, className }: CodeProps): JSX.Element {
  if (!children) return <pre className={className}>{children}</pre>;

  return highlight(children.trim(), getLanguageFromClass(className));
}
