import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi2";
import { HiArrowUpRight } from "react-icons/hi2";
export default function ProjectCard({
  image,
  title,
}: {
  image: StaticImageData;
  title: string;
}) {
  return (
    <div>
      <Link href={`/projects/${"weather"}`}>
        <Image
          src={image}
          alt="Profile picture"
          width={256}
          className="rounded-md"
        />
      </Link>
      <p className="mt-2 text-sm text-center">{title}</p>
    </div>
  );
}
