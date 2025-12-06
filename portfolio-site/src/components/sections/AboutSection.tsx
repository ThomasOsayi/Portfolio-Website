'use client';

interface AboutSectionProps {
  isDarkTheme: boolean;
}

export default function AboutSection({ isDarkTheme }: AboutSectionProps) {
  const theme = {
    textMuted: isDarkTheme ? 'text-gray-300' : 'text-white/80',
    textSubtle: isDarkTheme ? 'text-gray-400' : 'text-white/70',
    border: isDarkTheme ? 'border-white/[0.1]' : 'border-white/[0.2]',
  };

  const details = [
    { label: 'Location', value: 'Los Angeles, CA', icon: '📍' },
    { label: 'University', value: 'Loyola Marymount', icon: '🎓' },
    { label: 'Focus', value: 'Full-Stack & Product', icon: '💻' },
  ];

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-[3rem] overflow-hidden">
          {/* Background */}
          <div
            className={`absolute inset-0 ${
              isDarkTheme
                ? 'bg-gradient-to-br from-violet-600/15 via-purple-500/10 to-indigo-600/15'
                : 'bg-gradient-to-br from-white/10 via-indigo-300/10 to-white/10'
            }`}
          />
          <div
            className={`absolute inset-0 ${
              isDarkTheme ? 'bg-white/[0.03]' : 'bg-white/[0.05]'
            } backdrop-blur-2xl`}
          />
          <div className={`absolute inset-0 rounded-[3rem] border ${theme.border}`} />

          {/* Content */}
          <div className="relative grid md:grid-cols-2 gap-12 p-10 sm:p-16">
            {/* Left Column - Text */}
            <div>
              <p
                className={`${
                  isDarkTheme ? 'text-violet-400' : 'text-white/70'
                } font-mono text-sm mb-3 tracking-widest uppercase`}
              >
                // About Me
              </p>
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-8 font-display tracking-tight leading-tight text-white">
                Building products
                <span
                  className={`block text-transparent bg-clip-text ${
                    isDarkTheme
                      ? 'bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400'
                      : 'bg-gradient-to-r from-white via-indigo-200 to-white'
                  }`}
                >
                  that matter
                </span>
              </h2>
              <p className={`${theme.textMuted} leading-relaxed mb-6 font-body text-lg`}>
                I'm a Computer Science student at LMU with a passion for turning ideas into
                reality. Currently leading development on the NOM startup app with LMU's Tech &
                Digital Ventures team, where I blend technical implementation with user-centered
                design thinking.
              </p>
              <p className={`${theme.textSubtle} leading-relaxed font-body`}>
                My aspiration is to become a software engineer and product innovator—eventually
                founding or leading a tech company that combines strong engineering with meaningful
                product design. I thrive at the intersection of code and creativity, building
                experiences that are both technically robust and delightful to use.
              </p>
            </div>

            {/* Right Column - Details */}
            <div className="flex flex-col justify-center gap-5">
              {details.map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-5 p-5 rounded-2xl ${
                    isDarkTheme ? 'bg-white/[0.05]' : 'bg-white/[0.1]'
                  } border ${theme.border} ${
                    isDarkTheme ? 'hover:border-violet-500/30' : 'hover:border-white/40'
                  } transition-all duration-300 hover:-translate-x-1`}
                >
                  <div
                    className={`w-14 h-14 rounded-xl ${
                      isDarkTheme
                        ? 'bg-gradient-to-br from-violet-500/20 to-indigo-500/20'
                        : 'bg-white/20'
                    } flex items-center justify-center text-2xl`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className={`${theme.textSubtle} text-sm font-mono uppercase tracking-wider`}>
                      {item.label}
                    </p>
                    <p className="font-semibold text-white text-lg font-body">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}