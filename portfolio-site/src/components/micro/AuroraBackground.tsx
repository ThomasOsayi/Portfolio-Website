'use client';

export default function AuroraBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden opacity-50 pointer-events-none">
      <div
        className="absolute rounded-full"
        style={{
          width: '60vw', height: '60vw', top: '-20%', left: '-10%',
          background: 'linear-gradient(135deg, rgba(252,0,25,0.12), rgba(255,120,80,0.08))',
          filter: 'blur(120px)',
          animation: 'auroraFloat 14s ease-in-out infinite alternate',
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: '50vw', height: '50vw', top: '10%', right: '-15%',
          background: 'linear-gradient(225deg, rgba(100,100,255,0.08), rgba(252,0,25,0.06))',
          filter: 'blur(120px)',
          animation: 'auroraFloat 18s ease-in-out infinite alternate',
          animationDelay: '-4s',
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: '40vw', height: '40vw', bottom: '-10%', left: '30%',
          background: 'linear-gradient(180deg, rgba(252,0,25,0.06), rgba(255,200,100,0.05))',
          filter: 'blur(120px)',
          animation: 'auroraFloat 16s ease-in-out infinite alternate',
          animationDelay: '-8s',
        }}
      />
    </div>
  );
}