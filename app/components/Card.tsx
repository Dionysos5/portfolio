import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi2";
import { HiArrowUpRight } from "react-icons/hi2";
import Weather from "./weather.png";
export default function Card() {
  return (
    <div>
      <Link href={`/projects/${"weather"}`}>
        <Image
          src={Weather}
          alt="Profile picture"
          width={256}
          className="rounded"
        />
      </Link>
      <p className="mt-2">Command Line Weather app</p>
    </div>
  );
}
