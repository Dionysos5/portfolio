import React from "react";
import ProjectCard from "../components/ProjectCard";

import Weather from "../components/weather.png";
export default function Projects() {
  return (
    <article className="flex flex-col gap-6 max-w-screen-sm pr-24">
      <h2 className="text-base font-semibold">Projects</h2>

      <div className=" grid grid-cols-2 gap-4">
        <ProjectCard image={Weather} title={"CLI Weather"} />
      </div>
    </article>
  );
}
