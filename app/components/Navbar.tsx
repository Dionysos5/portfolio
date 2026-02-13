"use client";

import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi2";
import { FaGithub, FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };
  return (
    <div>
      <nav className="w-full flex flex-col md:hidden p-2 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md rounded-3xl border border-gray-200 dark:border-gray-700">
        <div className="flex justify-between px-4 items-center">
          <Link href={"/"}>
            <Image
              src={"/images/profile.png"}
              alt="Profile picture"
              width={50}
              height={50}
              className="rounded-full drop-shadow border-grey-200"
            />
          </Link>{" "}
          <div className="flex gap-3 pr-4 items-center">
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
            <Link href={"/uses"} className="flex items-center text-sm font-semibold">
              <HiOutlineArrowRight className="mr-1" />
              Uses
            </Link>
            <Link
              href={"https://github.com/dionysos5"}
              className="flex items-center text-sm font-semibold"
            >
              <FaGithub className="mr-1" />
              Github
            </Link>
            {resolvedTheme && (
              <button
                type="button"
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle theme"
              >
                {resolvedTheme === "light" ? <FaMoon className="text-sm" /> : <FaSun className="text-sm" />}
              </button>
            )}
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
          <Link href={"/uses"} className="flex items-center text-sm font-semibold">
            <HiOutlineArrowRight className="mr-1" />
            Uses
          </Link>
          <Link
            href={"https://github.com/dionysos5"}
            className="flex items-center text-sm font-semibold"
          >
            <FaGithub className="mr-1" />
            Github
          </Link>
          {resolvedTheme && (
            <button
              type="button"
              onClick={toggleTheme}
              className="flex items-center text-sm font-semibold p-2 -ml-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {resolvedTheme === "light" ? (
                <>
                  <FaMoon className="mr-1" /> Dark
                </>
              ) : (
                <>
                  <FaSun className="mr-1" /> Light
                </>
              )}
            </button>
          )}
        </div>
        <div className="absolute bottom-12 text-gray-500 dark:text-gray-400">© 2024</div>
      </nav>
    </div>
  );
}
