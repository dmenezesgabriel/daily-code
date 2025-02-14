import type { JSX } from "react";

import { Code } from "./code";

interface PreProps extends React.HTMLAttributes<HTMLPreElement> {
  children: React.ReactElement<{ className?: string; children: string }>;
}

export function Pre({ children, ...props }: PreProps): JSX.Element {
  const className = children?.props?.className;
  return className ? (
    <Code className={className}>{children.props.children}</Code>
  ) : (
    <pre {...props}>{children}</pre>
  );
}
