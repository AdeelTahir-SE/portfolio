import React from 'react';

export default function Experience() {
  const experiences = [
    {
      title: '"Kryptosphere" React App - Client Project',
      date: 'Completed in 2024',
      description: 'Developed a comprehensive React application tailored to client specifications, showcasing expertise in modern front-end development practices and client-oriented solutions.',
    },
    {
      title: 'Web Development Projects',
      date: 'Ongoing',
      description: 'Engaged in various web development projects, focusing on both front-end and back-end technologies. Leveraged frameworks such as React and Node.js to build scalable and efficient web applications.',
    },
    {
      title: 'Continuous Learning and Professional Development',
      date: 'Ongoing',
      description: 'Committed to staying current with industry trends through continuous learning. Actively experimenting with emerging technologies, contributing to open-source projects, and applying best practices in web development.',
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black pt-24 pb-16 flex flex-col items-center" style={{ fontFamily: 'var(--font-main)' }}>
      <div className="container mx-auto p-4 md:p-8 max-w-4xl">
        <h1 className="section-title text-5xl md:text-6xl font-extrabold uppercase mb-16 text-center">My Experience</h1>
        
        <div className="space-y-10 border-l-4 border-[#c9f31d] pl-8 ml-4 md:ml-8 relative">
          {experiences.map((exp, index) => (
            <div key={index} className="card-bordered border-2 border-black p-8 relative shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white hover:-translate-y-1 transition-transform">
              <div className="absolute -left-[42px] top-8 w-6 h-6 rounded-full bg-[#c9f31d] border-4 border-white"></div>
              <h4 className="text-2xl font-bold uppercase mb-2">{exp.title}</h4>
              <div className="inline-block text-black bg-[#c9f31d] px-3 py-1 font-bold mb-4 text-sm uppercase" style={{ fontFamily: 'var(--font-mono)' }}>
                {exp.date}
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
