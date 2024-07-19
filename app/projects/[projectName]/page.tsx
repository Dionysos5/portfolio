import React from "react";
import Image from "next/image";
import Weather from "../../components/weather.png";
import Link from "next/link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
const ProjectDetails = ({ params }: { params: { projectName: string } }) => {
  //TODO: Create a json file with description, demo, source link and stack information
  // load it based on projectName found in params
  const { projectName } = params;

  const description =
    "A Python-based command line weather application showcasing API integration skills. Utilizes the OpenWeatherMap API to provide real-time weather data for user-specified locations.";
  const sourceLink = "https://github.com/Dionysos5/weather-app";
  const stack = "Python 3";

  return (
    <article className="flex flex-col gap-6 max-w-screen-sm pr-24">
      <h1 className="capitalize font-semibold text-lg">{projectName}</h1>
      <p className="text-justify">{description}</p>

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
        <span className="flex gap-1 items-center ">{stack}</span>
      </div>
      <div className="flex gap-2">
        <p className="bg-green-100  text-green-700 uppercase px-1 py-[0.5] font-semibold">
          Source
        </p>
        <Link href={sourceLink} className="flex gap-1 items-center underline">
          {sourceLink}
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
