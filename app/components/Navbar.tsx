"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaSun, FaMoon } from "react-icons/fa";
import { FiHome, FiEdit3, FiFolder, FiFileText, FiTool } from "react-icons/fi";
import { useTheme } from "next-themes";
import type { ReactNode } from "react";

const navLinks: { href: string; label: string; icon: ReactNode }[] = [
  { href: "/", label: "Home", icon: <FiHome size={14} /> },
  { href: "/blog", label: "Blog", icon: <FiEdit3 size={14} /> },
  { href: "/projects", label: "Projects", icon: <FiFolder size={14} /> },
  { href: "/resume", label: "Resume", icon: <FiFileText size={14} /> },
  { href: "/uses", label: "Uses", icon: <FiTool size={14} /> },
];

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      {/* Mobile nav */}
      <nav className="w-full flex md:hidden p-3 bg-gray-50/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="flex justify-between w-full px-2 items-center">
          <Link href="/">
            <Image
              src="/images/profile.png"
              alt="Profile picture"
              width={36}
              height={36}
              className="rounded-full"
            />
          </Link>
          <div className="flex gap-4 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs transition-colors ${
                  isActive(link.href)
                    ? "text-gray-900 dark:text-gray-100 font-medium"
                    : "text-gray-500 dark:text-gray-400"
                }`}
              >
                {link.label}
              </Link>
            ))}
            {resolvedTheme && (
              <button
                type="button"
                onClick={toggleTheme}
                className="cursor-pointer p-1.5 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors"
                aria-label="Toggle theme"
              >
                {resolvedTheme === "light" ? (
                  <FaMoon size={13} />
                ) : (
                  <FaSun size={13} />
                )}
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Desktop sidebar */}
      <nav className="fixed top-0 left-0 flex flex-col m-0 px-6 py-8 w-52 h-screen hidden md:flex border-r border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
        <Link href="/">
          <Image
            src="/images/profile.png"
            alt="Profile picture"
            width={64}
            height={64}
            className="rounded-full"
          />
        </Link>
        <h3 className="pt-3 text-sm font-semibold">Denis Bakhoum</h3>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Product Engineer
        </p>

        <div className="flex flex-col mt-6 gap-0.5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-2 text-sm py-1.5 px-2 -ml-2 rounded-lg transition-colors ${
                isActive(link.href)
                  ? "text-gray-900 dark:text-gray-100 font-medium bg-gray-200/70 dark:bg-gray-800"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800/50"
              }`}
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </div>

        {resolvedTheme && (
          <button
            type="button"
            onClick={toggleTheme}
            className="cursor-pointer flex items-center text-sm text-gray-500 dark:text-gray-400 py-1.5 px-2 -ml-2 rounded-md hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors mt-auto"
            aria-label="Toggle theme"
          >
            {resolvedTheme === "light" ? (
              <>
                <FaMoon className="mr-2" size={13} /> Dark
              </>
            ) : (
              <>
                <FaSun className="mr-2" size={13} /> Light
              </>
            )}
          </button>
        )}

        <div className="mt-2 text-xs text-gray-400 dark:text-gray-500">
          © {new Date().getFullYear()}
        </div>
      </nav>
    </div>
  );
}
