'use client';

interface ContactSectionProps {
  isDarkTheme: boolean;
}

export default function ContactSection({ isDarkTheme }: ContactSectionProps) {
  const theme = {
    cardBg: isDarkTheme ? 'from-white/[0.08] to-white/[0.02]' : 'from-white/[0.15] to-white/[0.08]',
    textMuted: isDarkTheme ? 'text-gray-300' : 'text-white/80',
    textSubtle: isDarkTheme ? 'text-gray-400' : 'text-white/70',
    border: isDarkTheme ? 'border-white/[0.1]' : 'border-white/[0.2]',
  };

  const links = [
    {
      name: 'Email',
      icon: '✉',
      color: 'from-violet-500 to-indigo-500',
      href: 'mailto:thomasosayi@gmail.com', // Update with your email
    },
    {
      name: 'LinkedIn',
      icon: 'in',
      color: 'from-blue-500 to-cyan-500',
      href: 'https://www.linkedin.com/in/thomas-osayi', // Update with your LinkedIn
    },
    {
      name: 'GitHub',
      icon: '◆',
      color: 'from-gray-500 to-gray-400',
      href: 'https://github.com/ThomasOsayi', // Update with your GitHub
    },
  ];

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <p
          className={`${
            isDarkTheme ? 'text-violet-400' : 'text-white/70'
          } font-mono text-sm mb-3 tracking-widest uppercase`}
        >
          // Get In Touch
        </p>
        <h2 className="text-5xl sm:text-7xl font-extrabold mb-8 font-display tracking-tight leading-tight text-white">
          Let's create something
          <span
            className={`block text-transparent bg-clip-text ${
              isDarkTheme
                ? 'bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400'
                : 'bg-gradient-to-r from-white via-indigo-200 to-white'
            }`}
          >
            amazing together
          </span>
        </h2>
        <p className={`${theme.textSubtle} mb-14 max-w-lg mx-auto font-body text-lg leading-relaxed`}>
          Always open to new opportunities and interesting conversations about tech, startups, and
          product design.
        </p>

        {/* Contact Links */}
        <div className="flex flex-wrap justify-center gap-5">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative px-8 py-5 rounded-2xl bg-gradient-to-br ${theme.cardBg} border ${theme.border} ${
                isDarkTheme
                  ? 'hover:border-violet-500/40 hover:shadow-violet-500/10'
                  : 'hover:border-white/40 hover:shadow-white/10'
              } transition-all duration-300 hover:-translate-y-2 hover:shadow-xl backdrop-blur-xl flex items-center gap-4`}
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center font-bold text-base shadow-lg text-white`}
              >
                {link.icon}
              </div>
              <span
                className={`font-semibold ${theme.textMuted} group-hover:text-white transition-colors font-body text-lg`}
              >
                {link.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}