"use client";
import Image from "next/image";
import {  useEffect, useRef } from "react";
import Typed from "typed.js";
import { useTheme } from "next-themes";
import coder from "@/public/gif3.png"; // Ensure this path is correct
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
import certificate2 from "@/public/Certificate2.png"
import certificate1 from "@/public/Certificate1.png"
import certificate3 from "@/public/Certificate3.png"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const projects = [
  {
    title: 'Restaurant application',
    description: 'Utilizes MongoDB, Express.js, React, and Node.js to deliver a seamless user experience for managing food items, user data, and orders.',
    techs: ['React', 'CSS', 'API', 'mongoDB', 'Expressjs', 'Nodejs']
  },
  {
    title: 'BroadCast Server',
    description: 'Built with Node.js, Express, and Socket.IO for seamless communication, enabling live chat functionality and command-line interactions.',
    techs: ['Node.js', 'Express.js', 'commandline', 'chalk', 'Socket.io']
  },
  {
    title: 'Weather-App',
    description: 'Provides real-time weather data and forecasts using React, Redis, Node.js, and Express, with efficient caching for quick retrieval.',
    techs: ['Node.js', 'Express', 'Redis', 'React', 'Tailwindcss']
  },
  {
    title: 'Todo List API',
    description: 'Allows users to manage to-do items with endpoints for CRUD operations, secured using JWT and Prisma for database interactions.',
    techs: ['Node.js', 'Express', 'REST api', 'Postgres', 'Prisma ORM']
  }
  ,
  {
    title: 'See more Projects',
    description: 'For More projects visit Projects PAGE',
    techs: []
  }
];

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
      className={'w-full flex flex-col items-center justify-center pb-32 bg-white text-black dark:bg-black dark:text-white'}
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
          className="w-64 h-64 md:w-96 md:h-80 mr-9"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4 text-purple-600 mt-3">
          Projects
        </h1>
        <p className="text-lg text-gray-700 mb-4 flex-wrap max-w-md m-4">
          Here are some of the latest projects that I have been working on. Each project showcases my skills and dedication to delivering high-quality work.
        </p>

        
<Carousel className="w-full md:max-w-4xl border-b-2 pb-9">
  <CarouselContent className="-ml-1">
    {projects.map((project, index) => (
      <CarouselItem
        key={index}
        className="pl-1 md:basis-1/2 lg:basis-1/3 hover:scale-105 cursor-pointer"
      >
        <div className="p-1">
          <Card className="hover:scale-105 cursor-pointer">
            <CardContent className="flex aspect-square items-center justify-center p-6">
              <div className="dark:bg-gray-800 p-6 rounded-lg shadow-lg bg-white">
                <h2 className="text-2xl font-semibold mb-2 text-purple-600">{project.title}</h2>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techs.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-purple-500 text-white px-2 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
               
              </div>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>


        <div className="flex flex-col w-full border-b-2 pb-4">
          <h1 className="text-4xl font-bold mb-4 text-purple-600 mt-3 text-center">
            Skills
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <SkillsCard
              title="HTML"
              description="Language used in creating websites"
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
              title="Next.js"
              description="Next.js 14 a framework for creating awesome websites"
              img={nextjs}
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

        {/* Certificates Section */}
        <div className="flex flex-col w-full mt-12">
        <div className="flex flex-col w-full mt-12">
  <h1 className="text-4xl font-bold mb-4 text-purple-600 mt-3 text-center">
    Certificates
  </h1>
  <Carousel className="w-full md:max-w-4xl border-b-2 pb-9">
    <CarouselContent className="-ml-1">
      {[certificate1, certificate2, certificate3,certificate1,certificate2,certificate3].map((v, index) => (
        <CarouselItem
          key={index}
          className="pl-1 md:basis-1/2 lg:basis-1/3 hover:scale-105 cursor-pointer"
        >
          <div className="p-1">
            <Card className="hover:scale-105 cursor-pointer">
              <CardContent className="flex  items-center justify-center p-6">
                <Image 
                  src={v} 
                  className="w-full h-full object-cover" // Make the image responsive and cover the container
                  alt={`Certificate ${index + 1}`} // Always good to have an alt attribute for accessibility
                />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
</div>


        </div>
      </div>
    </div>
  );
}
