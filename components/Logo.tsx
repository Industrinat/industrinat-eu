interface LogoProps {
  variant?: 'dark' | 'light';
  className?: string;
}

export default function Logo({ variant = 'dark', className = '' }: LogoProps) {
  const textColor = variant === 'dark' ? '#1f2937' : '#ffffff';
  const accentColor = '#f97316';
  const netColor = '#8B4513';

  return (
    <svg
      viewBox="0 0 200 40"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Litet nät som ikon - placerat uppe till vänster */}
      <g transform="translate(0, 8)">
        <line x1="2" y1="4" x2="8" y2="16" stroke={netColor} strokeWidth="1.2" strokeLinecap="round" />
        <line x1="7" y1="4" x2="13" y2="16" stroke={netColor} strokeWidth="1.2" strokeLinecap="round" />
        <line x1="12" y1="4" x2="18" y2="16" stroke={netColor} strokeWidth="1.2" strokeLinecap="round" />
        
        <line x1="2" y1="12" x2="8" y2="4" stroke={netColor} strokeWidth="1.2" strokeLinecap="round" />
        <line x1="7" y1="16" x2="14" y2="4" stroke={netColor} strokeWidth="1.2" strokeLinecap="round" />
        <line x1="13" y1="16" x2="18" y2="8" stroke={netColor} strokeWidth="1.2" strokeLinecap="round" />
      </g>

      {/* Text */}
      <text x="24" y="28" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold">
        <tspan fill={textColor}>industri</tspan>
        <tspan fill={accentColor}>nät</tspan>
      </text>
    </svg>
  );
}