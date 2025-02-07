import fs from "fs";
import matter from "gray-matter";
import path from "path";

export interface Content {
  id: string;
  title: string;
  excerpt?: string;
  date: string;
  category: string;
}

export function getContent(folder: string): Content[] {
  const files = fs.readdirSync(
    path.join(process.cwd(), "src/content", folder),
    "utf-8",
  );
  const content = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join(process.cwd(), "src/content/", folder, filename),
      "utf-8",
    );

    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      id: filename.replace(".mdx", ""),
      excerpt: frontMatter.excerpt,
      title: frontMatter.title,
      date: frontMatter.date,
      category: frontMatter.category,
    };
  });

  return content.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}
