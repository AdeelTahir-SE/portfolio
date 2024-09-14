"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Typed from "typed.js";
import { useTheme } from "next-themes";
import coder from "@/public/gif3.png"; // Ensure this path is
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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  const { theme } = useTheme();
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Full Stack Developer",
        "MERN Stack Developer",
        "PERN Stack Developer",
        "React Developer",
        "Next.js Developer",
      ],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
    };
    const typed = new Typed(typedRef.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      className={`w-full  flex flex-col items-center justify-center ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex flex-col md:flex-row items-center justify-between border-b-2 p-3 w-full">
        <div className="text-center mb-8 md:mb-0 md:mx-28">
          <h1 className="text-4xl font-bold mb-4">
            Hi, my name is <span className="text-purple-600">Adeel Tahir</span>
          </h1>
          <h2 className="text-2xl">
            a <span ref={typedRef} className="text-purple-600"></span>
          </h2>
        </div>

        <Image
          src={coder}
          alt="Picture of the author"
          width={450}
          height={400}
          className="w-64 h-64 md:w-96 md:h-96 mr-9"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4 text-purple-600 mt-3">
          Projects
        </h1>

        <Carousel className="w-full max-w-sm md:max-w-4xl">
          <CarouselContent className="-ml-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-2xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

<div className="flex flex-col w-full ">
        <h1 className="text-4xl font-bold mb-4 text-purple-600 mt-3 text-center">Skills</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 ">
        <SkillsCard
            title="HTML"
            description="language used in creating websites"
            img={html}
          />
  <SkillsCard
      title="Next.js"
      description="Next.js 14 a framework for creating awesome websites"
      img={css}
    />
<SkillsCard
      title="JavaScript"
      description="Programming language that conforms to the ECMAScript specification"
      img={javascript}
    />
 <SkillsCard
        title="TypeScript"
        description="Typed superset of JavaScript that compiles to plain JavaScript"
        img={typescript}
      />
          <SkillsCard
            title="Node.js"
            description="JavaScript runtime built on Chrome's V8 JavaScript engine"
            img={nodejs}
          />
          <SkillsCard
            title="React.js"
            description="JavaScript library for building user interfaces"
            img={reactjs}
          />
          <SkillsCard
            title="MongoDB"
            description="NoSQL database program"
            img={mongodb}
          />
          <SkillsCard
            title="PostgreSQL"
            description="Open source relational database management system"
            img={postgres}
          />
          <SkillsCard
            title="MySQL"
            description="Open source relational database management system"
            img={mysql}
          />
          {/* <SkillsCard
            title="Prisma ORM"
            description="Next-generation ORM for Node.js and TypeScript"
            img={prismaorm}
          /> */}
          <SkillsCard
            title="Tailwind CSS"
            description="Utility-first CSS framework"
            img={tailwindcss}
          />
          <SkillsCard
            title="Redis"
            description="In-memory data structure store, used as a database, cache, and message broker"
            img={redis}
          />
             <SkillsCard
      title="Express"
      description="Fast, unopinionated, minimalist web framework for Node.js"
      img={express}
    />
    <SkillsCard
      title="Git"
      description="Distributed version-control system for tracking changes in source code"
      img={git}
    />
    <SkillsCard
      title="npm"
      description="Package manager for the JavaScript programming language"
      img={npm}
    />
        </div>
      </div>
    </div>
    </div>
  );
}
