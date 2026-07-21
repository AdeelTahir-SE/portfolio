"use client";
import { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  Check,
  Zap,
  Code,
  Smartphone,
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

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const typedEl = useRef(null);
  const heroRef = useRef(null);
  const featureBarRef = useRef(null);
  const skillsRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  useEffect(() => {
    // Typed.js initialization
    const typed = new Typed(typedEl.current, {
      strings: [
        `const developer = {
  name: 'Adeel Tahir',
  role: 'Full Stack Developer',
  skills: ['Next.js', 'React', 'Node.js', 'Tailwind'],
  passion: 'Building scalable web applications',
  isAvailable: true
};

// Ready to build something amazing?`
      ],
      typeSpeed: 40,
      backSpeed: 50,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });

    // GSAP Animations
    const sections = [heroRef, featureBarRef, skillsRef, servicesRef, projectsRef, contactRef];
    
    sections.forEach((section) => {
      if(section.current) {
        gsap.fromTo(section.current, 
          { y: 50, opacity: 0 }, 
          { 
            y: 0, 
            opacity: 1, 
            duration: 1, 
            ease: "power3.out",
            scrollTrigger: {
              trigger: section.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  const oldProjects = [
    { title: 'Restaurant Application', tech: 'React, Node.js', desc: 'A full-stack restaurant management system.' },
    { title: 'BroadCast Server', tech: 'Node.js, WebSockets', desc: 'Real-time broadcasting server for high throughput.' },
    { title: 'Weather App', tech: 'JavaScript, OpenWeather API', desc: 'A dynamic weather forecasting application.' },
    { title: 'Todo List API', tech: 'Express, MongoDB', desc: 'RESTful API for managing tasks efficiently.' }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section ref={heroRef} className="relative w-full max-w-7xl mx-auto px-6 py-24 lg:py-32 flex flex-col lg:flex-row items-center justify-between gap-12 bg-white">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-4 h-4 bg-[#c9f31d] rounded-sm animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-6 h-6 bg-gray-900 rounded-sm transform rotate-45 opacity-20"></div>
        
        {/* Left Side */}
        <div className="lg:w-1/2 flex flex-col items-start z-10">
          <h1 className="text-5xl lg:text-7xl font-bold font-main leading-tight mb-6">
            I BUILD <span className="text-[#c9f31d] bg-gray-900 px-2">FAST,</span><br/>
            MODERN & SCALABLE<br/>
            WEB APPLICATIONS.
          </h1>
          <p className="text-2xl font-semibold mb-4 text-gray-700">CLEAN CODE. GREAT EXPERIENCES.</p>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            I&apos;m a Next.js developer who loves turning ideas into real-world products that solve problems and create impact.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-10">
            <a href="#projects" className="btn-outline flex items-center gap-2 border-2 border-gray-900 px-6 py-3 font-bold hover:bg-[#c9f31d] hover:border-[#c9f31d] transition-colors">
              VIEW MY WORK <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn-outline flex items-center gap-2 border-2 border-gray-900 px-6 py-3 font-bold hover:bg-gray-900 hover:text-white transition-colors">
              LET&apos;S CONNECT ↗
            </a>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="font-bold text-sm uppercase tracking-wider">FIND ME ON</span>
            <div className="flex gap-4">
              <a href="#" className="text-2xl text-gray-600 hover:text-gray-900 transition-colors"><Github size={24} /></a>
              <a href="#" className="text-2xl text-gray-600 hover:text-[#0077b5] transition-colors"><Linkedin size={24} /></a>
              <a href="#" className="text-2xl text-gray-600 hover:text-[#1da1f2] transition-colors"><Twitter size={24} /></a>
            </div>
          </div>
        </div>

        {/* Right Side - Code Editor Mockup */}
        <div className="lg:w-1/2 w-full z-10">
          <div className="code-editor bg-[#1a1a1a] rounded-lg shadow-2xl overflow-hidden border border-gray-800">
            <div className="code-editor-header flex items-center gap-2 px-4 py-3 bg-gray-900 border-b border-gray-800">
              <div className="w-3 h-3 rounded-full bg-red-500 code-dot"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 code-dot"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 code-dot"></div>
              <span className="ml-2 text-xs text-gray-400 font-mono">developer.js</span>
            </div>
            <div className="p-6 h-80 overflow-hidden text-sm lg:text-base font-mono text-gray-300">
              <span ref={typedEl} style={{ whiteSpace: 'pre' }}></span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BOTTOM BAR */}
      <section ref={featureBarRef} className="w-full bg-[#1a1a1a] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col gap-3">
            <Zap size={28} className="text-[#c9f31d]" />
            <h3 className="font-bold text-xl">PERFORMANCE</h3>
            <p className="text-gray-400 text-sm">Built with Next.js for blazing-fast performance.</p>
          </div>
          <div className="flex flex-col gap-3">
            <Code size={28} className="text-[#c9f31d]" />
            <h3 className="font-bold text-xl">CLEAN CODE</h3>
            <p className="text-gray-400 text-sm">Writing maintainable, scalable and efficient code.</p>
          </div>
          <div className="flex flex-col gap-3">
            <Smartphone size={28} className="text-[#c9f31d]" />
            <h3 className="font-bold text-xl">RESPONSIVE</h3>
            <p className="text-gray-400 text-sm">Creating seamless experience across all devices.</p>
          </div>
          <div className="flex flex-col gap-3">
            <Wrench size={28} className="text-[#c9f31d]" />
            <h3 className="font-bold text-xl">MODERN STACK</h3>
            <p className="text-gray-400 text-sm">Using the latest tools to build future-ready products.</p>
          </div>
        </div>
      </section>

      {/* 3. MY SKILLS SECTION */}
      <section id="skills" ref={skillsRef} className="w-full max-w-7xl mx-auto px-6 py-24 bg-white">
        <h2 className="section-title text-4xl font-black text-center mb-16 font-main tracking-tight uppercase">MY SKILLS</h2>
        
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
        <div className="text-center">
          <button className="btn-outline border-2 border-gray-900 px-8 py-3 font-bold hover:bg-gray-900 hover:text-white transition-colors uppercase">
            VIEW ALL SKILLS <ArrowRight size={16} className="inline ml-2" />
          </button>
        </div>
      </section>

      {/* 4. WHAT I DO SECTION */}
      <section ref={servicesRef} className="w-full bg-[#f7f7f7] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-4xl font-black text-center mb-16 font-main tracking-tight uppercase">WHAT I DO</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { t: 'WEB DESIGN', d: 'Modern, responsive and user-focused designs that convert visitors.' },
              { t: 'FULL STACK DEVELOPMENT', d: 'End-to-end web applications using MERN stack and more.' },
              { t: 'PERFORMANCE OPTIMIZATION', d: 'Speed up your application for better SEO and user experience.' },
              { t: 'DEPLOYMENT & DEVOPS', d: 'Deploy scalable apps on cloud platforms like AWS, Vercel & more.' }
            ].map((srv, idx) => (
              <div key={idx} className="bg-white p-8 border-2 border-transparent hover:border-[#c9f31d] rounded-xl shadow-sm hover:shadow-lg transition-all group">
                <Zap size={36} className="text-[#c9f31d] mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-2xl mb-4 font-main uppercase">{srv.t}</h3>
                <p className="text-gray-600 mb-6">{srv.d}</p>
                <a href="#" className="text-[#a4c715] font-bold flex items-center gap-2 hover:text-gray-900 transition-colors uppercase text-sm">
                  READ MORE <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FEATURED PROJECTS SECTION */}
      <section id="projects" ref={projectsRef} className="w-full max-w-7xl mx-auto px-6 py-24 bg-white">
        <h2 className="section-title text-4xl font-black text-center mb-16 font-main tracking-tight uppercase">FEATURED PROJECTS</h2>
        
        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          {/* Card 1 */}
          <div className="flex-1 card-bordered border-2 border-gray-200 rounded-xl overflow-hidden shadow-md group hover:shadow-xl transition-shadow flex flex-col">
            <div className="h-64 bg-gradient-to-br from-green-400 to-teal-600 relative p-6 flex items-end justify-center">
               <div className="w-[80%] h-[80%] bg-white rounded-t-lg shadow-2xl relative overflow-hidden flex items-center justify-center border-t-4 border-gray-800">
                  <span className="text-gray-400 font-bold tracking-widest uppercase">E-Commerce Platform</span>
               </div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold mb-3">E-Commerce Platform</h3>
              <p className="text-gray-600 mb-4 flex-1">
                Full-featured e-commerce platform with admin dashboard, payments and analytics.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['React', 'Node.js', 'MongoDB', 'Tailwind'].map(t => (
                  <span key={t} className="tech-badge bg-gray-100 text-xs font-mono px-3 py-1 rounded-full font-bold">{t}</span>
                ))}
              </div>
              <div className="text-sm text-gray-500 mb-6">
                <strong>Features:</strong> User Authentication, Product Management, Stripe Integration, Admin Dashboard.
              </div>
              <div className="flex gap-4">
                <button className="flex-1 bg-[#c9f31d] text-gray-900 font-bold py-3 rounded hover:bg-[#b0d618] transition-colors flex items-center justify-center gap-2">
                  LIVE DEMO <ArrowRight size={14} />
                </button>
                <button className="flex-1 border-2 border-gray-900 text-gray-900 font-bold py-3 rounded hover:bg-gray-900 hover:text-white transition-colors flex items-center justify-center gap-2">
                  VIEW CODE <Github size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex-1 card-bordered border-2 border-gray-200 rounded-xl overflow-hidden shadow-md group hover:shadow-xl transition-shadow flex flex-col">
            <div className="h-64 bg-gradient-to-br from-blue-500 to-purple-600 relative p-6 flex items-end justify-center">
               <div className="w-[80%] h-[80%] bg-white rounded-t-lg shadow-2xl relative overflow-hidden flex items-center justify-center border-t-4 border-gray-800">
                  <span className="text-gray-400 font-bold tracking-widest uppercase">Task Management App</span>
               </div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold mb-3">Task Management App</h3>
              <p className="text-gray-600 mb-4 flex-1">
                Collaborative task management platform with real-time updates and analytics.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Next.js', 'TypeScript', 'Firebase', 'Tailwind'].map(t => (
                  <span key={t} className="tech-badge bg-gray-100 text-xs font-mono px-3 py-1 rounded-full font-bold">{t}</span>
                ))}
              </div>
              <div className="text-sm text-gray-500 mb-6">
                <strong>Features:</strong> Real-time Updates, Team Collaboration, Kanban Board, Analytics Dashboard.
              </div>
              <div className="flex gap-4">
                <button className="flex-1 bg-[#c9f31d] text-gray-900 font-bold py-3 rounded hover:bg-[#b0d618] transition-colors flex items-center justify-center gap-2">
                  LIVE DEMO <ArrowRight size={14} />
                </button>
                <button className="flex-1 border-2 border-gray-900 text-gray-900 font-bold py-3 rounded hover:bg-gray-900 hover:text-white transition-colors flex items-center justify-center gap-2">
                  VIEW CODE <Github size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Other Existing Projects Grid */}
        <h3 className="text-2xl font-bold mb-8 text-center uppercase tracking-wider">Other Projects</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {oldProjects.map((proj, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-[#c9f31d] transition-colors">
              <h4 className="font-bold text-lg mb-2">{proj.title}</h4>
              <p className="text-xs font-mono text-[#8aab13] mb-3">{proj.tech}</p>
              <p className="text-sm text-gray-600 mb-4">{proj.desc}</p>
              <a href="#" className="text-xs font-bold uppercase flex items-center gap-1 hover:text-[#c9f31d]">View Details <ArrowRight size={12} /></a>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CONTACT SECTION */}
      <section id="contact" ref={contactRef} className="w-full max-w-7xl mx-auto px-6 py-24 bg-white relative">
        {/* Decorative background shape */}
        <div className="absolute top-20 right-0 w-64 h-64 bg-gray-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 pointer-events-none"></div>
        
        <h2 className="section-title text-4xl font-black text-center mb-16 font-main tracking-tight uppercase">LET&apos;S WORK TOGETHER</h2>
        
        <div className="flex flex-col lg:flex-row gap-16 relative z-10">
          {/* Contact Info */}
          <div className="lg:w-1/3 flex flex-col gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gray-100 text-gray-900 rounded-full flex items-center justify-center text-xl shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm text-gray-500 mb-1">EMAIL</h4>
                <p className="font-semibold text-lg">adeel.tahir@example.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gray-100 text-gray-900 rounded-full flex items-center justify-center text-xl shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm text-gray-500 mb-1">PHONE</h4>
                <p className="font-semibold text-lg">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gray-100 text-gray-900 rounded-full flex items-center justify-center text-xl shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm text-gray-500 mb-1">LOCATION</h4>
                <p className="font-semibold text-lg">Lahore, Pakistan</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#c9f31d] text-gray-900 rounded-full flex items-center justify-center text-xl shrink-0">
                <Check size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm text-gray-500 mb-1">AVAILABLE</h4>
                <p className="font-semibold text-lg">For Freelance & Full-time</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3 bg-gray-50 p-8 md:p-12 rounded-2xl border border-gray-100 shadow-sm relative">
            <form onSubmit={handleContactSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-700">Your Name</label>
                  <input 
                    type="text" 
                    required 
                    className="p-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#c9f31d] focus:ring-2 focus:ring-[#c9f31d] focus:ring-opacity-50 transition-all"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-700">Your Email</label>
                  <input 
                    type="email" 
                    required 
                    className="p-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#c9f31d] focus:ring-2 focus:ring-[#c9f31d] focus:ring-opacity-50 transition-all"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-700">Subject</label>
                <input 
                  type="text" 
                  required 
                  className="p-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#c9f31d] focus:ring-2 focus:ring-[#c9f31d] focus:ring-opacity-50 transition-all"
                  value={formData.subject}
                  onChange={e => setFormData({...formData, subject: e.target.value})}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-700">Your Message</label>
                <textarea 
                  required 
                  rows="5"
                  className="p-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-[#c9f31d] focus:ring-2 focus:ring-[#c9f31d] focus:ring-opacity-50 transition-all resize-none"
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="bg-[#c9f31d] text-gray-900 font-bold py-4 rounded-lg hover:bg-[#b0d618] transition-colors flex items-center justify-center gap-2 mt-2"
                disabled={formStatus === 'sending'}
              >
                {formStatus === 'sending' ? 'SENDING...' : 'SEND MESSAGE'} <Check size={16} />
              </button>
              
              {formStatus === 'success' && <p className="text-green-600 font-bold text-center mt-2">Message sent successfully!</p>}
              {formStatus === 'error' && <p className="text-red-600 font-bold text-center mt-2">Failed to send message. Please try again.</p>}
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}
