import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Resume",
  description: "Denis Bakhoum's work experience and technical skills.",
};

const skills = {
  Frontend: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
  Backend: ["Node.js", "Python", "Prisma", "Symfony", "REST APIs"],
  "DevOps & Monitoring": ["Docker", "AWS Lambda", "Datadog", "CI/CD"],
  Data: ["PostgreSQL", "AWS TimeStream"],
  "AI / DX": ["Claude Code", "MCPs", "AI Workflows"],
};

const experience = [
  {
    period: "2025 - Present",
    title: "Software Engineer",
    company: "Malibou",
    bullets: [
      "Created and leading AI innovation team, improving developer productivity with Claude Code and MCPs",
      "Led major UI overhaul: pixel-perfect Figma redesign, migrated design system from Chakra to shadcn",
    ],
  },
  {
    period: "2023 - 2025",
    title: "Full-stack Developer",
    company: "Harvy",
    bullets: [
      "Architected billing system and automated accounting processing 5000+ monthly documents",
      "Implemented TDD methodology achieving 90% backend test coverage, set up Datadog monitoring",
    ],
  },
  {
    period: "2023",
    title: "Software Engineer",
    company: "Orange Business",
    bullets: [
      "Led technical evaluation of headless CMS solutions, built React/Vue.js components and Symfony 6 features",
    ],
  },
  {
    period: "2022",
    title: "Full-stack Developer",
    company: "Phealing",
    bullets: [
      "Built real-time monitoring platform with AWS Lambda and TimeStream processing 10k+ daily data points",
    ],
  },
];

export default function Resume() {
  return (
    <article className="flex flex-col gap-12 max-w-xl">
      <section>
        <h2 className="text-xs font-medium uppercase tracking-wider text-gray-400 dark:text-gray-500">
          Tech Stack
        </h2>
        <div className="flex flex-col gap-3 mt-4">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="flex flex-wrap items-baseline gap-x-3 gap-y-1.5"
            >
              <span className="text-xs text-gray-400 dark:text-gray-500 w-32 shrink-0">
                {category}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xs font-medium uppercase tracking-wider text-gray-400 dark:text-gray-500">
          Experience
        </h2>
        <div className="mt-4 flex flex-col gap-3">
          {experience.map((job, i) => (
            <div
              key={i}
              className="rounded-xl border border-gray-200 dark:border-gray-800 px-4 py-3"
            >
              <div className="flex items-baseline justify-between gap-4">
                <p className="text-sm">
                  <span className="font-medium">{job.title}</span>
                  <span className="text-gray-500 dark:text-gray-400">
                    , {job.company}
                  </span>
                </p>
                <span className="text-xs text-gray-400 dark:text-gray-500 shrink-0 tabular-nums">
                  {job.period}
                </span>
              </div>
              <ul className="mt-1 space-y-0.5">
                {job.bullets.map((bullet, j) => (
                  <li
                    key={j}
                    className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
