// src/components/ui/ImageLightbox.tsx

'use client';

import { useEffect, useCallback, useState } from 'react';
import Image from 'next/image';

interface ImageLightboxProps {
  images: string[];
  initialIndex?: number;
  alt?: string;
  onClose: () => void;
}

export default function ImageLightbox({ 
  images, 
  initialIndex = 0, 
  alt = 'Project preview',
  onClose 
}: ImageLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isLoading, setIsLoading] = useState(true);

  const hasMultiple = images.length > 1;

  const goToNext = useCallback(() => {
    if (hasMultiple) {
      setIsLoading(true);
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }
  }, [hasMultiple, images.length]);

  const goToPrev = useCallback(() => {
    if (hasMultiple) {
      setIsLoading(true);
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  }, [hasMultiple, images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowRight':
          goToNext();
          break;
        case 'ArrowLeft':
          goToPrev();
          break;
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, goToNext, goToPrev]);

  return (
    <div 
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-xl"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200 text-white z-10 hover:scale-110 group"
        aria-label="Close lightbox"
      >
        <svg 
          className="w-6 h-6 group-hover:rotate-90 transition-transform duration-200" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Image counter */}
      {hasMultiple && (
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
          <span className="text-white/80 text-sm font-mono">
            {currentIndex + 1} / {images.length}
          </span>
        </div>
      )}

      {/* Previous button */}
      {hasMultiple && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            goToPrev();
          }}
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200 text-white hover:scale-110 group"
          aria-label="Previous image"
        >
          <svg 
            className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Next button */}
      {hasMultiple && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            goToNext();
          }}
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200 text-white hover:scale-110 group"
          aria-label="Next image"
        >
          <svg 
            className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Image container */}
      <div 
        className="relative max-w-[90vw] max-h-[85vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Loading spinner */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-white/20 border-t-white/80 rounded-full animate-spin" />
          </div>
        )}
        
        <Image
          src={images[currentIndex]}
          alt={`${alt} ${currentIndex + 1}`}
          width={1920}
          height={1080}
          className={`max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg shadow-2xl transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={() => setIsLoading(false)}
          priority
        />
      </div>

      {/* Thumbnail strip (for 3+ images) */}
      {images.length > 2 && (
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 p-2 rounded-xl bg-black/50 backdrop-blur-sm border border-white/10">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                setIsLoading(true);
                setCurrentIndex(index);
              }}
              className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden transition-all duration-200 ${
                index === currentIndex 
                  ? 'ring-2 ring-white ring-offset-2 ring-offset-black/50 scale-110' 
                  : 'opacity-50 hover:opacity-80'
              }`}
            >
              <Image
                src={img}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Keyboard hint */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 hidden sm:flex items-center gap-3 text-white/40 text-xs font-mono">
        {hasMultiple && (
          <>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-white/10 border border-white/20">←</kbd>
              <kbd className="px-1.5 py-0.5 rounded bg-white/10 border border-white/20">→</kbd>
              navigate
            </span>
            <span className="text-white/20">|</span>
          </>
        )}
        <span className="flex items-center gap-1">
          <kbd className="px-1.5 py-0.5 rounded bg-white/10 border border-white/20">esc</kbd>
          close
        </span>
      </div>
    </div>
  );
}