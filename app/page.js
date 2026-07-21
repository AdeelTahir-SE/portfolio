"use client";
import NextImage from "next/image";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import dynamic from "next/dynamic";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import SkillsCard from "@/components/ui/SkillsCard";
import html from "@/components/ui/html.svg";
import nodejs from "@/components/ui/nodejs.svg";
import reactjs from "@/components/ui/reactjs.svg";
import mongodb from "@/components/ui/mongodb.svg";
import postgres from "@/components/ui/postgres.svg";
import mysql from "@/components/ui/mysql.svg";
import tailwindcss from "@/components/ui/tailwindcss.svg";
import redis from "@/components/ui/redis.svg";
import css from "@/components/ui/css.svg";
import typescript from "@/components/ui/typescript.svg";
import npm from "@/components/ui/npm.svg";
import git from "@/components/ui/git.svg";
import express from "@/components/ui/express.svg";
import nextjs from "@/components/ui/nextjs.svg";
import javascript from "@/components/ui/javascript.svg";
import certificate2 from "@/public/Certificate2.png";
import certificate1 from "@/public/Certificate1.png";
import certificate3 from "@/public/Certificate3.png";
import certificate4 from "@/public/certificate4.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Dynamic imports — Three.js must not run on SSR
const ThreeBackground = dynamic(
  () => import("@/components/ThreeBackground"),
  { ssr: false }
);
const LaptopScene = dynamic(
  () => import("@/components/LaptopScene"),
  { ssr: false }
);

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Restaurant Application",
    description:
      "Utilizes MongoDB, Express.js, React, and Node.js to deliver a seamless user experience for managing food items, user data, and orders.",
    techs: ["React", "CSS", "API", "MongoDB", "Express.js", "Node.js"],
  },
  {
    title: "BroadCast Server",
    description:
      "Built with Node.js, Express, and Socket.IO for seamless communication, enabling live chat functionality and command-line interactions.",
    techs: ["Node.js", "Express.js", "CLI", "chalk", "Socket.io"],
  },
  {
    title: "Weather App",
    description:
      "Provides real-time weather data and forecasts using React, Redis, Node.js, and Express, with efficient caching for quick retrieval.",
    techs: ["Node.js", "Express", "Redis", "React", "Tailwind CSS"],
  },
  {
    title: "Todo List API",
    description:
      "Allows users to manage to-do items with endpoints for CRUD operations, secured using JWT and Prisma for database interactions.",
    techs: ["Node.js", "Express", "REST API", "Postgres", "Prisma ORM"],
  },
  {
    title: "More Projects →",
    description: "Visit the Projects page for the full collection of work.",
    techs: [],
  },
];

const skills = [
  { title: "HTML", description: "Semantic markup & accessibility", img: html },
  { title: "CSS", description: "Advanced layouts & animations", img: css },
  { title: "JavaScript", description: "ES2024, async patterns, DOM", img: javascript },
  { title: "TypeScript", description: "Typed superset of JavaScript", img: typescript },
  { title: "Node.js", description: "Server-side JS runtime", img: nodejs },
  { title: "React.js", description: "Component-based UI library", img: reactjs },
  { title: "Next.js", description: "Full-stack React framework", img: nextjs },
  { title: "MongoDB", description: "NoSQL document database", img: mongodb },
  { title: "PostgreSQL", description: "Relational database system", img: postgres },
  { title: "MySQL", description: "Open-source RDBMS", img: mysql },
  { title: "Tailwind CSS", description: "Utility-first CSS framework", img: tailwindcss },
  { title: "Redis", description: "In-memory data store & cache", img: redis },
  { title: "Express", description: "Minimalist Node.js framework", img: express },
  { title: "Git", description: "Version control system", img: git },
  { title: "npm", description: "Node package manager", img: npm },
];

export default function Home() {
  const typedRef = useRef(null);
  const heroHeadingRef = useRef(null);
  const heroSubRef = useRef(null);
  const heroCTARef = useRef(null);
  const projectsSectionRef = useRef(null);
  const skillsSectionRef = useRef(null);
  const certSectionRef = useRef(null);

  // ── Typed.js ──────────────────────────────────────────────
  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Full Stack Developer",
        "MERN Stack Developer",
        "PERN Stack Developer",
        "React Developer",
        "Next.js Developer",
      ],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1200,
      startDelay: 800,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  // ── GSAP Scroll Animations ────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance
      const heroTl = gsap.timeline({ delay: 0.2 });
      heroTl
        .fromTo(
          heroHeadingRef.current,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
        )
        .fromTo(
          heroSubRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.6"
        )
        .fromTo(
          heroCTARef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
          "-=0.5"
        );

      // Projects section title
      gsap.fromTo(
        projectsSectionRef.current?.querySelector(".section-header"),
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, ease: "power3.out",
          scrollTrigger: {
            trigger: projectsSectionRef.current,
            start: "top 80%",
          },
        }
      );

      // Project cards stagger
      gsap.fromTo(
        projectsSectionRef.current?.querySelectorAll(".project-card"),
        { y: 70, opacity: 0 },
        {
          y: 0, opacity: 1,
          duration: 0.75,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: projectsSectionRef.current,
            start: "top 70%",
          },
        }
      );

      // Skills title
      gsap.fromTo(
        skillsSectionRef.current?.querySelector(".section-header"),
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, ease: "power3.out",
          scrollTrigger: {
            trigger: skillsSectionRef.current,
            start: "top 80%",
          },
        }
      );

      // Skills cards stagger pop
      gsap.fromTo(
        skillsSectionRef.current?.querySelectorAll(".skill-card-item"),
        { scale: 0.7, opacity: 0, y: 30 },
        {
          scale: 1, opacity: 1, y: 0,
          duration: 0.55,
          stagger: 0.06,
          ease: "back.out(1.6)",
          scrollTrigger: {
            trigger: skillsSectionRef.current,
            start: "top 70%",
          },
        }
      );

      // Certs section
      gsap.fromTo(
        certSectionRef.current?.querySelector(".section-header"),
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, ease: "power3.out",
          scrollTrigger: {
            trigger: certSectionRef.current,
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        certSectionRef.current?.querySelectorAll(".cert-card"),
        { x: (i) => (i % 2 === 0 ? -60 : 60), opacity: 0 },
        {
          x: 0, opacity: 1,
          duration: 0.85,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: certSectionRef.current,
            start: "top 75%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative min-h-screen" style={{ fontFamily: "var(--font-main)" }}>
      {/* Three.js background canvas — fixed, behind everything */}
      <ThreeBackground />

      {/* Page content — above canvas */}
      <div className="relative z-10">

        {/* ─── HERO ─────────────────────────────────────────── */}
        <section
          className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 lg:px-32 pt-24"
          style={{
            background:
              "linear-gradient(135deg, rgba(5,5,10,0.85) 0%, rgba(10,5,25,0.7) 100%)",
          }}
        >
          {/* Text */}
          <div className="flex-1 mb-12 md:mb-0 max-w-xl">
            {/* Eyebrow */}
            <div
              ref={heroCTARef}
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full glow-border text-sm"
              style={{
                color: "var(--accent-light)",
                fontFamily: "var(--font-mono)",
                background: "rgba(147,51,234,0.1)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  background: "var(--accent)",
                  animation: "pulse-glow 2s ease-in-out infinite",
                  boxShadow: "0 0 8px var(--accent)",
                }}
              />
              Available for work
            </div>

            <h1 ref={heroHeadingRef} className="section-title mb-4" style={{ lineHeight: 1.1 }}>
              Hi, I'm{" "}
              <span className="gradient-text">Adeel Tahir</span>
            </h1>

            <h2
              ref={heroSubRef}
              className="text-xl md:text-2xl mb-8"
              style={{ color: "var(--text-muted)", fontWeight: 400 }}
            >
              a{" "}
              <span
                ref={typedRef}
                style={{ color: "var(--accent-light)", fontWeight: 600 }}
              />
            </h2>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-7 py-3 rounded-xl font-semibold transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, var(--accent), #6366f1)",
                  color: "#fff",
                  boxShadow: "0 0 24px rgba(147,51,234,0.45)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 0 40px rgba(147,51,234,0.7)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 0 24px rgba(147,51,234,0.45)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                View Work
              </a>
              <a
                href="#contact"
                className="px-7 py-3 rounded-xl font-semibold transition-all duration-300 glow-border"
                style={{ color: "var(--accent-light)", background: "rgba(147,51,234,0.08)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(147,51,234,0.18)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(147,51,234,0.08)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Get in Touch
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-5 mt-10" style={{ color: "var(--text-muted)" }}>
              <span className="text-sm" style={{ fontFamily: "var(--font-mono)" }}>Find me on</span>
              <span
                className="h-px flex-1 max-w-16"
                style={{ background: "var(--border-glow)" }}
              />
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="nav-link text-sm"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="nav-link text-sm"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* 3D Laptop Model */}
          <div
            className="relative flex-shrink-0 w-full md:w-[480px] lg:w-[560px]"
            style={{ height: "480px" }}
          >
            <LaptopScene />
          </div>
        </section>

        {/* ─── PROJECTS ─────────────────────────────────────── */}
        <section
          id="projects"
          ref={projectsSectionRef}
          className="py-28 px-6 md:px-20 lg:px-32"
          style={{ background: "rgba(5,5,10,0.92)" }}
        >
          {/* Header */}
          <div className="section-header text-center mb-16">
            <p
              className="text-sm mb-3 tracking-widest uppercase"
              style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}
            >
              Portfolio
            </p>
            <h2 className="section-title gradient-text mb-4">Projects</h2>
            <p
              className="max-w-xl mx-auto text-base leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              A curated selection of projects showcasing full-stack expertise
              from database design to polished UIs.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card glass-card p-6 cursor-pointer group"
              >
                {/* Number */}
                <div
                  className="text-xs mb-4"
                  style={{
                    color: "var(--accent)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  0{index + 1}
                </div>
                <h3
                  className="text-xl font-semibold mb-3 group-hover:text-purple-300 transition-colors"
                  style={{ color: "var(--text-primary)" }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "var(--text-muted)" }}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techs.map((tech, ti) => (
                    <span key={ti} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── SKILLS ───────────────────────────────────────── */}
        <section
          id="skills"
          ref={skillsSectionRef}
          className="py-28 px-6 md:px-20 lg:px-32"
          style={{
            background:
              "linear-gradient(180deg, rgba(5,5,10,0.95) 0%, rgba(10,5,30,0.95) 100%)",
          }}
        >
          <div className="section-header text-center mb-16">
            <p
              className="text-sm mb-3 tracking-widest uppercase"
              style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}
            >
              Expertise
            </p>
            <h2 className="section-title gradient-text mb-4">Skills</h2>
            <p
              className="max-w-xl mx-auto text-base leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              Technologies I work with to craft scalable, performant applications.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {skills.map((skill, i) => (
              <div key={i} className="skill-card-item">
                <SkillsCard
                  title={skill.title}
                  description={skill.description}
                  img={skill.img}
                />
              </div>
            ))}
          </div>
        </section>

        {/* ─── CERTIFICATES ─────────────────────────────────── */}
        <section
          id="certificates"
          ref={certSectionRef}
          className="py-28 px-6 md:px-20 lg:px-32"
          style={{ background: "rgba(5,5,10,0.95)" }}
        >
          <div className="section-header text-center mb-16">
            <p
              className="text-sm mb-3 tracking-widest uppercase"
              style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}
            >
              Credentials
            </p>
            <h2 className="section-title gradient-text mb-4">Certificates</h2>
          </div>

          {/* Desktop carousel */}
          <div className="hidden md:flex justify-center">
            <Carousel className="w-10/12 max-w-5xl">
              <CarouselContent className="-ml-4">
                {[certificate1, certificate2, certificate3, certificate4].map(
                  (v, index) => (
                    <CarouselItem
                      key={index}
                      className="cert-card pl-4 basis-1/2 lg:basis-1/3"
                    >
                      <div
                        className="rounded-xl overflow-hidden transition-all duration-300"
                        style={{
                          border: "1px solid rgba(147,51,234,0.25)",
                          boxShadow: "0 0 20px rgba(147,51,234,0.1)",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.boxShadow =
                            "0 0 40px rgba(147,51,234,0.4)";
                          e.currentTarget.style.borderColor =
                            "rgba(147,51,234,0.55)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.boxShadow =
                            "0 0 20px rgba(147,51,234,0.1)";
                          e.currentTarget.style.borderColor =
                            "rgba(147,51,234,0.25)";
                        }}
                      >
                        <NextImage
                          src={v}
                          className="w-full h-full object-cover"
                          alt={`Certificate ${index + 1}`}
                        />
                      </div>
                    </CarouselItem>
                  )
                )}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          {/* Mobile stack */}
          <div className="flex flex-col items-center gap-6 md:hidden">
            {[certificate4, certificate1, certificate2, certificate3].map(
              (v, index) => (
                <div
                  key={index}
                  className="cert-card w-full max-w-sm rounded-xl overflow-hidden"
                  style={{
                    border: "1px solid rgba(147,51,234,0.25)",
                    boxShadow: "0 0 20px rgba(147,51,234,0.1)",
                  }}
                >
                  <NextImage
                    src={v}
                    className="w-full h-full object-cover"
                    alt={`Certificate ${index + 1}`}
                  />
                </div>
              )
            )}
          </div>
        </section>

      </div>
    </div>
  );
}
