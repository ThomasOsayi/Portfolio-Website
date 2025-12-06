'use client';

interface HeroProps {
  isDarkTheme: boolean;
}

export default function Hero({ isDarkTheme }: HeroProps) {
  const theme = {
    textMuted: isDarkTheme ? 'text-gray-300' : 'text-white/80',
    textSubtle: isDarkTheme ? 'text-gray-400' : 'text-white/70',
  };

  const scrollToWork = () => {
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-6 pt-20">
      <div className="max-w-5xl mx-auto text-center z-10">
        {/* Status Badge */}
        <div
          className={`inline-flex items-center gap-3 px-5 py-2.5 rounded-full ${
            isDarkTheme
              ? 'bg-gradient-to-r from-violet-500/10 to-indigo-500/10 border-violet-500/20'
              : 'bg-white/10 border-white/20'
          } border mb-10 backdrop-blur-xl`}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
          </span>
          <span className={`text-sm ${theme.textMuted} font-body font-medium`}>
            Available for new opportunities
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl sm:text-8xl md:text-9xl font-extrabold tracking-tighter mb-8 leading-[0.85] font-display">
          <span className="block text-white drop-shadow-2xl">Thomas</span>
          <span
            className={`block ${
              isDarkTheme
                ? 'bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400'
                : 'bg-gradient-to-r from-white via-indigo-200 to-white'
            } bg-clip-text text-transparent pb-2`}
          >
            Osayi
          </span>
        </h1>

        {/* Subtitle */}
        <div className="mb-6">
          <p className="text-xl sm:text-2xl font-medium font-body">
            <span
              className={`${
                isDarkTheme
                  ? 'bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300'
                  : 'bg-gradient-to-r from-white via-indigo-200 to-white'
              } bg-clip-text text-transparent`}
            >
              Software Engineer
            </span>
            <span className={`${theme.textSubtle} mx-3`}>×</span>
            <span
              className={`${
                isDarkTheme
                  ? 'bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-300'
                  : 'bg-gradient-to-r from-indigo-200 via-white to-indigo-200'
              } bg-clip-text text-transparent`}
            >
              Product Designer
            </span>
          </p>
        </div>

        {/* Description */}
        <p className={`${theme.textMuted} max-w-xl mx-auto mb-14 leading-relaxed text-base sm:text-lg font-body`}>
          CS student at LMU crafting digital experiences at the intersection of
          <span className={`${isDarkTheme ? 'text-violet-300' : 'text-white'} font-medium`}>
            {' '}
            engineering excellence
          </span>{' '}
          and
          <span className={`${isDarkTheme ? 'text-indigo-300' : 'text-white'} font-medium`}>
            {' '}
            thoughtful design
          </span>
          .
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToWork}
            className={`group px-10 py-4 rounded-full font-semibold ${
              isDarkTheme
                ? 'bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:via-purple-500 hover:to-indigo-500 hover:shadow-violet-500/30'
                : 'bg-white text-violet-600 hover:shadow-white/30'
            } transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3 font-body text-white`}
          >
            View My Work
            <span className="group-hover:translate-x-1 transition-transform text-lg">→</span>
          </button>
          
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-10 py-4 rounded-full font-semibold border-2 ${
              isDarkTheme
                ? 'border-white/15 hover:bg-white/10 hover:border-white/30'
                : 'border-white/30 hover:bg-white/10 hover:border-white/50'
            } transition-all duration-300 backdrop-blur-sm hover:scale-105 font-body text-white`}
          >
            Download Resume
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div
            className={`w-7 h-11 rounded-full border-2 ${
              isDarkTheme ? 'border-violet-400/40' : 'border-white/40'
            } flex justify-center pt-2`}
          >
            <div className={`w-1.5 h-3 rounded-full ${isDarkTheme ? 'bg-violet-400' : 'bg-white'} animate-bounce`} />
          </div>
        </div>
      </div>
    </section>
  );
}