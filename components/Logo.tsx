import Image from 'next/image';

interface LogoProps {
  variant?: 'dark' | 'light';
  className?: string;
}

export default function Logo({ variant = 'dark', className = '' }: LogoProps) {
  return (
    <Image
      src="/industrinat_logo_new.png"
      alt="Industrinät"
      width={200}
      height={48}
      className={className}
      priority
    />
  );
}