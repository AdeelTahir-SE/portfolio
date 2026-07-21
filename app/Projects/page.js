import React from 'react';

const projects = [
  {
    title: 'FilmFlex',
    description: 'FilmFlex allows movie reservations for cinema. This application is built using Next.js with a focus on API development and design, utilizing Shadcn UI for a sleek interface.',
    link: 'https://github.com/AdeelTahir-SE/FilmFlex',
    techs: ['Next.js', 'API Development', 'Shadcn UI', 'React']
  },
  {
    title: 'Restaurant Application',
    description: 'Foodie Haven utilizes a stack of powerful technologies to deliver a seamless user experience. MongoDB for scalable data, and Express.js serving as the backend web application.',
    link: 'https://github.com/AdeelTahir-SE/Restaurant-Application',
    techs: ['React', 'CSS', 'API','MongoDB','Express.js','Node.js']
  },
  {
    title: 'BroadCast Server',
    description: 'A broadcast Server application built with Node.js, Express, and Socket.IO for seamless communication. Handles HTTP requests and live chat functionality efficiently.',
    link: 'https://github.com/AdeelTahir-SE/BroadcastServer',
    techs: ['Node.js','Express.js','Command Line', 'Chalk', 'Socket.io']
  },
  {
    title: 'Weather-App',
    description: 'A weather app built with React, Redis, Node.js, and Express that provides real-time weather data for today and forecasts for the entire week, with Redis for caching.',
    link: 'https://github.com/AdeelTahir-SE/Weather-App',
    techs: ['Node.js', 'Express', 'Redis', 'React', 'Tailwind CSS']
  },
  {
    title: 'Todo List API',
    description: 'The To-Do List API allows users to manage items. Includes endpoints for registration, login, and CRUD operations. Secured with JWT and utilizes Prisma ORM.',
    link: 'https://github.com/AdeelTahir-SE/TODO_List_API',
    techs: ['Node.js', 'Express', 'REST API', 'PostgreSQL', 'Prisma ORM']
  },
  {
    title: 'Personal Blogs',
    description: 'A personal blog application leveraging Node.js, Express, and React to deliver a seamless blogging experience, robust server-side management, and intuitive UI.',
    link: 'https://github.com/AdeelTahir-SE/Personal-Blogs',
    techs: ['Node.js', 'Express', 'REST API', 'React', 'Prisma ORM', 'MySQL', 'Tailwind CSS']
  },
  {
    title: 'MarkoConvert',
    description: 'A web-based application that allows users to write, preview, and save Markdown notes. Users can drag and drop existing files to view and edit them.',
    link: 'https://github.com/AdeelTahir-SE/MarkoConvert',
    techs: ['Node.js', 'Express', 'REST API', 'React', 'Prisma ORM', 'Tailwind CSS', 'PostgreSQL']
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-white text-black pt-24 pb-16 p-8" style={{ fontFamily: 'var(--font-main)' }}>
      <div className="max-w-7xl mx-auto">
        <h1 className="section-title text-5xl font-extrabold text-center uppercase mb-16">My Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="card-bordered flex flex-col bg-white border-2 border-[#e0e0e0] shadow-sm hover:shadow-xl hover:border-[#c9f31d] transition-all duration-300 group">
              <div className="h-32 w-full bg-gradient-to-r from-gray-100 to-gray-200 group-hover:from-[#c9f31d] group-hover:to-[#a8d313] transition-colors duration-300 border-b-2 border-black relative">
                 <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold uppercase mb-3">{project.title}</h2>
                <p className="text-gray-600 mb-6 flex-grow" style={{ fontFamily: 'var(--font-mono)' }}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techs.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-badge bg-black text-white px-3 py-1 text-xs font-bold uppercase tracking-wider border border-transparent">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline mt-auto inline-block bg-white text-black border-2 border-black font-bold uppercase py-3 px-6 text-center hover:bg-[#c9f31d] transition-colors duration-300 w-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px]"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
