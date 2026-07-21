'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password })
    });
    
    if (res.ok) {
      router.push('/admin');
      router.refresh();
    } else {
      setError('Invalid password');
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f4f0] flex items-center justify-center pt-20" style={{ fontFamily: 'var(--font-main)' }}>
      <div className="card-bordered p-8 w-full max-w-md shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white border-2 border-black">
        <h1 className="text-3xl font-black uppercase mb-6 text-center tracking-tight">Admin Login</h1>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-bold uppercase mb-2">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full border-2 border-black p-3 focus:outline-none focus:border-[#c9f31d] font-mono"
              placeholder="Enter admin password"
            />
          </div>
          {error && <p className="text-red-500 font-bold text-sm">{error}</p>}
          <button type="submit" className="bg-[#c9f31d] text-black border-2 border-black font-black uppercase py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-y-1 hover:translate-x-1 transition-all mt-4">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
