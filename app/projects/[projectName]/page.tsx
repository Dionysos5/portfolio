import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { PROJECTS } from "../projects";

export async function generateStaticParams() {
  return PROJECTS.map((post) => ({
    projectName: post.name,
  }));
}
const ProjectDetails = ({ params }: { params: { projectName: string } }) => {
  const { projectName } = params;
  const project = PROJECTS.find((project) => project.name === projectName);

  if (!project) {
    return (
      <article className="flex flex-col gap-6 max-w-screen-sm pr-24">
        <p className="text-justify">Project not found</p>
      </article>
    );
  }

  return (
    <article className="flex flex-col gap-6 max-w-screen-sm pr-24">
      <h1 className="capitalize font-semibold text-lg">{project.name}</h1>
      <p className="text-justify">{project.description}</p>

      <div className="flex gap-2">
        <p className="bg-green-100  text-green-700 uppercase px-1 py-[0.5] font-semibold">
          Demo
        </p>
        <Link href={"#"} className="flex gap-1 items-center underline">
          Weather App
          <FaArrowUpRightFromSquare className="text-xs mr-1" />
        </Link>
      </div>
      <div className="flex gap-2">
        <p className="bg-green-100  text-green-700 uppercase px-1 py-[0.5] font-semibold">
          Stack
        </p>
        <span className="flex gap-1 items-center ">{project.stack}</span>
      </div>
      <div className="flex gap-2">
        <p className="bg-green-100  text-green-700 uppercase px-1 py-[0.5] font-semibold">
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
        src={`./images/${project.name}.png`}
        alt="Project illustration"
        width={512}
        height={320}
        className="w-full h-96 bg-red-200 rounded-md"
      />
    </article>
  );
};

export default ProjectDetails;
