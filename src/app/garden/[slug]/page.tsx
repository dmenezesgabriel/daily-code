import fs from "fs";
import { Calendar, Hourglass, Tag } from "lucide-react";
import path from "path";

import { getFileFrontMatter } from "@/utils/front-matter";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const frontMatter = getFileFrontMatter("notes", `${slug}.mdx`);

  return {
    title: `${frontMatter.title}`,
    description: frontMatter.excerpt,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const { default: NoteContent } = await import(`@/content/notes/${slug}.mdx`);
  const frontMatter = getFileFrontMatter("notes", `${slug}.mdx`);

  return (
    <>
      <h1 className="mb-4 text-4xl font-bold">{frontMatter.title}</h1>
      <div className="flex flex-row gap-4 text-xl font-bold underline decoration-green-400 decoration-wavy">
        <span className="flex flex-row gap-1">
          <Calendar />
          {frontMatter.date}
        </span>
        <span className="flex flex-row gap-1">
          <Tag />
          {frontMatter.category}
        </span>
        <span className="flex flex-row gap-1">
          <Hourglass />
          {frontMatter.readTime}
        </span>
      </div>
      <div className="prose mb-8 mt-8 max-w-none">
        <NoteContent />
      </div>
    </>
  );
}

export function generateStaticParams() {
  const files = fs.readdirSync(
    path.join(process.cwd(), "src/content/notes"),
    "utf-8",
  );

  return files.map((filename) => {
    return { slug: filename.replace(".mdx", "") };
  });
}

export const dynamicParams = false;
