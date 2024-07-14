import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi2";
import { HiArrowUpRight } from "react-icons/hi2";
import ProfilePicture from "./profile.png";
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 flex flex-col m-0 px-8 py-10 w-80 h-screen">
      <Link href={"/"}>
        <Image
          src={ProfilePicture}
          alt="Profile picture"
          width={50}
          className="rounded-full"
        />
      </Link>
      <h3 className="pt-4">Denis Bakhoum</h3>
      <p className="mt-2">Full-stack developer, Harvy</p>
      <div className="flex flex-col mt-4">
        <Link href={"/about"} className="flex items-center">
          <HiOutlineArrowRight className="mr-1" />
          About
        </Link>
        <Link href={"/now"} className="flex items-center">
          <HiOutlineArrowRight className="mr-1" />
          Now
        </Link>
        <Link href={"/projects"} className="flex items-center">
          <HiOutlineArrowRight className="mr-1" />
          Projects
        </Link>
        <Link href={"#"} className="flex items-center">
          <HiArrowUpRight className="mr-1" />
          Github
        </Link>
        {/* https://github.com/dionysos5 */}
        <Link href={"#"} className="flex items-center">
          {" "}
          <HiArrowUpRight className="mr-1" />
          Resume
        </Link>
      </div>
      <div className="absolute bottom-12">© 2024</div>
    </nav>
  );
}
