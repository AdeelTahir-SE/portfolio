import { getPortfolioData } from '@/lib/dataUtils';

export default function Projects() {
  const { projects } = getPortfolioData();

  return (
    <div className="min-h-screen bg-white text-black pt-24 pb-16 p-8 animate-in fade-in slide-in-from-bottom-8 duration-700" style={{ fontFamily: 'var(--font-main)' }}>
      <div className="max-w-7xl mx-auto">
        <h1 className="section-title text-5xl font-extrabold text-center uppercase mb-16">My Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="card-bordered flex flex-col bg-white border-2 border-[#e0e0e0] shadow-sm hover:shadow-xl hover:border-[#c9f31d] transition-all duration-300 group">
              <div className="h-32 w-full bg-gradient-to-r from-gray-100 to-gray-200 group-hover:from-[#c9f31d] group-hover:to-[#a8d313] transition-colors duration-300 border-b-2 border-black relative">
                 <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold uppercase mb-4 group-hover:text-[#c9f31d] transition-colors">{project.title}</h3>
              <p className="text-gray-700 leading-relaxed mb-6 flex-grow" style={{ fontFamily: 'var(--font-mono)' }}>
                {project.desc}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="bg-gray-100 border border-gray-200 text-black text-xs font-bold px-3 py-1 uppercase" style={{ fontFamily: 'var(--font-mono)' }}>
                    {tech}
                  </span>
                ))}
              </div>
              
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="mt-auto border-2 border-black bg-white hover:bg-[#c9f31d] hover:border-black text-center font-bold py-3 px-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-y-1 hover:translate-x-1 transition-all uppercase">
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
