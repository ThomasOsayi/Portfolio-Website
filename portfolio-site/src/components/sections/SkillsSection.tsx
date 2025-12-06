'use client';

import { skills } from '@/data/skills';

interface SkillsSectionProps {
  isDarkTheme: boolean;
}

export default function SkillsSection({ isDarkTheme }: SkillsSectionProps) {
  const theme = {
    cardBg: isDarkTheme ? 'from-white/[0.08] to-white/[0.02]' : 'from-white/[0.15] to-white/[0.08]',
    textMuted: isDarkTheme ? 'text-gray-300' : 'text-white/80',
    border: isDarkTheme ? 'border-white/[0.1]' : 'border-white/[0.2]',
  };

  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p
            className={`${
              isDarkTheme ? 'text-violet-400' : 'text-white/70'
            } font-mono text-sm mb-3 tracking-widest uppercase`}
          >
            // Expertise
          </p>
          <h2 className="text-5xl sm:text-6xl font-extrabold font-display tracking-tight text-white">
            Tech Stack
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className={`group px-8 py-5 rounded-2xl bg-gradient-to-br ${theme.cardBg} border ${theme.border} ${
                isDarkTheme
                  ? 'hover:border-violet-500/40 hover:shadow-violet-500/10'
                  : 'hover:border-white/40 hover:shadow-white/10'
              } transition-all duration-300 hover:-translate-y-2 hover:shadow-xl backdrop-blur-xl flex items-center gap-4`}
            >
              <span className="text-2xl">{skill.icon}</span>
              <span
                className={`font-semibold ${theme.textMuted} group-hover:text-white transition-colors font-body text-lg`}
              >
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}