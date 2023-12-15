'use client';
interface Props {
  children: JSX.Element | string;
  className?: string;
}
export function Container({ children, className = '' }: Props) {
  return (
    <div className={`max-w-[420px] sm:max-w-7xl relative mx-auto p-4 ${className}`}>
      {children}
    </div>
  );
}
