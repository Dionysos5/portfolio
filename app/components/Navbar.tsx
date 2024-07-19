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
          width={90}
          className="rounded-full drop-shadow border-grey-200"
        />
      </Link>
      <h3 className="pt-4 text-base font-semibold">Denis Bakhoum</h3>
      <p className="text-sm">Full-stack developer, Harvy</p>
      <div className="flex flex-col mt-4">
        <Link href={"/"} className="flex items-center text-sm">
          <HiOutlineArrowRight className="mr-1" />
          About
        </Link>
        <Link href={"/projects"} className="flex items-center text-sm">
          <HiOutlineArrowRight className="mr-1" />
          Projects
        </Link>
        {/* <Link href={"/uses"} className="flex items-center text-sm"> */}
        {/*   <HiOutlineArrowRight className="mr-1" /> */}
        {/*   Uses */}
        {/* </Link> */}
        <Link
          href={"https://github.com/dionysos5"}
          className="flex items-center text-sm"
        >
          <HiArrowUpRight className="mr-1" />
          Github
        </Link>
        {/* https://github.com/dionysos5 */}
        {/* <Link href={"#"} className="flex items-center text-sm"> */}
        {/*   {" "} */}
        {/*   <HiArrowUpRight className="mr-1" /> */}
        {/*   Resume */}
        {/* </Link> */}
      </div>
      <div className="absolute bottom-12">© 2024</div>
    </nav>
  );
}
