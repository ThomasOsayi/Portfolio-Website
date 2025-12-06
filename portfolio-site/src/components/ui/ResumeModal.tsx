'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkTheme: boolean;
}

export default function ResumeModal({ isOpen, onClose, isDarkTheme }: ResumeModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    // Focus close button when modal opens
    closeButtonRef.current?.focus();

    // Handle escape key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    // Prevent body scroll
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !isMounted) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2
            id="resume-modal-title"
            className="text-2xl font-bold font-display text-white"
          >
            My Resume
          </h2>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-xl text-white"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        {/* Resume Preview Container - Scrollable */}
        <div
          className={`relative flex-1 rounded-2xl overflow-auto border-4 ${
            isDarkTheme ? 'border-violet-500/50' : 'border-white/50'
          } shadow-2xl shadow-violet-500/20 bg-white`}
        >
          {/* Resume Image Preview */}
          <Image
            src="/resume-preview.png"
            alt="Thomas Osayi Resume"
            width={800}
            height={1035}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Download Button */}
        <div className="mt-6 flex justify-center">
          <a
            href="/resume.pdf"
            download="Thomas_Osayi_Resume.pdf"
            className={`group px-8 py-4 rounded-full font-semibold ${
              isDarkTheme
                ? 'bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:via-purple-500 hover:to-indigo-500 hover:shadow-violet-500/30'
                : 'bg-white text-violet-600 hover:shadow-white/30'
            } transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3 font-body text-white`}
          >
            <span>Download PDF</span>
            <span className="group-hover:translate-y-0.5 transition-transform">↓</span>
          </a>
        </div>
      </div>
    </div>
  );
}
