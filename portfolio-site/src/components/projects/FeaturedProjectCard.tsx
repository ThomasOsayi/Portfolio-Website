'use client';

import { useRef } from 'react';
import { Project } from '@/data/projects';

interface FeaturedProjectCardProps {
  project: Project;
  isDarkTheme: boolean;
  onClick: () => void;
  videoSrc: string;
}

export default function FeaturedProjectCard({
  project,
  isDarkTheme,
  onClick,
  videoSrc,
}: FeaturedProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const theme = {
    cardBg: isDarkTheme ? 'from-white/[0.08] to-white/[0.02]' : 'from-white/[0.15] to-white/[0.08]',
    textMuted: isDarkTheme ? 'text-gray-300' : 'text-white/80',
    textSubtle: isDarkTheme ? 'text-gray-400' : 'text-white/70',
    border: isDarkTheme ? 'border-white/[0.1]' : 'border-white/[0.2]',
  };

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => videoRef.current?.play()}
      onMouseLeave={() => {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }}
      className="group relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.01] hover:-translate-y-1 md:col-span-2"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label={`View ${project.title} project details`}
    >
      {/* Card Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${theme.cardBg} backdrop-blur-xl`} />

      {/* Hover Gradient Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
      />

      {/* Border */}
      <div
        className={`absolute inset-0 rounded-3xl border ${theme.border} group-hover:border-transparent transition-colors duration-300`}
      />

      {/* Content */}
      <div className="relative p-8 sm:p-10 min-h-[400px] flex flex-col md:flex-row gap-8 items-center">
        {/* Left Side - Project Info */}
        <div className="flex-1 flex flex-col justify-center">
          {/* Featured Badge */}
          <div
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${
              isDarkTheme ? 'bg-violet-500/20' : 'bg-white/20'
            } border ${isDarkTheme ? 'border-violet-500/30' : 'border-white/30'} mb-4 w-fit`}
          >
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            <span className="text-xs font-semibold text-violet-300 font-mono uppercase tracking-wider">
              Featured Project
            </span>
          </div>

          <p className={`${theme.textSubtle} text-sm mb-2 font-mono uppercase tracking-wider`}>
            {project.subtitle}
          </p>
          <h3 className="text-4xl sm:text-5xl font-bold text-white group-hover:text-white transition-colors font-display tracking-tight mb-4">
            {project.title}
          </h3>

          <p className={`${theme.textMuted} text-base leading-relaxed mb-6 font-body max-w-md`}>
            {project.longDescription || project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`px-4 py-2 text-xs font-semibold rounded-full ${
                  isDarkTheme ? 'bg-white/[0.08]' : 'bg-white/[0.15]'
                } border ${theme.border} ${theme.textMuted} font-body`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div
            className={`inline-flex items-center gap-2 text-sm font-semibold ${
              isDarkTheme ? 'text-violet-400' : 'text-white'
            } group-hover:gap-3 transition-all duration-300`}
          >
            <span>View Case Study</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>

        {/* Right Side - Phone Mockup */}
        <div 
          className="flex-shrink-0 flex items-center justify-center"
          onClick={(e) => {
            e.stopPropagation();
            // Toggle video play/pause
            if (videoRef.current) {
              if (videoRef.current.paused) {
                videoRef.current.play();
              } else {
                videoRef.current.pause();
              }
            }
          }}
        >
          <div className="relative">
            {/* Phone Frame */}
            <div
              className={`relative w-[220px] h-[450px] sm:w-[260px] sm:h-[530px] rounded-[3rem] p-2 ${
                isDarkTheme
                  ? 'bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900'
                  : 'bg-gradient-to-b from-gray-600 via-gray-700 to-gray-800'
              } shadow-2xl shadow-black/50`}
            >
              {/* Phone Notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-10" />

              {/* Phone Screen */}
              <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-black">
                <video
                  ref={videoRef}
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Hide video if it fails to load
                    (e.target as HTMLVideoElement).style.display = 'none';
                  }}
                >
                  <source src={videoSrc} type="video/mp4" />
                  <source src={videoSrc.replace('.mp4', '.webm')} type="video/webm" />
                  <source src={videoSrc.replace('.mp4', '.mov')} type="video/quicktime" />
                </video>

                {/* Play indicator overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-white text-2xl ml-1">▶</span>
                  </div>
                </div>
              </div>

              {/* Phone Button */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-gray-600 rounded-full" />
            </div>

            {/* Glow Effect */}
            <div
              className={`absolute inset-0 rounded-[3rem] bg-gradient-to-br ${project.gradient} opacity-20 blur-2xl -z-10 group-hover:opacity-40 transition-opacity duration-500`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}