'use client';

import { useState, useEffect } from 'react';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ProjectsSection from '@/components/sections/ProjectSection';
import SkillsSection from '@/components/sections/SkillsSection';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  // Wait for client-side mount to avoid hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Mouse tracking for cursor glow
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  // Theme colors
  const theme = {
    bg: isDarkTheme ? '#030305' : '#7c3aed',
    glowColor: isDarkTheme ? 'rgba(139,92,246,0.35)' : 'rgba(255,255,255,0.4)',
    glowColorInner: isDarkTheme ? 'rgba(167,139,250,0.5)' : 'rgba(255,255,255,0.6)',
  };

  return (
    <div
      className="min-h-screen text-white overflow-x-hidden transition-colors duration-700"
      style={{ backgroundColor: theme.bg }}
    >
      {/* Cursor Glow - Only render on client after mount */}
      {isMounted && (
        <>
          <div
            className="fixed rounded-full pointer-events-none z-0 hidden md:block"
            style={{
              width: '600px',
              height: '600px',
              background: `radial-gradient(circle, ${theme.glowColor} 0%, transparent 70%)`,
              left: mousePos.x - 300,
              top: mousePos.y - 300,
              filter: 'blur(20px)',
            }}
          />
          <div
            className="fixed rounded-full pointer-events-none z-0 hidden md:block"
            style={{
              width: '200px',
              height: '200px',
              background: `radial-gradient(circle, ${theme.glowColorInner} 0%, transparent 70%)`,
              left: mousePos.x - 100,
              top: mousePos.y - 100,
            }}
          />
        </>
      )}

      {/* Animated Floating Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient blurs */}
        <div
          className={`absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[800px] ${
            isDarkTheme
              ? 'bg-gradient-to-b from-violet-600/20 via-purple-500/10 to-transparent'
              : 'bg-gradient-to-b from-white/10 via-indigo-300/10 to-transparent'
          } blur-3xl transition-colors duration-700`}
        />
        <div
          className={`absolute bottom-0 left-0 w-[700px] h-[500px] ${
            isDarkTheme
              ? 'bg-gradient-to-tr from-indigo-600/15 to-transparent'
              : 'bg-gradient-to-tr from-white/10 to-transparent'
          } blur-3xl transition-colors duration-700`}
        />

        {/* Animated orbs */}
        <div
          className={`absolute top-[15%] left-[20%] w-32 h-32 rounded-full ${
            isDarkTheme ? 'bg-violet-500/30' : 'bg-white/20'
          } blur-2xl animate-float1`}
        />
        <div
          className={`absolute top-[25%] right-[15%] w-24 h-24 rounded-full ${
            isDarkTheme ? 'bg-cyan-500/25' : 'bg-indigo-200/25'
          } blur-2xl animate-float2`}
        />
        <div
          className={`absolute bottom-[30%] left-[10%] w-40 h-40 rounded-full ${
            isDarkTheme ? 'bg-fuchsia-500/20' : 'bg-pink-200/20'
          } blur-3xl animate-float3`}
        />
        <div
          className={`absolute top-[50%] right-[25%] w-20 h-20 rounded-full ${
            isDarkTheme ? 'bg-indigo-500/35' : 'bg-white/30'
          } blur-xl animate-float4`}
        />
        <div
          className={`absolute bottom-[20%] right-[20%] w-36 h-36 rounded-full ${
            isDarkTheme ? 'bg-purple-500/25' : 'bg-indigo-300/20'
          } blur-2xl animate-float5`}
        />
        <div
          className={`absolute top-[70%] left-[30%] w-16 h-16 rounded-full ${
            isDarkTheme ? 'bg-teal-500/30' : 'bg-white/25'
          } blur-xl animate-float2`}
          style={{ animationDelay: '-5s' }}
        />
        <div
          className={`absolute top-[10%] left-[60%] w-12 h-12 rounded-full ${
            isDarkTheme ? 'bg-pink-500/40' : 'bg-yellow-200/30'
          } blur-lg animate-float4`}
          style={{ animationDelay: '-8s' }}
        />

        {/* Small bright dots */}
        <div
          className={`absolute top-[20%] left-[35%] w-2 h-2 rounded-full ${
            isDarkTheme ? 'bg-violet-400' : 'bg-white'
          } animate-pulse`}
        />
        <div
          className={`absolute top-[40%] right-[30%] w-1.5 h-1.5 rounded-full ${
            isDarkTheme ? 'bg-cyan-400' : 'bg-white'
          } animate-pulse`}
          style={{ animationDelay: '1s' }}
        />
        <div
          className={`absolute bottom-[35%] left-[25%] w-2 h-2 rounded-full ${
            isDarkTheme ? 'bg-pink-400' : 'bg-white'
          } animate-pulse`}
          style={{ animationDelay: '2s' }}
        />
        <div
          className={`absolute top-[60%] right-[40%] w-1 h-1 rounded-full ${
            isDarkTheme ? 'bg-emerald-400' : 'bg-white'
          } animate-pulse`}
          style={{ animationDelay: '0.5s' }}
        />
      </div>

      {/* Navigation */}
      <NavBar isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />

      {/* Main Content */}
      <main>
        <Hero isDarkTheme={isDarkTheme} />
        <ProjectsSection isDarkTheme={isDarkTheme} />
        <SkillsSection isDarkTheme={isDarkTheme} />
        <AboutSection isDarkTheme={isDarkTheme} />
        <ContactSection isDarkTheme={isDarkTheme} />
      </main>

      {/* Footer */}
      <Footer isDarkTheme={isDarkTheme} />
    </div>
  );
}