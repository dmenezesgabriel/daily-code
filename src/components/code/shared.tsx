import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import type { JSX } from "react";
import { Fragment } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import type { BundledLanguage } from "shiki/bundle/web";
import { codeToHast } from "shiki/bundle/web";

export async function highlight(
  code: string,
  lang: BundledLanguage,
): Promise<JSX.Element> {
  const out = await codeToHast(code, { lang, theme: "github-dark" });

  return toJsxRuntime(out, { Fragment, jsx, jsxs }) as JSX.Element;
}

export function getLanguageFromClass(className?: string): BundledLanguage {
  return (className?.match(/language-(\w+)/)?.[1] || "txt") as BundledLanguage;
}
