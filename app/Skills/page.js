import React from 'react';
import { 
  Github, 
  ArrowRight, 
  Zap,
  Code,
  Wrench,
  FileCode,
  Paintbrush,
  Braces,
  Atom,
  Triangle,
  Wind,
  Hexagon,
  Server,
  Database,
  GitBranch,
  Package,
  FileType,
  Container,
  Workflow,
  Radio,
  Activity,
  ListTodo
} from 'lucide-react';

export default function Skills() {
  return (
    <div className="min-h-screen bg-white text-black pt-24 pb-16 flex flex-col items-center" style={{ fontFamily: 'var(--font-main)' }}>
      <div className="w-full max-w-7xl mx-auto px-6 py-12">
        <h1 className="section-title text-5xl md:text-6xl font-extrabold uppercase mb-16 text-center">My Skills</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* FRONTEND */}
          <div className="p-6 border-2 border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-xl mb-5 border-b-4 border-[#c9f31d] inline-block pb-1">FRONTEND</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: 'HTML', cls: 'devicon-html5-plain colored' },
                { name: 'CSS', cls: 'devicon-css3-plain colored' },
                { name: 'JavaScript', cls: 'devicon-javascript-plain colored' },
                { name: 'TypeScript', cls: 'devicon-typescript-plain colored' },
                { name: 'React', cls: 'devicon-react-original colored' },
                { name: 'Next.js', cls: 'devicon-nextjs-plain' },
                { name: 'Tailwind', cls: 'devicon-tailwindcss-original colored' }
              ].map(s => (
                <div key={s.name} className="flex items-center gap-2 p-2.5 rounded-lg border border-gray-100 hover:border-[#c9f31d] hover:bg-[#c9f31d08] transition-all group bg-white">
                  <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-md bg-gray-50 group-hover:bg-white transition-colors border border-transparent group-hover:border-gray-200 shadow-sm">
                    <i className={`${s.cls} text-[22px]`}></i>
                  </div>
                  <span className="font-mono text-xs font-bold truncate group-hover:text-black transition-colors">{s.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* BACKEND */}
          <div className="p-6 border-2 border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-xl mb-5 border-b-4 border-[#c9f31d] inline-block pb-1">BACKEND</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: 'Node.js', cls: 'devicon-nodejs-plain colored' },
                { name: 'Express', cls: 'devicon-express-original colored' },
                { name: 'FastAPI', cls: 'devicon-fastapi-plain colored' },
                { name: 'Flask', cls: 'devicon-flask-original colored' },
                { name: 'Rust', cls: 'devicon-rust-plain text-black' },
                { name: 'MongoDB', cls: 'devicon-mongodb-plain colored' },
                { name: 'PostgreSQL', cls: 'devicon-postgresql-plain colored' },
                { name: 'MySQL', cls: 'devicon-mysql-plain colored' },
                { name: 'Redis', cls: 'devicon-redis-plain colored' }
              ].map(s => (
                <div key={s.name} className="flex items-center gap-2 p-2.5 rounded-lg border border-gray-100 hover:border-[#c9f31d] hover:bg-[#c9f31d08] transition-all group bg-white">
                  <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-md bg-gray-50 group-hover:bg-white transition-colors border border-transparent group-hover:border-gray-200 shadow-sm">
                    <i className={`${s.cls} text-[22px]`}></i>
                  </div>
                  <span className="font-mono text-xs font-bold truncate group-hover:text-black transition-colors">{s.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* MESSAGE QUEUES & STREAMING */}
          <div className="p-6 border-2 border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-xl mb-5 border-b-4 border-[#c9f31d] inline-block pb-1">QUEUES & STREAMING</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: 'Kafka', cls: 'devicon-apachekafka-original colored' },
                { name: 'RabbitMQ', cls: 'devicon-rabbitmq-original colored' },
                { name: 'Flink', cls: 'devicon-apache-plain colored' },
                { name: 'BullMQ', cls: 'devicon-redis-plain colored' }
              ].map(s => (
                <div key={s.name} className="flex items-center gap-2 p-2.5 rounded-lg border border-gray-100 hover:border-[#c9f31d] hover:bg-[#c9f31d08] transition-all group bg-white">
                  <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-md bg-gray-50 group-hover:bg-white transition-colors border border-transparent group-hover:border-gray-200 shadow-sm">
                    <i className={`${s.cls} text-[22px]`}></i>
                  </div>
                  <span className="font-mono text-xs font-bold truncate group-hover:text-black transition-colors">{s.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* TOOLS */}
          <div className="p-6 border-2 border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-xl mb-5 border-b-4 border-[#c9f31d] inline-block pb-1">TOOLS</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: 'Git', cls: 'devicon-git-plain colored' },
                { name: 'npm', cls: 'devicon-npm-original-wordmark colored' },
                { name: 'Docker', cls: 'devicon-docker-plain colored' },
                { name: 'GitHub', cls: 'devicon-github-original colored' }
              ].map(s => (
                <div key={s.name} className="flex items-center gap-2 p-2.5 rounded-lg border border-gray-100 hover:border-[#c9f31d] hover:bg-[#c9f31d08] transition-all group bg-white">
                  <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-md bg-gray-50 group-hover:bg-white transition-colors border border-transparent group-hover:border-gray-200 shadow-sm">
                    <i className={`${s.cls} text-[22px]`}></i>
                  </div>
                  <span className="font-mono text-xs font-bold truncate group-hover:text-black transition-colors">{s.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
