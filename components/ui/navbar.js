'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Download, Menu, Code2 } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/AboutMe' },
  { label: 'Skills', href: '/Skills' },
  { label: 'Projects', href: '/Projects' },
  { label: 'Experience', href: '/Experience' },
  { label: 'Services', href: '/Services' },
  { label: 'Certificates', href: '/Certificates' },
  { label: 'Contact', href: '/ContactMe' }
];

export default function Navbar({ resumeUrl = "/Adeel_Tahir_Resume.pdf" }) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b-2 ${scrolled ? 'py-3 border-black shadow-[0_4px_0_0_rgba(201,243,29,1)]' : 'py-5 border-transparent shadow-none'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        
        {/* LEFT: Logo area */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="bg-[#c9f31d] text-[#1a1a1a] p-2 rounded flex items-center justify-center transition-transform group-hover:rotate-12">
            <Code2 size={24} strokeWidth={2.5} />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-bold text-[#1a1a1a] text-xl tracking-tight" style={{ fontFamily: 'var(--font-main)' }}>ADEEL TAHIR</span>
            <span className="text-gray-500 text-[10px] font-semibold tracking-widest mt-1" style={{ fontFamily: 'var(--font-mono)' }}>NEXT.JS DEVELOPER</span>
          </div>
        </Link>

        {/* CENTER: Nav links (Desktop) */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href || (pathname === '/' && link.href === '/');
            return (
              <Link 
                key={index} 
                href={link.href}
                className={`text-sm font-bold tracking-wider uppercase transition-colors hover:text-[#c9f31d] ${isActive ? 'bg-[#c9f31d] text-[#1a1a1a] px-3 py-1 rounded' : 'text-[#1a1a1a]'}`}
                style={{ fontFamily: 'var(--font-main)' }}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        {/* RIGHT: Download CV (Desktop) */}
        <div className="hidden md:block">
          <a 
            href={resumeUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 bg-[#c9f31d] text-[#1a1a1a] border-2 border-black font-bold py-2 px-5 transition-all duration-300 uppercase text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-y-[4px] hover:translate-x-[4px]"
            style={{ fontFamily: 'var(--font-main)' }}
          >
            Download CV
            <Download size={18} strokeWidth={2.5} />
          </a>
        </div>

        {/* Mobile: Hamburger menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="text-[#1a1a1a] p-2 focus:outline-none">
                <Menu size={28} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#1a1a1a] border-[#333] text-white">
              <SheetHeader>
                <SheetTitle className="text-left flex items-center gap-3 border-b border-[#333] pb-6 mt-4 group">
                  <div className="bg-[#c9f31d] text-[#1a1a1a] p-2 rounded flex items-center justify-center">
                    <Code2 size={24} strokeWidth={2.5} />
                  </div>
                  <div className="flex flex-col leading-none">
                    <span className="font-bold text-white text-xl tracking-tight" style={{ fontFamily: 'var(--font-main)' }}>ADEEL TAHIR</span>
                    <span className="text-[#c9f31d] text-[10px] font-semibold tracking-widest mt-1" style={{ fontFamily: 'var(--font-mono)' }}>NEXT.JS DEVELOPER</span>
                  </div>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link, index) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link 
                      key={index} 
                      href={link.href}
                      className={`text-lg font-bold tracking-wider uppercase transition-colors hover:text-[#c9f31d] ${isActive ? 'text-[#c9f31d]' : 'text-white'}`}
                      style={{ fontFamily: 'var(--font-main)' }}
                    >
                      {link.label}
                    </Link>
                  )
                })}
                <div className="mt-8 pt-6 border-t border-[#333]">
                  <a 
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex justify-center items-center gap-2 bg-[#c9f31d] text-[#1a1a1a] border-2 border-black font-bold py-3 px-5 transition-all duration-300 uppercase text-sm w-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-y-[4px] hover:translate-x-[4px]"
                    style={{ fontFamily: 'var(--font-main)' }}
                  >
                    Download CV
                    <Download size={18} strokeWidth={2.5} />
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
