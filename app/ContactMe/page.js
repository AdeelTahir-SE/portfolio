"use client"
import React, { useState } from 'react';

export default function ContactMe() {
  const [loader, setLoader] = useState(false);
  
  async function handleFormSubmit(event) {
    event.preventDefault();
    setLoader(true);
    const form = event.target;
    const formData = new FormData(form);
  
    try {
      const data = Object.fromEntries(formData.entries());
  
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (res.ok) {
        setLoader(false);
        alert('Message sent successfully!');
        form.reset();
      } else {
        setLoader(false);
        alert('Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while sending the message.');
      setLoader(false);
    }
  }

  return (
    <div className="min-h-screen bg-white text-black pt-24 pb-16 flex items-center justify-center px-4 md:px-8" style={{ fontFamily: 'var(--font-main)' }}>
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        
        {/* Left Side: Contact Info */}
        <div className="space-y-8 mt-4">
          <h2 className="section-title text-5xl md:text-6xl font-extrabold uppercase leading-tight">
            Let's Work<br/><span className="text-black bg-[#c9f31d] px-2">Together</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8" style={{ fontFamily: 'var(--font-mono)' }}>
            I am always open to discussing product design work or partnership opportunities. Let's make something amazing.
          </p>
          
          <div className="space-y-6 text-lg">
            <div className="flex flex-col">
              <span className="font-bold uppercase text-gray-400 text-sm mb-1 tracking-wider">Email</span>
              <a href="mailto:adeeltahir6a@gmail.com" className="font-bold text-2xl hover:text-[#c9f31d] transition-colors">
                adeeltahir6a@gmail.com
              </a>
            </div>
            
            <div className="flex flex-col">
              <span className="font-bold uppercase text-gray-400 text-sm mb-1 tracking-wider">Phone</span>
              <span className="font-bold text-2xl">
                +92 300 1124769
              </span>
            </div>
            
            <div className="flex flex-col">
              <span className="font-bold uppercase text-gray-400 text-sm mb-1 tracking-wider">Location</span>
              <span className="font-bold text-xl">
                Islamabad, NUST
              </span>
            </div>
            
            <div className="flex flex-col">
              <span className="font-bold uppercase text-gray-400 text-sm mb-1 tracking-wider">Availability</span>
              <div className="inline-block bg-black text-[#c9f31d] font-bold px-4 py-2 uppercase mt-1 w-fit border border-black shadow-[4px_4px_0px_0px_rgba(201,243,29,1)]">
                For Freelance & Full-time
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="card-bordered bg-white border-2 border-black p-8 md:p-10 shadow-[8px_8px_0px_0px_rgba(201,243,29,1)]">
          <form onSubmit={handleFormSubmit} method="POST" className="space-y-6">
            
            <div className="space-y-2">
              <label className="block text-black font-bold uppercase tracking-wider text-sm" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white border-2 border-[#e0e0e0] px-4 py-3 outline-none focus:border-[#c9f31d] transition-colors"
                style={{ fontFamily: 'var(--font-mono)' }}
                required
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-black font-bold uppercase tracking-wider text-sm" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white border-2 border-[#e0e0e0] px-4 py-3 outline-none focus:border-[#c9f31d] transition-colors"
                style={{ fontFamily: 'var(--font-mono)' }}
                required
              />
            </div>

            <div className="space-y-2">
              <label className="block text-black font-bold uppercase tracking-wider text-sm" htmlFor="subject">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full bg-white border-2 border-[#e0e0e0] px-4 py-3 outline-none focus:border-[#c9f31d] transition-colors"
                style={{ fontFamily: 'var(--font-mono)' }}
                required
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-black font-bold uppercase tracking-wider text-sm" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full bg-white border-2 border-[#e0e0e0] px-4 py-3 outline-none focus:border-[#c9f31d] transition-colors resize-y"
                style={{ fontFamily: 'var(--font-mono)' }}
                required
              ></textarea>
            </div>
            
            <div className="pt-2 flex flex-col items-center">
              <button
                type="submit"
                className="btn-primary bg-[#c9f31d] text-black border-2 border-black font-extrabold uppercase py-4 px-10 hover:bg-black hover:text-[#c9f31d] transition-colors duration-300 w-full flex justify-center items-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-y-[4px] hover:translate-x-[4px]"
                disabled={loader}
              >
                {loader ? 'Sending...' : 'Send Message'}
              </button>
            </div>
            
            {/* Loading Dots */}
            {loader && (
              <div className="flex flex-row gap-2 mt-4 justify-center">
                <div className="w-3 h-3 rounded-full bg-[#c9f31d] border border-black animate-bounce"></div>
                <div className="w-3 h-3 rounded-full bg-[#c9f31d] border border-black animate-bounce [animation-delay:-.3s]"></div>
                <div className="w-3 h-3 rounded-full bg-[#c9f31d] border border-black animate-bounce [animation-delay:-.5s]"></div>
              </div>
            )}

          </form>
        </div>
        
      </div>
    </div>
  );
}
