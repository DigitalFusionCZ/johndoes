'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    document.title = 'johndoe';
    
    const faviconSvg = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#212529" /><stop offset="100%" stop-color="#E9ECEF" /></linearGradient></defs><circle cx="50" cy="50" r="50" fill="url(#g)" /></svg>`;
    const faviconUrl = `data:image/svg+xml;base64,${btoa(faviconSvg)}`;

    let link = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = faviconUrl;
  }, []);

  return (
    <div className="font-inter antialiased text-[#212529] bg-white">
      <header className="fixed top-0 left-0 w-full bg-white z-50 py-4 border-b border-gray-200">
        <nav className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-xl font-bold text-[#212529]">
            JohnDoe
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#hero" className="hover:text-gray-600 transition-colors duration-200">Hero</a>
            <a href="#about" className="hover:text-gray-600 transition-colors duration-200">About</a>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </nav>
        <div className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
            <button onClick={closeMenu} className="absolute top-6 right-6 focus:outline-none">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <a href="#hero" onClick={closeMenu} className="hover:text-gray-600 transition-colors duration-200">Hero</a>
            <a href="#about" onClick={closeMenu} className="hover:text-gray-600 transition-colors duration-200">About</a>
          </div>
        </div>
      </header>

      <main>
        <section id="hero" className="h-screen flex items-center justify-center text-center px-4 bg-white pt-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-light leading-tight mb-4 text-[#212529]">
              Programuj do umření
            </h1>
            <p className="text-lg md:text-xl text-[#212529]/80">
              Vítejte na osobním portfoliu JohnDoe.
            </p>
          </div>
        </section>

        <section id="about" className="py-20 md:py-32 bg-[#E9ECEF] px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-4xl md:text-5xl font-light mb-8 text-[#212529]">
              O mně
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-[#212529]/80">
              Jsem developer na volné noze a progaramuji v cpp
            </p>
          </div>
        </section>
      </main>

      <footer className="py-8 bg-[#212529] text-white text-center text-sm">
        <div className="container mx-auto px-4">
          Vytvořeno s láskou od <a href="https://digitalfusion.cz" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300">DigitalFusion</a>
        </div>
      </footer>
    </div>
  );
}
