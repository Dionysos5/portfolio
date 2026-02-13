import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles on software engineering, tooling, and developer experience by Denis Bakhoum.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <article className="flex flex-col gap-6 max-w-screen-sm">
      <h2 className="text-lg font-semibold">Blog</h2>

      {posts.length === 0 ? (
        <p className="text-sm text-gray-500 dark:text-gray-400">
          No posts yet. Check back soon.
        </p>
      ) : (
        <div className="flex flex-col gap-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-xl border border-gray-200 dark:border-gray-800 px-4 py-3 hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-sm transition-all"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-sm font-medium group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                  {post.title}
                </h3>
                <time className="text-xs text-gray-500 dark:text-gray-400 shrink-0">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
              </div>
              {post.description && (
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {post.description}
                </p>
              )}
            </Link>
          ))}
        </div>
      )}
    </article>
  );
}
