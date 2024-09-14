"use client";
import Link from "next/link";
import { ModeToggle } from "./theme-btn";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  const [sheet, setSheet] = useState(false);
  return (
    <>
      <nav className="sticky top-0 backdrop-blur-3xl z-10 flex justify-between items-center p-4 bg-white dark:bg-gray-900 dark:text-white shadow-md w-full">
        <div>
          <Link
            href="/"
            className="text-2xl font-bold text-purple-600 hover:underline"
          >
            Adeel Tahir
          </Link>
        </div>

        <ul className="hidden md:flex space-x-6 list-none items-center">
          <li>
            <Link href="/AboutMe" className="hover:underline font-semibold">
              About Me
            </Link>
          </li>
          <li>
            <Link href="/Services" className="hover:underline font-semibold">
              Services
            </Link>
          </li>
          <li>
            <Link href="/Projects" className="hover:underline font-semibold">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/ContactMe" className="hover:underline font-semibold">
              Contact Me
            </Link>
          </li>
          <li>
            <ModeToggle />
          </li>
        </ul>
        <div className="md:hidden">
          <span className="mx-2">
            <ModeToggle />
          </span>
          <Sheet>
            <SheetTrigger>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </SheetTrigger>
            <SheetContent className="bg-white">
              <SheetHeader>
                <SheetTitle className="font-bold my-4 text-purple-600">Adeel-Portfolio</SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col gap-6">
                    <Link
                      href="/AboutMe"
                      className="hover:underline font-semibold"
                    >
                      About Me
                    </Link>

                    <Link
                      href="/Services"
                      className="hover:underline font-semibold"
                    >
                      Services
                    </Link>

                    <Link
                      href="/Projects"
                      className="hover:underline font-semibold"
                    >
                      Projects
                    </Link>

                    <Link
                      href="/ContactMe"
                      className="hover:underline font-semibold"
                    >
                      Contact Me
                    </Link>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </>
  );
}
