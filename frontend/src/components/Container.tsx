'use client';
interface Props {
  children: JSX.Element;
  className?: string;
}
export function Container({ children, className = '' }: Props) {
  return (
    <div className={`max-w-[420px] relative mx-auto p-4 ${className}`}>
      {children}
    </div>
  );
}
