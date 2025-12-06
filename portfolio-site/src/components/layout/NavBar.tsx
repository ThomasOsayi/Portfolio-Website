'use client';

import { useEffect, useState } from 'react';

interface NavBarProps {
  isDarkTheme: boolean;
  setIsDarkTheme: (value: boolean) => void;
}

export default function NavBar({ isDarkTheme, setIsDarkTheme }: NavBarProps) {
  const [activeNav, setActiveNav] = useState('home');

  const theme = {
    textSubtle: isDarkTheme ? 'text-gray-400' : 'text-white/70',
    border: isDarkTheme ? 'border-white/[0.1]' : 'border-white/[0.2]',
  };

  const navItems = ['Home', 'Work', 'About', 'Contact'];

  const scrollToSection = (section: string) => {
    setActiveNav(section.toLowerCase());
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Update active nav on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.toLowerCase());
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveNav(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-5">
      <div className="max-w-6xl mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div
            className={`w-11 h-11 rounded-xl ${
              isDarkTheme
                ? 'bg-gradient-to-br from-violet-500 via-purple-500 to-indigo-600 shadow-violet-500/40'
                : 'bg-white shadow-white/30'
            } flex items-center justify-center font-bold text-sm shadow-lg font-display ${
              isDarkTheme ? 'text-white' : 'text-violet-600'
            }`}
          >
            TO
          </div>
        </div>

        {/* Nav Links - Centered */}
        <div
          className={`hidden md:flex items-center gap-1 p-1.5 rounded-full absolute left-1/2 -translate-x-1/2 ${
            isDarkTheme ? 'bg-white/[0.05]' : 'bg-white/[0.1]'
          } border ${theme.border} backdrop-blur-2xl`}
        >
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 font-body ${
                activeNav === item.toLowerCase()
                  ? `${
                      isDarkTheme
                        ? 'bg-gradient-to-r from-violet-500/20 to-indigo-500/20 border-violet-500/30'
                        : 'bg-white/20 border-white/40'
                    } text-white border`
                  : `${theme.textSubtle} hover:text-white`
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Right Side: Theme Toggle + CTA */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={() => setIsDarkTheme(!isDarkTheme)}
            className={`w-11 h-11 rounded-full ${
              isDarkTheme ? 'bg-white/10 hover:bg-white/20' : 'bg-white/20 hover:bg-white/30'
            } border ${theme.border} flex items-center justify-center transition-all duration-300 hover:scale-110`}
            aria-label="Toggle theme"
          >
            {isDarkTheme ? '☀️' : '🌙'}
          </button>

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection('Contact')}
            className={`px-6 py-3 rounded-full text-sm font-semibold ${
              isDarkTheme
                ? 'bg-white text-black hover:bg-gray-100'
                : 'bg-white text-violet-600 hover:bg-gray-100'
            } transition-all duration-300 hover:scale-105 hover:shadow-xl font-body`}
          >
            Let's Talk
          </button>
        </div>
      </div>
    </nav>
  );
}