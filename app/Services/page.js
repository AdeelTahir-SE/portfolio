import Head from 'next/head';

export default function Services() {
  return (
    <>
      <Head>
        <title>Services - Adeel Tahir Portfolio</title>
        <meta name="description" content="Services offered by Adeel Tahir" />
      </Head>
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

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "React App",
                desc: "Building responsive and modern React applications using the latest technologies."
              },
              {
                title: "Next.js App",
                desc: "Developing high-performance and SEO-friendly applications using Next.js."
              },
              {
                title: "Node.js Backend Project",
                desc: "Developing robust and scalable backend solutions using Node.js."
              },
              {
                title: "Node.js CLI App",
                desc: "Creating command-line interface applications with Node.js."
              },
              {
                title: "Fully Functional App",
                desc: "Building fully functional and responsive applications tailored to your needs."
              },
              {
                title: "Figma to React",
                desc: "Converting Figma designs into fully functional React applications."
              },
              {
                title: "REST API",
                desc: "Designing and implementing RESTful APIs for seamless integration and data exchange."
              }
            ].map((service, i) => (
              <div 
                key={i} 
                className="card-bordered bg-white border-2 border-[#e0e0e0] p-8 transition-all duration-300 hover:border-[#c9f31d] hover:-translate-y-2 cursor-pointer flex flex-col items-start"
              >
                <div className="feature-icon mb-6 bg-[#c9f31d] p-3 rounded-none border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold uppercase mb-4">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'var(--font-mono)' }}>
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
