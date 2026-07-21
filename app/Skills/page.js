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
                { name: 'HTML', Icon: FileCode },
                { name: 'CSS', Icon: Paintbrush },
                { name: 'JavaScript', Icon: Braces },
                { name: 'TypeScript', Icon: FileType },
                { name: 'React', Icon: Atom },
                { name: 'Next.js', Icon: Triangle },
                { name: 'Tailwind', Icon: Wind }
              ].map(s => (
                <div key={s.name} className="flex items-center gap-2 p-2.5 rounded-lg border border-gray-100 hover:border-[#c9f31d] hover:bg-[#c9f31d08] transition-all group">
                  <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-md bg-gray-50 group-hover:bg-[#c9f31d] group-hover:text-[#1a1a1a] transition-colors text-gray-600">
                    <s.Icon size={18} />
                  </div>
                  <span className="font-mono text-xs font-bold truncate">{s.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* BACKEND */}
          <div className="p-6 border-2 border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-xl mb-5 border-b-4 border-[#c9f31d] inline-block pb-1">BACKEND</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: 'Node.js', Icon: Hexagon },
                { name: 'Express', Icon: Server },
                { name: 'FastAPI', Icon: Zap },
                { name: 'Flask', Icon: Code },
                { name: 'Rust', Icon: Wrench },
                { name: 'Axum', Icon: Activity },
                { name: 'MongoDB', Icon: Database },
                { name: 'PostgreSQL', Icon: Database },
                { name: 'MySQL', Icon: Database },
                { name: 'Redis', Icon: Zap }
              ].map(s => (
                <div key={s.name} className="flex items-center gap-2 p-2.5 rounded-lg border border-gray-100 hover:border-[#c9f31d] hover:bg-[#c9f31d08] transition-all group">
                  <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-md bg-gray-50 group-hover:bg-[#c9f31d] group-hover:text-[#1a1a1a] transition-colors text-gray-600">
                    <s.Icon size={18} />
                  </div>
                  <span className="font-mono text-xs font-bold truncate">{s.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* MESSAGE QUEUES & STREAMING */}
          <div className="p-6 border-2 border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-xl mb-5 border-b-4 border-[#c9f31d] inline-block pb-1">QUEUES & STREAMING</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: 'Kafka', Icon: Radio },
                { name: 'RabbitMQ', Icon: Workflow },
                { name: 'Flink', Icon: Activity },
                { name: 'BullMQ', Icon: ListTodo }
              ].map(s => (
                <div key={s.name} className="flex items-center gap-2 p-2.5 rounded-lg border border-gray-100 hover:border-[#c9f31d] hover:bg-[#c9f31d08] transition-all group">
                  <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-md bg-gray-50 group-hover:bg-[#c9f31d] group-hover:text-[#1a1a1a] transition-colors text-gray-600">
                    <s.Icon size={18} />
                  </div>
                  <span className="font-mono text-xs font-bold truncate">{s.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* TOOLS */}
          <div className="p-6 border-2 border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-xl mb-5 border-b-4 border-[#c9f31d] inline-block pb-1">TOOLS</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: 'Git', Icon: GitBranch },
                { name: 'npm', Icon: Package },
                { name: 'Docker', Icon: Container },
                { name: 'GitHub', Icon: Github }
              ].map(s => (
                <div key={s.name} className="flex items-center gap-2 p-2.5 rounded-lg border border-gray-100 hover:border-[#c9f31d] hover:bg-[#c9f31d08] transition-all group">
                  <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-md bg-gray-50 group-hover:bg-[#c9f31d] group-hover:text-[#1a1a1a] transition-colors text-gray-600">
                    <s.Icon size={18} />
                  </div>
                  <span className="font-mono text-xs font-bold truncate">{s.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
