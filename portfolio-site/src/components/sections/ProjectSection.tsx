'use client';

import { useState } from 'react';
import { projects, Project } from '@/data/projects';
import ProjectCard from '@/components/projects/ProjectCard';
import ProjectModal from '@/components/projects/ProjectModal';

interface ProjectsSectionProps {
  isDarkTheme: boolean;
}

export default function ProjectsSection({ isDarkTheme }: ProjectsSectionProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const theme = {
    textSubtle: isDarkTheme ? 'text-gray-400' : 'text-white/70',
  };

  return (
    <section id="work" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-16">
          <div>
            <p
              className={`${
                isDarkTheme ? 'text-violet-400' : 'text-white/70'
              } font-mono text-sm mb-3 tracking-widest uppercase`}
            >
              // Selected Work
            </p>
            <h2 className="text-5xl sm:text-6xl font-extrabold font-display tracking-tight text-white">
              Featured Projects
            </h2>
          </div>
          <p className={`${theme.textSubtle} max-w-xs text-sm font-body leading-relaxed`}>
            A collection of projects I've built with passion and attention to detail.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isDarkTheme={isDarkTheme}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}