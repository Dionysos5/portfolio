import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProfilePicture from "./profile.png";

export default function Navbar() {
  return (
    <nav className="bg-cyan-400 col-span-1">
      <Link href={"/"}>
        <Image
          src={ProfilePicture}
          alt="Profile picture"
          width={70}
          className="rounded-full"
        />
      </Link>
      <h2>Denis Bakhoum</h2>
      <p>Software Engineer</p>
      <div className="flex flex-col bg-red-200">
        <Link href={"/about"}>About</Link>
        <Link href={"/now"}>Now</Link>
        <Link href={"/projects"}>Projects</Link>
        <Link href={"https://github.com/dionysos5"}>Github</Link>
        <Link href={"#"}>Resume</Link>
      </div>
    </nav>
  );
}
