import type { MDXComponents } from "mdx/types";

import { Pre } from "./components/code/pre";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    pre: Pre,
    ...components,
  };
}
