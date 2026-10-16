import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { PageBackground } from './components/PageBackground';
import { Header } from './components/Header';
import { Hero } from './sections/Hero';
import { SelectedProjects } from './sections/SelectedProjects';
import { Skills } from './sections/Skills';
import { Process } from './sections/Process';
import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';

export default function App() {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0B0C10] text-[#C5C6C7] flex flex-col font-sans selection:bg-[#66FCF1]/20 selection:text-[#66FCF1]">
      <PageBackground />
      <Header />
      <main id="main-content" className="relative z-10 flex-grow">
        <Hero />
        <SelectedProjects />
        <Skills />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
