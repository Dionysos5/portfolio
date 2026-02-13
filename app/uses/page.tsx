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
    <article className="flex flex-col gap-8 max-w-screen-sm">
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
            <h3 className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2">
              {section.label}
            </h3>
            <div className="flex flex-col gap-1.5">
              {section.items.map((item) => (
                <div key={item.name} className="text-sm">
                  <span className="font-medium">{item.name}</span>
                  <span className="text-gray-500 dark:text-gray-400">
                    {" "}&mdash; {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
        <p className="leading-relaxed text-sm italic text-gray-600 dark:text-gray-400">
          I match the tool to the context. Cursor for AI pair programming, Zed
          for speed, Vim for precision. Custom keyboard layers mean I rarely
          touch the mouse.
        </p>
      </div>
    </article>
  );
}
