// pages/aboutme.js
import Image from "next/image";
import profilePic from "@/public/Profilepicture.png"; // Ensure this path is correct

export default function AboutMe() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col items-center">
      <div className="container mx-auto p-4 md:p-8">
        <div className="flex flex-col md:flex-row items-center md:items-start mb-8">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden mb-4 md:mb-0 md:mr-8">
            <Image
              src={profilePic}
              alt="Profile Picture"
              width={192}
              height={192}
              className="object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-extrabold mb-2">Adeel Tahir</h1>
            <h2 className="text-2xl text-purple-600 mb-4">
              Full Stack Developer
            </h2>
            <p className="text-lg mb-4">
              I am a passionate Full Stack Developer with experience in building
              web applications using modern technologies like React, Next.js,
              Node.js, and more. I love to create efficient and scalable
              solutions that provide a great user experience.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-extrabold mb-4 text-purple-600">
              Skills
            </h3>
            <ul className="list-disc list-inside space-y-2 text-lg  grid-cols-2">
              <li>JavaScript</li>
              <li>Typescript</li>
              <li>React.js</li>
              <li>Next.js</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>PostgreSQL</li>
              <li>HTML & CSS</li>
              <li>Tailwind CSS</li>
              <li>Git & GitHub</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
  <h3 className="text-3xl font-extrabold mb-4 text-purple-400">
    Bio
  </h3>
  <p className="text-lg text-gray-800 dark:text-gray-200">
    I am <span className="font-semibold text-purple-400">passionate about web development</span>, focusing on creating <span className="font-semibold text-purple-400">innovative</span> and <span className="font-semibold text-purple-400">high-quality web applications</span>. My expertise spans both <span className="font-semibold text-purple-400">front-end</span> and <span className="font-semibold text-purple-400">back-end development</span>, where I strive to deliver <span className="font-semibold text-purple-400">effective solutions</span> and continuously <span className="font-semibold text-purple-400">enhance my skills</span>.
  </p>
  <p className="text-lg text-gray-800 dark:text-gray-200 mt-4">
    Beyond my professional endeavors, I have a keen interest in <span className="font-semibold text-purple-400">exploring emerging technologies</span>, <span className="font-semibold text-purple-400">reading industry literature</span>. This commitment to <span className="font-semibold text-purple-400">personal and professional growth</span> drives me to remain at the <span className="font-semibold text-purple-400">cutting edge</span> of the tech industry.
  </p>
</div>




          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-3xl font-extrabold mb-4 text-purple-600">
  Experience
</h3>
<ul className="list-none list-inside space-y-4 text-lg">
  <li>
    <div className="font-semibold text-purple-400">
      "Kryptosphere" React App - Client Project
    </div>
    <div className="text-sm text-gray-600 dark:text-gray-400">
      Completed in 2024
    </div>
    <p className="text-base">
      Developed a comprehensive React application tailored to client specifications, showcasing expertise in modern front-end development practices and client-oriented solutions.
    </p>
  </li>
  <li>
    <div className="font-semibold text-purple-400">
      Web Development Projects
    </div>
    <div className="text-sm text-gray-600 dark:text-gray-400">
      Ongoing
    </div>
    <p className="text-base">
      Engaged in various web development projects, focusing on both front-end and back-end technologies. Leveraged frameworks such as React and Node.js to build scalable and efficient web applications.
    </p>
  </li>
  <li>
    <div className="font-semibold text-purple-400">
      Continuous Learning and Professional Development
    </div>
    <div className="text-sm text-gray-600 dark:text-gray-400">
      Ongoing
    </div>
    <p className="text-base">
      Committed to staying current with industry trends through continuous learning. Actively experimenting with emerging technologies, contributing to open-source projects, and applying best practices in web development.
    </p>
  </li>
</ul>

          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-extrabold mb-4 text-purple-600">
              Hobbies
            </h3>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Developing Innovative Projects</li>
              <li>Continuous Learning and Skill Enhancement</li>
              <li>Exploring Emerging Technologies</li>
              <li>Contributing to Open Source Projects</li>
              <li>Experimenting with New Programming Languages</li>
              <li>Attending Tech Meetups and Conferences</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg col-span-1 md:col-span-2 ">
            <h3 className="text-3xl font-extrabold mb-4 text-purple-600">
              Education
            </h3>
            <ul className="list-none list-inside  text-lg grid grid-cols-1 md:grid-cols-2 gap-4">
  <li>
    <div className="font-semibold text-purple-400">
      F.Sc Pre-Engineering - Punjab College
    </div>
    <div className="text-sm text-gray-600 dark:text-gray-400">
      2019 - 2021
    </div>
    <p className="text-base">
      Focused on foundational engineering subjects including Mathematics, Physics, and Chemistry.
    </p>
  </li>
  <li>
    <div className="font-semibold text-purple-400">
      Bachelors Degree in Software Engineering - NUST
    </div>
    <div className="text-sm text-gray-600 dark:text-gray-400">
      2023 - 2027 (expected)
    </div>
    <p className="text-base">
      In-depth study of software development, algorithms, data structures, and system design.
    </p>
  </li>
  <li>
    <div className="font-semibold text-purple-400">
      Full Stack Developer v3 - Frontend Masters
    </div>
    <div className="text-sm text-gray-600 dark:text-gray-400">
      Completed in 2024
    </div>
    <p className="text-base">
      Comprehensive training on full stack development including frontend and backend technologies.
    </p>
  </li>
  <li>
    <div className="font-semibold text-purple-400">
      Node.js API Design - Frontend Masters
    </div>
    <div className="text-sm text-gray-600 dark:text-gray-400">
      Completed in 2024
    </div>
    <p className="text-base">
      Focused on designing and building robust APIs using Node.js.
    </p>
  </li>
  <li>
    <div className="font-semibold text-purple-400">
      Node.js v3 - Frontend Masters
    </div>
    <div className="text-sm text-gray-600 dark:text-gray-400">
      Completed in 2024
    </div>
    <p className="text-base">
      Advanced concepts and best practices in Node.js development.
    </p>
  </li>
</ul>

          </div>
        </div>
      </div>
    </div>
  );
}
