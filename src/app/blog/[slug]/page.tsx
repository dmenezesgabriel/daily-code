import fs from "fs";
import path from "path";

import { getFileFrontMatter } from "@/utils/front-matter";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const frontMatter = getFileFrontMatter("posts", `${slug}.mdx`);

  return {
    title: `${frontMatter.title}`,
    // description: "",
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const { default: PostContent } = await import(`@/content/posts/${slug}.mdx`);

  const frontMatter = getFileFrontMatter("posts", `${slug}.mdx`);

  return (
    <>
      <h1 className="mb-4 text-4xl font-bold">{frontMatter.title}</h1>
      <p className="mb-4 text-gray-600">
        {frontMatter.date} - {frontMatter.category}
      </p>
      <div className="prose mb-8 max-w-none">
        <PostContent />
      </div>
    </>
  );
}

export function generateStaticParams() {
  const files = fs.readdirSync(
    path.join(process.cwd(), "src/content/posts"),
    "utf-8",
  );

  return files.map((filename) => {
    return { slug: filename.replace(".mdx", "") };
  });
}

export const dynamicParams = false;
