import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";

export default function Navbar() {
  return (
    <div>
      <nav className="w-full flex flex-col md:hidden p-2 bg-white/70 backdrop-blur-md rounded-3xl border border-gray-light">
        <div className="flex justify-between px-4">
          <Link href={"/"}>
            <Image
              src={"/images/profile.png"}
              alt="Profile picture"
              width={50}
              height={50}
              className="rounded-full drop-shadow border-grey-200"
            />
          </Link>{" "}
          <div className="flex gap-3 pr-4 ">
            <Link
              href={"/"}
              className="flex items-center text-sm font-semibold"
            >
              <HiOutlineArrowRight className="mr-1" />
              About
            </Link>
            <Link
              href={"/projects"}
              className="flex items-center text-sm font-semibold"
            >
              <HiOutlineArrowRight className="mr-1" />
              Projects
            </Link>

            <Link
              href={"/contact"}
              className="flex items-center text-sm font-semibold"
            >
              <HiOutlineArrowRight className="mr-1" />
              Contact
            </Link>
            {/* <Link href={"/uses"} className="flex items-center text-sm"> */}
            {/*   <HiOutlineArrowRight className="mr-1" /> */}
            {/*   Uses */}
            {/* </Link> */}
            <Link
              href={"https://github.com/dionysos5"}
              className="flex items-center text-sm font-semibold"
            >
              <FaGithub className="mr-1" />
              Github
            </Link>
          </div>
        </div>
      </nav>
      <nav className="fixed top-0 left-0 flex flex-col m-0 px-8 py-10 w-80 h-screen hidden md:flex md:min-h-[500px]">
        <Link href={"/"}>
          <Image
            src={"/images/profile.png"}
            alt="Profile picture"
            width={90}
            height={90}
            className="rounded-full drop-shadow border-grey-200"
          />
        </Link>
        <h3 className="pt-4 text-base font-semibold">Denis Bakhoum</h3>
        <p className="text-sm">Full-stack developer, Harvy</p>
        <div className="flex flex-col mt-4 gap-1">
          <Link href={"/"} className="flex items-center text-sm font-semibold">
            <HiOutlineArrowRight className="mr-1" />
            About
          </Link>
          <Link
            href={"/projects"}
            className="flex items-center text-sm font-semibold"
          >
            <HiOutlineArrowRight className="mr-1" />
            Projects
          </Link>
          <Link
            href={"/contact"}
            className="flex items-center text-sm font-semibold"
          >
            <HiOutlineArrowRight className="mr-1" />
            Contact
          </Link>
          {/* <Link href={"/uses"} className="flex items-center text-sm"> */}
          {/*   <HiOutlineArrowRight className="mr-1" /> */}
          {/*   Uses */}
          {/* </Link> */}
          <Link
            href={"https://github.com/dionysos5"}
            className="flex items-center text-sm font-semibold"
          >
            <FaGithub className="mr-1" />
            Github
          </Link>
          {/* <Link href={"#"} className="flex items-center text-sm"> */}
          {/*   {" "} */}
          {/*   <HiArrowUpRight className="mr-1" /> */}
          {/*   Resume */}
          {/* </Link> */}
        </div>
        <div className="absolute bottom-12">© 2024</div>
      </nav>
    </div>
  );
}
