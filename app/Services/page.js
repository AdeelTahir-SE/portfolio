export const metadata = {
  title: 'Services - Adeel Tahir Portfolio',
  description: 'Services offered by Adeel Tahir',
};

import { Atom, Triangle, Hexagon, TerminalSquare, LayoutTemplate, Paintbrush, ServerCog, Smartphone, Monitor, Globe, Puzzle, Cpu } from 'lucide-react';

export default function Services() {
  return (
    <div className="min-h-screen bg-white text-black pt-24 pb-16 px-4 sm:px-6 lg:px-8" style={{ fontFamily: 'var(--font-main)' }}>
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center">
            <h2 className="section-title text-5xl font-extrabold uppercase">
              My Services
            </h2>
            <p className="mt-4 text-xl text-gray-600" style={{ fontFamily: 'var(--font-mono)' }}>
              I offer a wide range of web development services to meet your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 animate-in fade-in slide-in-from-bottom-8 duration-700">
            {[
              { title: 'React App', desc: 'Building responsive and modern React applications using the latest technologies.', Icon: Atom },
              { title: 'Next.js App', desc: 'Developing high-performance and SEO-friendly applications using Next.js.', Icon: Triangle },
              { title: 'Node.js Backend Project', desc: 'Developing robust and scalable backend solutions using Node.js.', Icon: Hexagon },
              { title: 'Node.js CLI App', desc: 'Creating command-line interface applications with Node.js.', Icon: TerminalSquare },
              { title: 'Fully Functional App', desc: 'Building fully functional and responsive applications tailored to your needs.', Icon: LayoutTemplate },
              { title: 'Figma to React', desc: 'Converting Figma designs into fully functional React applications.', Icon: Paintbrush },
              { title: 'REST API', desc: 'Designing and implementing RESTful APIs for seamless integration and data exchange.', Icon: ServerCog },
              { title: 'Mobile Apps', desc: 'Cross-platform mobile applications for iOS and Android.', Icon: Smartphone },
              { title: 'Desktop Apps', desc: 'Native and cross-platform desktop applications.', Icon: Monitor },
              { title: 'PWAs', desc: 'Progressive Web Apps that work offline and feel native.', Icon: Globe },
              { title: 'Browser Extensions', desc: 'Custom browser extensions to enhance workflows.', Icon: Puzzle },
              { title: 'Low-level Solutions', desc: 'High-performance system programming and architecture.', Icon: Cpu }
            ].map((service, i) => (
              <div 
                key={i} 
                className="card-bordered bg-white border-2 border-[#e0e0e0] p-8 transition-all duration-300 hover:border-[#c9f31d] hover:-translate-y-2 cursor-pointer flex flex-col items-start group"
              >
                <div className="feature-icon mb-6 bg-[#c9f31d] p-3 rounded-none border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:scale-110 transition-transform">
                  <service.Icon size={32} strokeWidth={2} className="text-[#1a1a1a]" />
                </div>
                <h3 className="text-xl font-bold uppercase mb-4">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed text-sm" style={{ fontFamily: 'var(--font-mono)' }}>
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
  );
}
