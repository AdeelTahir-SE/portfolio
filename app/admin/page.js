'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const [data, setData] = useState({ projects: [], experiences: [], messages: [] });
  const [loading, setLoading] = useState(true);

  // Form states
  const [proj, setProj] = useState({ title: '', desc: '', tech: '', features: '', liveUrl: '', githubUrl: '' });
  const [exp, setExp] = useState({ role: '', company: '', duration: '', desc: '' });
  const [settings, setSettings] = useState({ resumeUrl: '' });

  const router = useRouter();

  const fetchData = async () => {
    try {
      const pRes = await fetch('/api/projects');
      const eRes = await fetch('/api/experiences');
      const mRes = await fetch('/api/messages');
      const sRes = await fetch('/api/settings');
      const pData = await pRes.json();
      const eData = await eRes.json();
      const mData = await mRes.json();
      const sData = await sRes.json();
      setData({ 
        projects: pData.projects || [], 
        experiences: eData.experiences || [],
        messages: mData.messages || []
      });
      setSettings(sData.settings || { resumeUrl: '' });
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

  const handleUploadCert = async (e) => {
    e.preventDefault();
    const fileInput = e.target.elements.file;
    if (!fileInput.files[0]) return alert('Select a file first');
    
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);
    
    const res = await fetch('/api/certificates/upload', { method: 'POST', body: formData });
    if (res.ok) {
      alert('Certificate uploaded successfully!');
      e.target.reset();
    } else {
      alert('Failed to upload');
    }
  };

  const handleUpdateSettings = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/settings', { method: 'POST', body: JSON.stringify(settings) });
    if (res.ok) {
      alert('Settings updated successfully!');
      fetchData();
    } else {
      alert('Failed to update settings');
    }
  };

  if (loading) return <div className="min-h-screen pt-32 text-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-[#f4f4f0] pt-24 pb-16 px-6 font-main text-[#1a1a1a]">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-black uppercase">Admin Dashboard</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* SETTINGS PANEL */}
          <div className="space-y-6 lg:col-span-2">
            <h2 className="text-2xl font-bold uppercase border-b-4 border-[#c9f31d] inline-block pb-1">Site Settings</h2>
            <form onSubmit={handleUpdateSettings} className="card-bordered p-6 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-4">
              <div>
                <label className="font-bold uppercase text-sm mb-2 block">Resume PDF Link</label>
                <input type="text" value={settings.resumeUrl || ''} onChange={e => setSettings({...settings, resumeUrl: e.target.value})} className="border-2 border-black p-2 w-full font-mono text-sm" placeholder="https://drive.google.com/..." />
              </div>
              <button type="submit" className="bg-[#c9f31d] border-2 border-black font-bold uppercase py-2 hover:bg-[#b8e010] self-start px-8">Save Settings</button>
            </form>
          </div>

          {/* MESSAGES PANEL */}
          <div className="space-y-6 lg:col-span-2">
            <h2 className="text-2xl font-bold uppercase border-b-4 border-[#c9f31d] inline-block pb-1">Contact Messages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.messages.length === 0 ? <p className="text-gray-500 font-mono">No messages yet.</p> : data.messages.map(m => (
                <div key={m.id} className="card-bordered p-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-lg mb-1">{m.name} <span className="text-sm text-gray-500 font-normal">({m.email})</span></h4>
                    <p className="text-xs font-mono text-[#8aab13] mb-3">{new Date(m.date).toLocaleString()} - {m.subject}</p>
                    <p className="text-gray-700 text-sm mb-4 bg-gray-50 p-3 border border-gray-200">{m.message}</p>
                  </div>
                  <button onClick={() => handleDelete('messages', m.id)} className="bg-red-500 text-white font-bold px-3 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-px hover:shadow-none transition-all self-start">Delete Message</button>
                </div>
              ))}
            </div>
          </div>

          {/* CERTIFICATES PANEL */}
          <div className="space-y-6 lg:col-span-2 mt-8">
            <h2 className="text-2xl font-bold uppercase border-b-4 border-[#c9f31d] inline-block pb-1">Upload Certificate</h2>
            <form onSubmit={handleUploadCert} className="card-bordered p-6 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row gap-4 items-center">
              <input type="file" name="file" accept="image/*,.pdf" className="border-2 border-black p-2 w-full md:w-auto flex-grow bg-gray-50" />
              <button type="submit" className="bg-[#c9f31d] border-2 border-black font-bold uppercase py-2 px-8 hover:bg-[#b8e010] whitespace-nowrap w-full md:w-auto text-center">Upload</button>
            </form>
          </div>
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
