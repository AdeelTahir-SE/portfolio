import React from 'react';
import { getPortfolioData } from '@/lib/dataUtils';

export default function Experience() {
  const { experiences } = getPortfolioData();

  return (
    <div className="min-h-screen bg-white text-black pt-24 pb-16 flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 duration-700" style={{ fontFamily: 'var(--font-main)' }}>
      <div className="container mx-auto p-4 md:p-8 max-w-4xl">
        <h1 className="section-title text-5xl md:text-6xl font-extrabold uppercase mb-16 text-center">My Experience</h1>
        
        <div className="space-y-10 border-l-4 border-[#c9f31d] pl-8 ml-4 md:ml-8 relative">
          {experiences.map((exp, index) => (
            <div key={index} className="card-bordered border-2 border-black p-8 relative shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white hover:-translate-y-1 transition-transform group">
              <div className="absolute -left-[42px] top-8 w-6 h-6 rounded-full bg-[#c9f31d] border-4 border-white group-hover:scale-125 transition-transform"></div>
              <h4 className="text-2xl font-bold uppercase mb-2">{exp.role}</h4>
              <h5 className="text-xl font-bold mb-3">{exp.company}</h5>
              <div className="inline-block text-black bg-[#c9f31d] px-3 py-1 font-bold mb-4 text-sm uppercase" style={{ fontFamily: 'var(--font-mono)' }}>
                {exp.duration}
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                {exp.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
