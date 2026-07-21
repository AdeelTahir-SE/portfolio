export default function AboutMe() {
  return (
    <div className="min-h-screen bg-white text-black pt-24 flex flex-col items-center" style={{ fontFamily: 'var(--font-main)' }}>
      <div className="container mx-auto p-4 md:p-8 max-w-6xl">
        
        {/* Hero Area */}
        <div className="flex flex-col items-center md:items-start mb-16 gap-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="text-center md:text-left flex flex-col justify-center h-full pt-4">
            <h1 className="text-5xl md:text-6xl font-extrabold uppercase mb-2">Adeel Tahir</h1>
            <h2 className="text-3xl uppercase font-bold text-[#c9f31d] mb-6 tracking-wide">
              Full Stack Developer
            </h2>
            <p className="text-xl max-w-2xl" style={{ fontFamily: 'var(--font-mono)' }}>
              I am a passionate Full Stack Developer with experience in building
              web applications using modern technologies like React, Next.js,
              Node.js, and more. I love to create efficient and scalable
              solutions that provide a great user experience.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Bio Section */}
          <div className="lg:col-span-2 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 fill-mode-both">
            <h3 className="section-title text-4xl font-extrabold uppercase mb-6">Bio</h3>
            <div className="card-bordered border-2 border-black p-8 text-lg space-y-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white">
              <p>
                I am <span className="font-bold bg-[#c9f31d] px-1">passionate about web development</span>, focusing on creating <span className="font-bold bg-[#c9f31d] px-1">innovative</span> and <span className="font-bold bg-[#c9f31d] px-1">high-quality web applications</span>. My expertise spans both <span className="font-bold bg-[#c9f31d] px-1">front-end</span> and <span className="font-bold bg-[#c9f31d] px-1">back-end development</span>, where I strive to deliver <span className="font-bold bg-[#c9f31d] px-1">effective solutions</span> and continuously <span className="font-bold bg-[#c9f31d] px-1">enhance my skills</span>.
              </p>
              <p>
                Beyond my professional endeavors, I have a keen interest in <span className="font-bold bg-[#c9f31d] px-1">exploring emerging technologies</span> and <span className="font-bold bg-[#c9f31d] px-1">reading industry literature</span>. This commitment to <span className="font-bold bg-[#c9f31d] px-1">personal and professional growth</span> drives me to remain at the <span className="font-bold bg-[#c9f31d] px-1">cutting edge</span> of the tech industry.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-both">
            <h3 className="section-title text-4xl font-extrabold uppercase mb-6">Skills</h3>
            <div className="card-bordered border-2 border-black p-8 grid grid-cols-2 gap-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white">
              {[
                "JavaScript", "TypeScript", "React.js", "Next.js", 
                "Node.js", "Express.js", "MongoDB", "PostgreSQL", 
                "HTML & CSS", "Tailwind CSS", "Git & GitHub"
              ].map(skill => (
                <div key={skill} className="border-2 border-gray-200 p-2 text-center font-bold uppercase text-sm" style={{ fontFamily: 'var(--font-mono)' }}>
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="lg:col-span-3 mt-4">
            <h3 className="section-title text-4xl font-extrabold uppercase mb-6">Experience</h3>
            <div className="space-y-6 border-l-4 border-[#c9f31d] pl-6 ml-4">
              <div className="card-bordered border-2 border-black p-6 relative shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white">
                <div className="absolute -left-9 top-6 w-5 h-5 rounded-full bg-[#c9f31d] border-4 border-white"></div>
                <h4 className="text-2xl font-bold uppercase mb-1">&quot;Kryptosphere&quot; React App - Client Project</h4>
                <div className="text-gray-500 font-bold mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Completed in 2024</div>
                <p>Developed a comprehensive React application tailored to client specifications, showcasing expertise in modern front-end development practices and client-oriented solutions.</p>
              </div>
              <div className="card-bordered border-2 border-black p-6 relative shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white">
                <div className="absolute -left-9 top-6 w-5 h-5 rounded-full bg-[#c9f31d] border-4 border-white"></div>
                <h4 className="text-2xl font-bold uppercase mb-1">Web Development Projects</h4>
                <div className="text-gray-500 font-bold mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Ongoing</div>
                <p>Engaged in various web development projects, focusing on both front-end and back-end technologies. Leveraged frameworks such as React and Node.js to build scalable and efficient web applications.</p>
              </div>
              <div className="card-bordered border-2 border-black p-6 relative shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white">
                <div className="absolute -left-9 top-6 w-5 h-5 rounded-full bg-[#c9f31d] border-4 border-white"></div>
                <h4 className="text-2xl font-bold uppercase mb-1">Continuous Learning and Professional Development</h4>
                <div className="text-gray-500 font-bold mb-4" style={{ fontFamily: 'var(--font-mono)' }}>Ongoing</div>
                <p>Committed to staying current with industry trends through continuous learning. Actively experimenting with emerging technologies, contributing to open-source projects, and applying best practices in web development.</p>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="lg:col-span-3 mt-4">
            <h3 className="section-title text-4xl font-extrabold uppercase mb-6">Education & Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="card-bordered border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white">
                <h4 className="text-xl font-bold uppercase mb-1">Bachelors Degree in Software Engineering - NUST</h4>
                <div className="text-black bg-[#c9f31d] inline-block px-2 font-bold mb-3 text-sm" style={{ fontFamily: 'var(--font-mono)' }}>2023 - 2027 (Expected)</div>
                <p className="text-sm mt-2">In-depth study of software development, algorithms, data structures, and system design.</p>
              </div>
              <div className="card-bordered border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white">
                <h4 className="text-xl font-bold uppercase mb-1">F.Sc Pre-Engineering - Punjab College</h4>
                <div className="text-black bg-[#c9f31d] inline-block px-2 font-bold mb-3 text-sm" style={{ fontFamily: 'var(--font-mono)' }}>2019 - 2021</div>
                <p className="text-sm mt-2">Focused on foundational engineering subjects including Mathematics, Physics, and Chemistry.</p>
              </div>
              <div className="card-bordered border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white">
                <h4 className="text-xl font-bold uppercase mb-1">Full Stack Developer v3 - Frontend Masters</h4>
                <div className="text-black bg-[#c9f31d] inline-block px-2 font-bold mb-3 text-sm" style={{ fontFamily: 'var(--font-mono)' }}>Completed in 2024</div>
                <p className="text-sm mt-2">Comprehensive training on full stack development including frontend and backend technologies.</p>
              </div>
              <div className="card-bordered border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white">
                <h4 className="text-xl font-bold uppercase mb-1">Node.js API Design - Frontend Masters</h4>
                <div className="text-black bg-[#c9f31d] inline-block px-2 font-bold mb-3 text-sm" style={{ fontFamily: 'var(--font-mono)' }}>Completed in 2024</div>
                <p className="text-sm mt-2">Focused on designing and building robust APIs using Node.js.</p>
              </div>
              <div className="card-bordered border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white">
                <h4 className="text-xl font-bold uppercase mb-1">Node.js v3 - Frontend Masters</h4>
                <div className="text-black bg-[#c9f31d] inline-block px-2 font-bold mb-3 text-sm" style={{ fontFamily: 'var(--font-mono)' }}>Completed in 2024</div>
                <p className="text-sm mt-2">Advanced concepts and best practices in Node.js development.</p>
              </div>
              <div className="card-bordered border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white">
                <h4 className="text-xl font-bold uppercase mb-1">Algorithms Course - Primegen</h4>
                <div className="text-black bg-[#c9f31d] inline-block px-2 font-bold mb-3 text-sm" style={{ fontFamily: 'var(--font-mono)' }}>Completed in 2024</div>
                <p className="text-sm mt-2">Covered essential topics such as Time & Space Complexity, Trees, Graphs, Sorting, and more.</p>
              </div>
            </div>
          </div>

          {/* Hobbies Section */}
          <div className="lg:col-span-3 mt-4 mb-16">
            <h3 className="section-title text-4xl font-extrabold uppercase mb-6">Hobbies</h3>
            <div className="flex flex-wrap gap-4">
              {[
                "Developing Innovative Projects", 
                "Continuous Learning and Skill Enhancement", 
                "Exploring Emerging Technologies", 
                "Contributing to Open Source Projects", 
                "Experimenting with New Programming Languages", 
                "Attending Tech Meetups and Conferences"
              ].map(hobby => (
                <div key={hobby} className="border-2 border-black bg-white hover:bg-[#c9f31d] transition-colors px-4 py-2 rounded-full font-bold uppercase text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  {hobby}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
