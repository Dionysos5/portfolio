"use client";

import { GitHubCalendar } from "react-github-calendar";

export function GitHubActivity() {
  return (
    <div className="flex justify-center overflow-x-auto">
      <GitHubCalendar
        username="Dionysos5"
        colorScheme="light"
        theme={{
          light: ["#f0fdfa", "#ccfbf1", "#5eead4", "#14b8a6", "#0f766e"],
        }}
        style={{
          color: "#0f766e",
        }}
      />
    </div>
  );
}
