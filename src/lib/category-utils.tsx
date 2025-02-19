import { Code, Palette, Smartphone, Tag } from "lucide-react";

export function getCategoryIcon(category: string) {
  switch (category.toLowerCase()) {
    case "design":
      return <Palette className="h-8 w-8 text-white" />;
    case "desenvolvimento":
      return <Code className="h-8 w-8 text-white" />;
    case "ux":
      return <Smartphone className="h-8 w-8 text-white" />;
    default:
      return <Tag className="h-8 w-8 text-white" />;
  }
}

export function getCategoryColor(category: string): string {
  switch (category.toLowerCase()) {
    case "design":
      return "bg-pink-400";
    case "desenvolvimento":
      return "bg-blue-400";
    case "ux":
      return "bg-green-400";
    default:
      return "bg-gray-400";
  }
}
