import { Code, Palette, Smartphone } from "lucide-react";

import PostCard, {
  PostCardCategory,
  PostCardExcerpt,
  PostCardFooter,
  PostCardIcon,
  PostCardTitle,
} from "./post-card";

type Post = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
};

type PostGridProps = {
  posts: Post[];
};

export default function PostGrid({ posts }: PostGridProps) {
  if (posts.length === 0) {
    return (
      <p className="text-center text-xl text-gray-600">
        Stop the presses! No news found. Try another scoop!
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <div key={post.id} className="pop-up-hover">
          <PostCard>
            <PostCardIcon category={post.category}>
              {getCategoryIcon(post.category)}
            </PostCardIcon>
            <PostCardCategory>{post.category}</PostCardCategory>
            <PostCardTitle>{post.title}</PostCardTitle>
            <PostCardExcerpt>{post.excerpt}</PostCardExcerpt>
            <PostCardFooter date={post.date} postId={post.id} />
          </PostCard>
        </div>
      ))}
    </div>
  );
}

function getCategoryIcon(category: string) {
  switch (category.toLowerCase()) {
    case "design":
      return <Palette className="h-8 w-8 text-white" />;
    case "development":
      return <Code className="h-8 w-8 text-white" />;
    case "ux":
      return <Smartphone className="h-8 w-8 text-white" />;
    default:
      return null;
  }
}
