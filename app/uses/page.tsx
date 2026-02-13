export default function Uses() {
  return (
    <article className="flex flex-col gap-6 max-w-screen-sm pr-24">
      <h2 className="text-base font-semibold">Uses</h2>
      <p className="leading-relaxed text-sm">
        My setup for AI-assisted development. Constantly experimenting with tools
        to optimize workflow and reduce friction.
      </p>

      <h3 className="text-base font-semibold pt-2">AI Development Stack</h3>
      <ul className="leading-relaxed text-sm list-disc pl-5 space-y-1">
        <li>
          <strong>Cursor</strong> - Primary IDE for AI-assisted coding
        </li>
        <li>
          <strong>Claude Code</strong> - Deep reasoning and architecture
          discussions
        </li>
        <li>
          <strong>opencode</strong> - Quick CLI assistance
        </li>
        <li>
          <strong>Workflow:</strong> Context-switch between AI agents based on
          task complexity
        </li>
      </ul>

      <h3 className="text-base font-semibold pt-2">Editors</h3>
      <ul className="leading-relaxed text-sm list-disc pl-5 space-y-1">
        <li>
          <strong>Cursor</strong> - When I want AI deeply integrated
        </li>
        <li>
          <strong>Zed</strong> - When I want raw speed
        </li>
        <li>
          <strong>LazyVim</strong> - When I want modal editing power
        </li>
      </ul>

      <h3 className="text-base font-semibold pt-2">Hardware & Environment</h3>
      <ul className="leading-relaxed text-sm list-disc pl-5 space-y-1">
        <li>
          <strong>MacBook Pro M4, 48GB RAM</strong> - Running multiple AI tools
          and containers
        </li>
        <li>
          <strong>iTerm2 + tmux</strong> - Persistent terminal sessions
        </li>
        <li>
          <strong>Karabiner Elements</strong> - Custom keyboard layers (Caps Lock
          as hyper key with multiple layers for app-specific shortcuts)
        </li>
      </ul>

      <h3 className="text-base font-semibold pt-2">Browsers</h3>
      <ul className="leading-relaxed text-sm list-disc pl-5 space-y-1">
        <li>
          <strong>Arc</strong> - Work browsing (spaces for different contexts)
        </li>
        <li>
          <strong>Firefox</strong> - Personal browsing
        </li>
      </ul>

      <h3 className="text-base font-semibold pt-2">Productivity</h3>
      <ul className="leading-relaxed text-sm list-disc pl-5 space-y-1">
        <li>
          <strong>Rectangle</strong> - Window management
        </li>
        <li>
          <strong>Stats</strong> - System monitoring
        </li>
        <li>
          <strong>Handy</strong> - Open source dictation tool
        </li>
        <li>
          <strong>MonitorControl</strong> - External display brightness
        </li>
      </ul>

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
