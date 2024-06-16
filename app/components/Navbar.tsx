import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProfilePicture from "./profile.png";

export default function Navbar() {
  return (
    <nav className="col-span-1">
      <Link href={"/"}>
        <Image
          src={ProfilePicture}
          alt="Profile picture"
          width={70}
          className="rounded-full"
        />
      </Link>
      <h2>Denis Bakhoum</h2>
      <p className="mt-2">Software Engineer, @Harvy</p>
      <div className="flex flex-col mt-4">
        <Link href={"/about"}>About</Link>
        <Link href={"/now"}>Now</Link>
        <Link href={"/projects"}>Projects</Link>
        <Link href={"#"}>Github</Link>
        {/* https://github.com/dionysos5 */}
        <Link href={"#"}>Resume</Link>
      </div>
    </nav>
  );
}
