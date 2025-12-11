// src/components/projects/ProjectModal.tsx

'use client';

import { useEffect, useRef, useState } from 'react';
import { Project } from '@/data/projects';
import Image from 'next/image';
import ImageLightbox from '@/components/ui/ImageLightbox';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Combine single image and array into one array for lightbox
  const allImages: string[] = [
    ...(project.previewImages || []),
    ...(project.previewImage && !project.previewImages?.includes(project.previewImage) 
      ? [project.previewImage] 
      : [])
  ];

  // Use previewImages if available, otherwise fall back to single previewImage
  const displayImages = project.previewImages?.length 
    ? project.previewImages 
    : project.previewImage 
      ? [project.previewImage] 
      : [];

  const hasImages = displayImages.length > 0;
  const hasMultipleImages = displayImages.length > 1;

  // Focus trap and keyboard handling
  useEffect(() => {
    if (!lightboxOpen) {
      closeButtonRef.current?.focus();
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !lightboxOpen) {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, lightboxOpen]);

  // Status badge config
  const statusConfig = {
    live: { label: 'LIVE', color: 'bg-emerald-500', dotColor: 'bg-emerald-400', animate: true },
    'in-progress': { label: 'IN PROGRESS', color: 'bg-amber-500', dotColor: 'bg-amber-400', animate: true },
    archived: { label: 'ARCHIVED', color: 'bg-gray-500', dotColor: 'bg-gray-400', animate: false },
    private: { label: 'PRIVATE', color: 'bg-violet-500', dotColor: 'bg-violet-400', animate: false },
  };

  const status = project.status ? statusConfig[project.status] : null;
  const displayTags = project.fullTags || project.tags;

  const openLightbox = (index: number = 0) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-2xl"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div
          ref={modalRef}
          className="relative max-w-2xl w-full max-h-[90vh] rounded-3xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Background layers */}
          <div className="absolute inset-0 bg-[#0a0a10]" />
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10`} />
          <div className="absolute inset-0 rounded-3xl border border-white/15" />

          {/* Scrollable content */}
          <div className="relative max-h-[90vh] overflow-y-auto custom-scrollbar">
            <div className="p-8 sm:p-10">
              {/* Close Button */}
              <button
                ref={closeButtonRef}
                onClick={onClose}
                className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200 text-xl font-light text-white z-10 hover:scale-110"
                aria-label="Close modal"
              >
                ×
              </button>

              {/* Header with Status Badge */}
              <div className="flex items-start justify-between mb-6 pr-12">
                <div>
                  <p className="text-gray-400 text-xs font-mono uppercase tracking-wider mb-1">
                    {project.category || project.subtitle}
                  </p>
                  <h3
                    id="modal-title"
                    className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white"
                  >
                    {project.title}
                  </h3>
                  {project.role && (
                    <p className="text-gray-400 text-sm font-body mt-1">{project.role}</p>
                  )}
                </div>
                
                {/* Status Badge */}
                {status && (
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 flex-shrink-0">
                    <span className="relative flex h-2 w-2">
                      {status.animate && (
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${status.dotColor} opacity-75`} />
                      )}
                      <span className={`relative inline-flex rounded-full h-2 w-2 ${status.dotColor}`} />
                    </span>
                    <span className="text-xs font-semibold text-white/80 font-mono tracking-wider">
                      {status.label}
                    </span>
                  </div>
                )}
              </div>

              {/* Preview Image/Video - Now Clickable */}
              {(hasImages || project.previewVideo) && (
                <div className="relative rounded-2xl overflow-hidden mb-8 border border-white/10 bg-black/30 group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} />
                  
                  {project.previewVideo ? (
                    <video
                      src={project.previewVideo}
                      className="w-full h-48 sm:h-56 object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  ) : hasImages ? (
                    <button
                      onClick={() => openLightbox(0)}
                      className="relative w-full h-48 sm:h-56 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-black"
                      aria-label="View full image"
                    >
                      <Image
                        src={displayImages[0]}
                        alt={`${project.title} preview`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100 flex flex-col items-center gap-2">
                          <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                          </div>
                          <span className="text-white text-sm font-medium">
                            {hasMultipleImages ? `View all ${displayImages.length} images` : 'Click to expand'}
                          </span>
                        </div>
                      </div>

                      {/* Image count badge */}
                      {hasMultipleImages && (
                        <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center gap-2">
                          <svg className="w-4 h-4 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span className="text-white/80 text-xs font-semibold">{displayImages.length}</span>
                        </div>
                      )}
                    </button>
                  ) : null}
                </div>
              )}

              {/* Thumbnail strip for multiple images */}
              {hasMultipleImages && (
                <div className="flex gap-2 mb-8 overflow-x-auto pb-2 -mt-4">
                  {displayImages.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => openLightbox(index)}
                      className={`relative flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all duration-200 hover:scale-105 ${
                        index === 0 ? 'border-white/30' : 'border-white/10 hover:border-white/20'
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${project.title} thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Description */}
              <div className="mb-8">
                <p className="text-gray-300 leading-relaxed font-body text-base whitespace-pre-line">
                  {project.longDescription || project.description}
                </p>
              </div>

              {/* Metrics Row */}
              {project.metrics && project.metrics.length > 0 && (
                <div className="grid grid-cols-3 gap-3 mb-8">
                  {project.metrics.map((metric, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl bg-white/5 border border-white/10 text-center group hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300"
                    >
                      <p className="text-xs text-gray-500 font-mono uppercase tracking-wider mb-1">
                        {metric.label}
                      </p>
                      <p className="text-sm font-semibold text-white font-body">
                        {metric.value}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Feature Highlights */}
              {project.features && project.features.length > 0 && (
                <div className="mb-8">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-gray-500 mb-4">
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.features.map((feature, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-xl bg-white/5 border border-white/10 group hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300"
                      >
                        <div className="flex items-start gap-3">
                          {feature.icon && (
                            <span className="text-xl flex-shrink-0">{feature.icon}</span>
                          )}
                          <div>
                            <h5 className="font-semibold text-white text-sm font-body mb-1">
                              {feature.title}
                            </h5>
                            <p className="text-gray-400 text-xs font-body leading-relaxed">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack */}
              <div className="mb-8">
                <h4 className="text-xs font-mono uppercase tracking-wider text-gray-500 mb-4">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {displayTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-xs font-semibold rounded-full bg-white/10 border border-white/15 text-gray-200 font-body hover:bg-white/15 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 py-4 rounded-xl bg-gradient-to-r ${project.gradient} font-semibold text-base hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 font-body shadow-lg text-white hover:scale-[1.02] hover:shadow-xl`}
                    style={{ boxShadow: `0 8px 32px ${project.accent}30` }}
                  >
                    Visit Live Site
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-4 rounded-xl bg-white/10 border border-white/15 font-semibold text-base hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 font-body text-white hover:scale-[1.02]"
                  >
                    View Code
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                  </a>
                )}
                {project.caseStudyUrl && (
                  <a
                    href={project.caseStudyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-4 rounded-xl bg-white/10 border border-white/15 font-semibold text-base hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 font-body text-white hover:scale-[1.02]"
                  >
                    Case Study
                    <span className="text-lg">→</span>
                  </a>
                )}
                {!project.liveUrl && !project.githubUrl && !project.caseStudyUrl && (
                  <button
                    className={`w-full py-4 rounded-xl bg-gradient-to-r ${project.gradient} font-semibold text-base hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 font-body shadow-lg text-white`}
                  >
                    View Details <span className="text-lg">→</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && displayImages.length > 0 && (
        <ImageLightbox
          images={displayImages}
          initialIndex={lightboxIndex}
          alt={`${project.title} preview`}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}