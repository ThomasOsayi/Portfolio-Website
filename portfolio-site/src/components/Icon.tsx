// Inline SVG icons. Unicode arrows render as color emoji on iPhones, so the site never uses them.
const PATHS = {
  'arrow-up-right': 'M7 17 17 7M8 7h9v9',
  'arrow-left': 'M19 12H5m6-6-6 6 6 6',
  'arrow-right': 'M5 12h14m-6-6 6 6-6 6',
  check: 'm5 12 5 5 9-10',
  close: 'M6 6l12 12M18 6 6 18',
  enter: 'M20 5v7a3 3 0 0 1-3 3H5m4-4-4 4 4 4',
} as const;

export type IconName = keyof typeof PATHS;

export default function Icon({ name, size = '0.9em', className }: { name: IconName; size?: number | string; className?: string }) {
  return (
    <svg className={`icon ${className ?? ''}`} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d={PATHS[name]} />
    </svg>
  );
}
