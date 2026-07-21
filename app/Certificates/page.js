import React from 'react';

// Use an API call for Server Components to ensure fresh data in dev, or just read the fs directly.
// We'll fetch from the API we just created.

async function fetchCertificates() {
  try {
    // Determine base URL dynamically (for SSR)
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/certificates`, { cache: 'no-store' });
    if (!res.ok) return [];
    const data = await res.json();
    return data.certificates || [];
  } catch (e) {
    return [];
  }
}

export const metadata = {
  title: 'Certificates - Adeel Tahir',
  description: 'Certifications and achievements',
};

export default async function Certificates() {
  const certificates = await fetchCertificates();

  return (
    <div className="min-h-screen bg-white text-black pt-24 pb-16 px-4 sm:px-6 lg:px-8 animate-in fade-in slide-in-from-bottom-8 duration-700" style={{ fontFamily: 'var(--font-main)' }}>
      <div className="max-w-7xl mx-auto space-y-12">
        
        <div className="text-center mb-16">
          <h1 className="section-title text-5xl font-extrabold uppercase">
            Certifications
          </h1>
          <p className="mt-4 text-xl text-gray-600" style={{ fontFamily: 'var(--font-mono)' }}>
            Professional achievements and ongoing learning.
          </p>
        </div>

        {certificates.length === 0 ? (
          <div className="text-center text-gray-500 font-mono py-12 border-4 border-dashed border-gray-200">
            <p>No certificates found. Add images to `public/certificates/` to display them here.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((certUrl, i) => (
              <div key={i} className="card-bordered bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all group">
                <div className="w-full h-64 relative bg-gray-100 overflow-hidden border-2 border-black flex items-center justify-center">
                   {certUrl.endsWith('.pdf') ? (
                     <div className="text-center">
                       <span className="font-bold uppercase tracking-widest">PDF Document</span>
                       <br/>
                       <a href={certUrl} target="_blank" rel="noreferrer" className="text-[#8aab13] hover:underline mt-2 inline-block">View File</a>
                     </div>
                   ) : (
                     <img src={certUrl} alt={`Certificate ${i+1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                   )}
                </div>
                <div className="mt-4 flex justify-between items-center">
                   <h3 className="font-bold uppercase truncate">Certificate {i+1}</h3>
                   <a href={certUrl} target="_blank" rel="noreferrer" className="bg-[#c9f31d] border border-black px-3 py-1 text-xs font-bold uppercase hover:bg-black hover:text-[#c9f31d] transition-colors">Open</a>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
