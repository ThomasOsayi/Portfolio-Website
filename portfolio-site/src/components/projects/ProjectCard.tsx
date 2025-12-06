'use client';

import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  isDarkTheme: boolean;
  onClick: () => void;
}

export default function ProjectCard({ project, isDarkTheme, onClick }: ProjectCardProps) {
  const theme = {
    cardBg: isDarkTheme ? 'from-white/[0.08] to-white/[0.02]' : 'from-white/[0.15] to-white/[0.08]',
    textMuted: isDarkTheme ? 'text-gray-300' : 'text-white/80',
    textSubtle: isDarkTheme ? 'text-gray-400' : 'text-white/70',
    border: isDarkTheme ? 'border-white/[0.1]' : 'border-white/[0.2]',
  };

  return (
    <div
      onClick={onClick}
      className="group relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1"
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
      <div className="relative p-8 sm:p-10 min-h-[300px] flex flex-col justify-between">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <p className={`${theme.textSubtle} text-sm mb-2 font-mono uppercase tracking-wider`}>
              {project.subtitle}
            </p>
            <h3 className="text-3xl sm:text-4xl font-bold text-white group-hover:text-white transition-colors font-display tracking-tight">
              {project.title}
            </h3>
          </div>
          
          {/* Arrow Icon */}
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"
            style={{
              background: `linear-gradient(135deg, ${project.accent}30, ${project.accent}10)`,
              boxShadow: `0 8px 32px ${project.accent}20`,
            }}
          >
            <span
              className="group-hover:rotate-45 transition-transform duration-300"
              style={{ color: project.accent }}
            >
              ↗
            </span>
          </div>
        </div>

        {/* Description */}
        <p className={`${theme.textMuted} text-sm leading-relaxed my-6 font-body`}>
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
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
      </div>
    </div>
  );
}