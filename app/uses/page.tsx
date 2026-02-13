import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uses",
  description:
    "Tools, hardware, and software Denis Bakhoum uses for AI-assisted development.",
};

const sections = [
  {
    label: "AI Development Stack",
    items: [
      { name: "Cursor", desc: "Primary IDE for AI-assisted coding" },
      { name: "Claude Code", desc: "Deep reasoning and architecture discussions" },
      { name: "opencode", desc: "Quick CLI assistance" },
    ],
  },
  {
    label: "Editors",
    items: [
      { name: "Cursor", desc: "When I want AI deeply integrated" },
      { name: "Zed", desc: "When I want raw speed" },
      { name: "LazyVim", desc: "When I want modal editing power" },
    ],
  },
  {
    label: "Hardware & Environment",
    items: [
      { name: "MacBook Pro M4, 48GB RAM", desc: "Running multiple AI tools and containers" },
      { name: "iTerm2 + tmux", desc: "Persistent terminal sessions" },
      { name: "Karabiner Elements", desc: "Caps Lock as hyper key with multiple layers" },
    ],
  },
  {
    label: "Browsers",
    items: [
      { name: "Arc", desc: "Work browsing (spaces for different contexts)" },
      { name: "Firefox", desc: "Personal browsing" },
    ],
  },
  {
    label: "Productivity",
    items: [
      { name: "Rectangle", desc: "Window management" },
      { name: "Stats", desc: "System monitoring" },
      { name: "Handy", desc: "Open source dictation tool" },
      { name: "MonitorControl", desc: "External display brightness" },
    ],
  },
];

export default function Uses() {
  return (
    <article className="flex flex-col gap-8 max-w-2xl">
      <div>
        <h2 className="text-lg font-semibold">Uses</h2>
        <p className="leading-relaxed text-sm text-gray-600 dark:text-gray-300 mt-2">
          My setup for AI-assisted development. Constantly experimenting with
          tools to optimize workflow and reduce friction.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {sections.map((section) => (
          <div key={section.label}>
            <h3 className="text-xs font-medium uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3">
              {section.label}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {section.items.map((item) => (
                <div
                  key={item.name}
                  className="rounded-xl border border-gray-200 dark:border-gray-800 px-3 py-2.5 hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-sm transition-all"
                >
                  <span className="text-sm font-medium">{item.name}</span>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
