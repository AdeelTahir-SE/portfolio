"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "About", href: "/AboutMe" },
  { label: "Services", href: "/Services" },
  { label: "Projects", href: "/Projects" },
  { label: "Contact", href: "/ContactMe" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(5,5,10,0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "blur(0px)",
        borderBottom: scrolled
          ? "1px solid rgba(147,51,234,0.2)"
          : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.4)" : "none",
      }}
    >
      <div className="flex justify-between items-center px-6 md:px-16 lg:px-28 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold"
          style={{
            background: "linear-gradient(135deg, #c084fc, #9333ea)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontFamily: "var(--font-mono)",
            letterSpacing: "-0.03em",
          }}
        >
          AT.
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 list-none items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="nav-link text-sm font-medium">
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/ContactMe"
              className="px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, rgba(147,51,234,0.2), rgba(99,102,241,0.2))",
                border: "1px solid rgba(147,51,234,0.4)",
                color: "#c084fc",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(135deg, rgba(147,51,234,0.4), rgba(99,102,241,0.4))";
                e.currentTarget.style.boxShadow = "0 0 20px rgba(147,51,234,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(135deg, rgba(147,51,234,0.2), rgba(99,102,241,0.2))";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Hire Me
            </Link>
          </li>
        </ul>

        {/* Mobile menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className="p-2 rounded-lg transition-colors"
                style={{
                  color: "#c084fc",
                  border: "1px solid rgba(147,51,234,0.3)",
                  background: "rgba(147,51,234,0.08)",
                }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </SheetTrigger>
            <SheetContent
              style={{
                background: "rgba(8,5,20,0.97)",
                backdropFilter: "blur(20px)",
                borderLeft: "1px solid rgba(147,51,234,0.2)",
              }}
            >
              <SheetHeader>
                <SheetTitle
                  style={{
                    background: "linear-gradient(135deg, #c084fc, #9333ea)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontFamily: "var(--font-mono)",
                    fontSize: "1.5rem",
                  }}
                >
                  AT.
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6 mt-10">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium nav-link"
                    style={{ color: "#94a3b8" }}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/ContactMe"
                  className="mt-4 px-6 py-3 rounded-xl text-center font-semibold"
                  style={{
                    background: "linear-gradient(135deg, #9333ea, #6366f1)",
                    color: "#fff",
                    boxShadow: "0 0 20px rgba(147,51,234,0.4)",
                  }}
                >
                  Hire Me
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
