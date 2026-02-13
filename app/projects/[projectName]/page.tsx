import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { PROJECTS } from "../projects";

export async function generateMetadata(
  props: {
    params: Promise<{ projectName: string }>;
  }
) {
  const params = await props.params;
  return {
    title: params.projectName[0].toUpperCase() + params.projectName.slice(1),
    description: "Project details page",
  };
}
export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    projectName: project.name,
  }));
}
const ProjectDetails = async (props: { params: Promise<{ projectName: string }> }) => {
  const params = await props.params;
  const { projectName } = params;
  const project = PROJECTS.find((project) => project.name === projectName);

  if (!project) {
    notFound();
  }

  return (
    <article className="flex flex-col gap-6 max-w-screen-sm ">
      <h1 className="capitalize font-semibold text-lg">{project.name}</h1>
      <p className="text-justify">{project.description}</p>

      <div className="flex gap-2">
        <p className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 uppercase px-1 py-[0.5] font-semibold">
          Demo
        </p>
        <Link href={"#"} className="flex gap-1 items-center underline">
          Weather App
          <FaArrowUpRightFromSquare className="text-xs mr-1" />
        </Link>
      </div>
      <div className="flex gap-2">
        <p className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 uppercase px-1 py-[0.5] font-semibold">
          Stack
        </p>
        <span className="flex gap-1 items-center ">{project.stack}</span>
      </div>
      <div className="flex gap-2">
        <p className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 uppercase px-1 py-[0.5] font-semibold">
          Source
        </p>
        <Link
          href={project.source}
          className="flex gap-1 items-center underline"
        >
          {project.source}
          <FaArrowUpRightFromSquare className="text-xs mr-1" />
        </Link>
      </div>
      <Image
        src={`/images/${project.name}.png`}
        alt="Project illustration"
        width={512}
        height={512}
        className="w-full rounded-xl"
      />
    </article>
  );
};

export default ProjectDetails;
