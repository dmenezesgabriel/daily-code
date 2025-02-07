import PostCard from "./post-card";

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
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
}
