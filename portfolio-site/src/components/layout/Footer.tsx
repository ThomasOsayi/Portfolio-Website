'use client';

interface FooterProps {
  isDarkTheme: boolean;
}

export default function Footer({ isDarkTheme }: FooterProps) {
  const theme = {
    textSubtle: isDarkTheme ? 'text-gray-400' : 'text-white/70',
    border: isDarkTheme ? 'border-white/[0.1]' : 'border-white/[0.2]',
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-10 px-6 border-t ${theme.border}`}>
      <div
        className={`max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm ${theme.textSubtle} font-body`}
      >
        <span className="font-medium">© {currentYear} Thomas Osayi</span>
        <span>
          Designed & Built with{' '}
          <span className={`${isDarkTheme ? 'text-violet-400' : 'text-white'}`}>♥</span>
        </span>
      </div>
    </footer>
  );
}