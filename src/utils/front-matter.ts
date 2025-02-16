import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { Node } from "unist";
import { remove } from "unist-util-remove";

export interface Content {
  id: string;
  title: string;
  excerpt?: string;
  date: string;
  category: string;
  readTime: string;
}

function calculateReadingTime(content: string) {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  const minutes = words / wordsPerMinute;
  const readTime = Math.ceil(minutes);
  return `${readTime} min`;
}

export function getFileFrontMatter(folder: string, filename: string) {
  const markdownWithMeta = fs.readFileSync(
    path.join(process.cwd(), "src/content/", folder, filename),
    "utf-8",
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const readTime = calculateReadingTime(content);

  return {
    id: filename.replace(".mdx", ""),
    excerpt: frontMatter.excerpt,
    title: frontMatter.title,
    date: frontMatter.date,
    category: frontMatter.category,
    readTime: readTime,
  };
}

export function getAllFrontMatters(folder: string): Content[] {
  const files = fs.readdirSync(
    path.join(process.cwd(), "src/content", folder),
    "utf-8",
  );
  const frontMatters = files.map((filename) => {
    return getFileFrontMatter(folder, filename);
  });

  return frontMatters.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getFileContent(folder: string, filename: string) {
  const markdownWithMeta = fs.readFileSync(
    path.join(process.cwd(), "src/content/", folder, filename),
    "utf-8",
  );

  const { content } = matter(markdownWithMeta);

  return content;
}

export function remarkRemoveFrontmatter() {
  return (tree: Node) => {
    remove(tree, (node) => node.type === "yaml");
    remove(tree, (node) => node.type === "toml");
  };
}
