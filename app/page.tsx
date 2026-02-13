import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { GitHubActivity } from "./components/GitHubActivity";
import { getAllPosts } from "@/lib/blog";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div>
      <article className="flex flex-col gap-16 max-w-xl">
        {/* Intro */}
        <section>
          <h1 className="text-3xl font-bold tracking-tight">
            Denis Bakhoum
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
            Software engineer based in Paris. Currently building at Malibou.
            I care about clean code, great DX, and software that&apos;s built
            to last.
          </p>
          <div className="flex items-center gap-4 mt-5">
            <Link
              href="https://github.com/dionysos5"
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/denis-bakhoum"
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              LinkedIn
            </Link>
            <a
              href="/resume.pdf"
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              Resume
            </a>
          </div>
        </section>

        {/* Writing */}
        <section>
          <h2 className="text-xs font-medium uppercase tracking-wider text-gray-400 dark:text-gray-500">
            Writing
          </h2>
          <div className="mt-4 flex flex-col gap-3">
            {posts.length === 0 ? (
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Coming soon.
              </p>
            ) : (
              posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group rounded-lg border border-gray-200 dark:border-gray-800 px-4 py-3 hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-sm text-gray-900 dark:text-gray-100 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                      {post.title}
                    </span>
                    <time className="text-xs text-gray-400 dark:text-gray-500 shrink-0 tabular-nums">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        year: "numeric",
                      })}
                    </time>
                  </div>
                  {post.description && (
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {post.description}
                    </p>
                  )}
                </Link>
              ))
            )}
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-xs font-medium uppercase tracking-wider text-gray-400 dark:text-gray-500">
            Projects
          </h2>
          <div className="mt-4">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-sm text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              View projects
              <FiArrowRight
                className="group-hover:translate-x-0.5 transition-transform"
                size={14}
              />
            </Link>
          </div>
        </section>

        {/* GitHub Activity */}
        <section>
          <h2 className="text-xs font-medium uppercase tracking-wider text-gray-400 dark:text-gray-500">
            GitHub
          </h2>
          <div className="mt-4">
            <GitHubActivity />
          </div>
        </section>
      </article>
    </div>
  );
}
