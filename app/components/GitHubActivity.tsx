"use client";

import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";

export function GitHubActivity() {
  const { resolvedTheme } = useTheme();

  return (
    <div className="flex justify-center overflow-x-auto">
      <GitHubCalendar
        username="Dionysos5"
        colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
        theme={{
          light: ["#f0fdfa", "#ccfbf1", "#5eead4", "#14b8a6", "#0f766e"],
          dark: ["#042f2e", "#115e59", "#0d9488", "#14b8a6", "#5eead4"],
        }}
        style={{
          color: resolvedTheme === "dark" ? "#5eead4" : "#0f766e",
        }}
      />
    </div>
  );
}
