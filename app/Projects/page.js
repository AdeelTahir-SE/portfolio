import React from 'react';

const projects = [
  {
    title: 'FilmFlex',
    description: 'FilmFlex allows movie reservations for cinema. This application is built using Next.js with a focus on API development and design, utilizing Shadcn UI for a sleek interface.',
    link: 'https://github.com/AdeelTahir-SE/FilmFlex',
    techs: ['Next.js', 'API Development', 'Shadcn UI', 'React']
  },
  {
    title: 'Restaurant application',
    description: 'Tools Used in Foodie Haven 🛠️  Foodie Haven utilizes a stack of powerful technologies to deliver a seamless user experience:  MongoDB: Provides a scalable NoSQL database solution for storing and managing food items, user data, and orders.  Express.js: Serves as the backend web applica',
    link: 'https://github.com/AdeelTahir-SE/Restaurant-Application',
    techs: ['React', 'CSS', 'API','mongoDB','Expressjs','Nodejs']
  },
  {
    title: 'BroadCast Server',
    description: ' A broadcast Server application  : built with Node.js, Express, and Socket.IO for seamless communication. The server uses Express to handle HTTP requests and Socket.IO to enable live chat functionality, while the client-side leverages yargs for command-line interactions and readline for user input. Messages are managed and synchronized between the .',
    link: 'https://github.com/AdeelTahir-SE/BroadcastServer',
    techs: ['Node.js','Express.js','commandline', 'chalk', 'Socket.io']
  },
  {
    title: 'Weather-App',
    description: 'A weather app built with React, Redis, Node.js, and Express that provides real-time weather data for today and forecasts for the entire week. It uses Redis for efficient caching and quick retrieval of weather information.',
    link: 'https://github.com/AdeelTahir-SE/Weather-App',
    techs: ['Node.js', 'Express', ,'Redis','React','Tailwindcss']
  }
  ,
  {
    title: 'Todo List api',
    description: 'The To-Do List API allows users to manage their to-do items. It includes endpoints for user registration, login, and CRUD operations on to-do items. Users can create, update, delete, and list their to-dos. The API is secured using JWT for authentication, and Prisma is used for database interactions.',
    link: 'https://github.com/AdeelTahir-SE/TODO_List_API',
    techs: ['Node.js', 'Express', ,'REST api','Postgres','Prisma ORM']
  }
  ,
  {
    title: 'Personal Blogs',
    description: 'This personal blog application leverages REST API tools and technologies such as Node.js, Express, and React to deliver a seamless blogging experience. Built with a focus on robust server-side management and an intuitive client-side interface, it enables users to create, edit, and manage blog posts effortlessly.',
    link: 'https://github.com/AdeelTahir-SE/Personal-Blogs',
    techs: ['Node.js', 'Express', ,'REST api','React','Prisma ORM','MySql','Tailwindcss']
  }
  ,
  {
    title: 'MarkoConvert',
    description: 'A web-based application that allows users to write, preview, and save Markdown notes. Additionally, users can drag and drop existing Markdown files to view and edit them.',
    link: 'https://github.com/AdeelTahir-SE/MarkoConvert',
    techs: ['Node.js', 'Express', ,'REST api','React','Prisma ORM','tailwindcss','PrismaORM','Postgres']
  },
  {
    title: 'MarkoConvert',
    description: 'A web-based application that allows users to write, preview, and save Markdown notes. Additionally, users can drag and drop existing Markdown files to view and edit them.',
    link: 'https://github.com/AdeelTahir-SE/MarkoConvert',
    techs: ['Node.js', 'Express', ,'REST api','React','Prisma ORM','tailwindcss','PrismaORM','Postgres']
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-8">
  <h1 className="text-4xl font-bold text-center mb-8 text-purple-600">My Projects</h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {projects.map((project, index) => (
      <div key={index} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-2 text-purple-600">{project.title}</h2>
        <p className="mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techs.map((tech, techIndex) => (
            <span key={techIndex} className="bg-purple-500 text-white px-2 py-1 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gray-300 dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-500 text-gray-900 dark:text-white font-semibold py-1 px-4 rounded"
        >
          View Project
        </a>
      </div>
    ))}
  </div>
</div>

  );
}
