'use client';

import { useEffect, useRef } from 'react';
import { Project } from '@/data/projects';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Focus trap and keyboard handling
  useEffect(() => {
    // Focus the close button when modal opens
    closeButtonRef.current?.focus();

    // Handle escape key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-2xl"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        className="relative max-w-xl w-full rounded-3xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Background */}
        <div className="absolute inset-0 bg-[#0a0a10]" />
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-15`} />
        <div className="absolute inset-0 rounded-3xl border border-white/15" />

        {/* Content */}
        <div className="relative p-10 sm:p-12">
          {/* Close Button */}
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-xl font-light text-white"
            aria-label="Close modal"
          >
            ×
          </button>

          {/* Project Info */}
          <p className="text-gray-400 text-sm font-mono uppercase tracking-wider mb-2">
            {project.subtitle}
          </p>
          <h3
            id="modal-title"
            className="text-4xl font-extrabold mb-6 font-display tracking-tight text-white"
          >
            {project.title}
          </h3>
          <p className="text-gray-300 leading-relaxed mb-10 font-body text-lg">
            {project.longDescription || project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-10">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-5 py-2.5 text-sm font-semibold rounded-full bg-white/10 border border-white/15 text-gray-200 font-body"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 py-5 rounded-2xl bg-gradient-to-r ${project.gradient} font-semibold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-3 font-body shadow-xl text-white`}
              >
                View Live <span className="text-xl">↗</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-5 rounded-2xl bg-white/10 border border-white/15 font-semibold text-lg hover:bg-white/20 transition-colors flex items-center justify-center gap-3 font-body text-white"
              >
                View Code <span className="text-xl">◆</span>
              </a>
            )}
            {!project.liveUrl && !project.githubUrl && (
              <button
                className={`w-full py-5 rounded-2xl bg-gradient-to-r ${project.gradient} font-semibold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-3 font-body shadow-xl text-white`}
              >
                View Project <span className="text-xl">→</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}