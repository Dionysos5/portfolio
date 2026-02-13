import ProjectCard from "../components/ProjectCard";

export function generateMetadata() {
  return {
    title: "Projects",
    description: "Projects catalogue",
  };
}
export default function Projects() {
  return (
    <article className="flex flex-col gap-6 max-w-screen-sm ">
      <h2 className="text-lg font-semibold">Projects</h2>

      <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4">
        <ProjectCard projectName="weather" title={"CLI Weather"} />
      </div>
    </article>
  );
}
