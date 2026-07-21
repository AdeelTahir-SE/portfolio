'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const [data, setData] = useState({ projects: [], experiences: [] });
  const [loading, setLoading] = useState(true);

  // Form states
  const [proj, setProj] = useState({ title: '', desc: '', tech: '', features: '', liveUrl: '', githubUrl: '' });
  const [exp, setExp] = useState({ role: '', company: '', duration: '', desc: '' });

  const router = useRouter();

  const fetchData = async () => {
    try {
      const pRes = await fetch('/api/projects');
      const eRes = await fetch('/api/experiences');
      const pData = await pRes.json();
      const eData = await eRes.json();
      setData({ projects: pData.projects || [], experiences: eData.experiences || [] });
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddProject = async (e) => {
    e.preventDefault();
    const payload = { ...proj, tech: proj.tech.split(',').map(s => s.trim()) };
    await fetch('/api/projects', { method: 'POST', body: JSON.stringify(payload) });
    setProj({ title: '', desc: '', tech: '', features: '', liveUrl: '', githubUrl: '' });
    fetchData();
  };

  const handleAddExperience = async (e) => {
    e.preventDefault();
    await fetch('/api/experiences', { method: 'POST', body: JSON.stringify(exp) });
    setExp({ role: '', company: '', duration: '', desc: '' });
    fetchData();
  };

  const handleDelete = async (type, id) => {
    await fetch(`/api/${type}?id=${id}`, { method: 'DELETE' });
    fetchData();
  };

  if (loading) return <div className="min-h-screen pt-32 text-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-[#f4f4f0] pt-24 pb-16 px-6 font-main text-[#1a1a1a]">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-black uppercase">Admin Dashboard</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* PROJECTS PANEL */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold uppercase border-b-4 border-[#c9f31d] inline-block pb-1">Manage Projects</h2>
            
            <form onSubmit={handleAddProject} className="card-bordered p-6 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-4">
              <input required type="text" placeholder="Title" value={proj.title} onChange={e=>setProj({...proj, title: e.target.value})} className="border-2 border-black p-2" />
              <textarea required placeholder="Description" value={proj.desc} onChange={e=>setProj({...proj, desc: e.target.value})} className="border-2 border-black p-2" />
              <input required type="text" placeholder="Tech Stack (comma separated)" value={proj.tech} onChange={e=>setProj({...proj, tech: e.target.value})} className="border-2 border-black p-2" />
              <input type="text" placeholder="Features" value={proj.features} onChange={e=>setProj({...proj, features: e.target.value})} className="border-2 border-black p-2" />
              <div className="flex gap-4">
                <input type="text" placeholder="Live URL" value={proj.liveUrl} onChange={e=>setProj({...proj, liveUrl: e.target.value})} className="border-2 border-black p-2 w-full" />
                <input type="text" placeholder="GitHub URL" value={proj.githubUrl} onChange={e=>setProj({...proj, githubUrl: e.target.value})} className="border-2 border-black p-2 w-full" />
              </div>
              <button type="submit" className="bg-[#c9f31d] border-2 border-black font-bold uppercase py-2 hover:bg-[#b8e010]">Add Project</button>
            </form>

            <div className="space-y-4">
              {data.projects.map(p => (
                <div key={p.id} className="card-bordered p-4 bg-white flex justify-between items-center">
                  <div>
                    <h4 className="font-bold">{p.title}</h4>
                    <p className="text-sm text-gray-500 font-mono">{p.tech.join(', ')}</p>
                  </div>
                  <button onClick={() => handleDelete('projects', p.id)} className="bg-red-500 text-white font-bold px-3 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-px hover:shadow-none transition-all">Del</button>
                </div>
              ))}
            </div>
          </div>

          {/* EXPERIENCES PANEL */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold uppercase border-b-4 border-[#c9f31d] inline-block pb-1">Manage Experience</h2>
            
            <form onSubmit={handleAddExperience} className="card-bordered p-6 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-4">
              <input required type="text" placeholder="Role" value={exp.role} onChange={e=>setExp({...exp, role: e.target.value})} className="border-2 border-black p-2" />
              <input required type="text" placeholder="Company" value={exp.company} onChange={e=>setExp({...exp, company: e.target.value})} className="border-2 border-black p-2" />
              <input required type="text" placeholder="Duration (e.g. Jan 2022 - Present)" value={exp.duration} onChange={e=>setExp({...exp, duration: e.target.value})} className="border-2 border-black p-2" />
              <textarea required placeholder="Description" value={exp.desc} onChange={e=>setExp({...exp, desc: e.target.value})} className="border-2 border-black p-2" />
              <button type="submit" className="bg-[#c9f31d] border-2 border-black font-bold uppercase py-2 hover:bg-[#b8e010]">Add Experience</button>
            </form>

            <div className="space-y-4">
              {data.experiences.map(e => (
                <div key={e.id} className="card-bordered p-4 bg-white flex justify-between items-center">
                  <div>
                    <h4 className="font-bold">{e.role}</h4>
                    <p className="text-sm text-gray-500 font-mono">{e.company} | {e.duration}</p>
                  </div>
                  <button onClick={() => handleDelete('experiences', e.id)} className="bg-red-500 text-white font-bold px-3 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-px hover:shadow-none transition-all">Del</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
