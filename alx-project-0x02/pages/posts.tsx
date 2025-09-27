import Header from "@/components/layout/Header";

export default function PostsPage() {
  return (
    <>
      <Header />
      <div className="p-8">
        <h1 className="text-2xl font-bold">Posts Page</h1>
        <p>This is where posts will be displayed.</p>
      </div>
    </>
  );
}

import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { type PostProps } from "@/interfaces";

interface PostsPageProps {
  posts: PostProps[];
}

export default function PostsPage({ posts }: PostsPageProps) {
  return (
    <>
      <Header />
      <div className="p-8 space-y-4">
        <h1 className="text-2xl font-bold mb-4">Posts Page</h1>
        <div className="grid gap-4">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              userId={post.userId}
              title={post.title}
              body={post.body}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
  const posts: PostProps[] = await res.json();

  return {
    props: {
      posts,
    },
  };
}
