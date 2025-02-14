import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import type { JSX } from "react";
import { Fragment } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { createHighlighter } from "shiki";
import type { BundledLanguage } from "shiki/bundle/web";

let highlighterPromise: ReturnType<typeof createHighlighter>;

async function getShikiHighlighter() {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: ["github-dark"],
      langs: [
        "typescript",
        "javascript",
        "tsx",
        "jsx",
        "css",
        "json",
        "markdown",
        "bash",
        "txt",
      ],
    });
  }
  return highlighterPromise;
}

export async function highlight(
  code: string,
  lang: BundledLanguage,
): Promise<JSX.Element> {
  const highlighter = await getShikiHighlighter();
  const out = await highlighter.codeToHast(code, {
    lang,
    theme: "github-dark",
  });

  return toJsxRuntime(out, { Fragment, jsx, jsxs }) as JSX.Element;
}

export function getLanguageFromClass(className?: string): BundledLanguage {
  return (className?.match(/language-(\w+)/)?.[1] || "txt") as BundledLanguage;
}
