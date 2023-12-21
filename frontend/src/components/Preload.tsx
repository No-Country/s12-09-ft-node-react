'use client';

export function Preload({ className = '' }: { className?: string }) {
  return (
    <div
      className={`preload flex items-center justify-center h-full w-full ${className}`}
    >
      <span className='loading loading-spinner loading-lg text-primary' />
    </div>
  );
}
