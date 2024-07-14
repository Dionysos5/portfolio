import React from "react";
import Image from "next/image";
import Weather from "../../components/weather.png";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
const ProjectDetails = ({ params }: { params: { projectName: string } }) => {
  const { projectName } = params;
  return (
    <article className="flex flex-col gap-6 max-w-screen-sm pr-24">
      <h1 className="capitalize font-semibold text-lg">{projectName}</h1>
      <p>
        A Python-based command line weather application showcasing API
        integration skills. Utilizes the OpenWeatherMap API to provide real-time
        weather data for user-specified locations.{" "}
      </p>

      <div className="flex gap-2">
        <p className="bg-green-100  text-green-700 uppercase px-1 py-[0.5] font-semibold">
          Demo
        </p>
        <Link href={"/about"} className="flex gap-1 items-center underline">
          Weather App
          <FaArrowUpRightFromSquare className="text-xs mr-1" />
        </Link>
      </div>
      <div className="flex gap-2">
        <p className="bg-green-100  text-green-700 uppercase px-1 py-[0.5] font-semibold">
          Stack
        </p>
        <span className="flex gap-1 items-center ">Python 3</span>
      </div>
      <div className="flex gap-2">
        <p className="bg-green-100  text-green-700 uppercase px-1 py-[0.5] font-semibold">
          Source
        </p>
        <Link href={"/about"} className="flex gap-1 items-center underline">
          github.com/dionysos5/weather
          <FaArrowUpRightFromSquare className="text-xs mr-1" />
        </Link>
      </div>
      <Image
        src={Weather}
        alt="Profile picture"
        width={512}
        height={320}
        className="w-full h-96 bg-red-200 rounded-md"
      />
    </article>
  );
};

export default ProjectDetails;
