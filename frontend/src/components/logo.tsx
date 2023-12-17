'use client';
import { MainLogo } from '@/assets/svg';

interface Props {
  className?: string;
  isWhite?: boolean;
}

export function Logo({ className, isWhite = false }: Props) {
  return (
    <div className={`logo w-36 ${className}`}>
      <MainLogo
        className={`w-full h-auto mr-4 ${
          isWhite ? '[&>path]:fill-white' : '[&>path]:fill-primary'
        }`}
      />
    </div>
  );
}
