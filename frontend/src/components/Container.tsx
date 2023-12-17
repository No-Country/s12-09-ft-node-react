interface Props {
  children: JSX.Element | string;
  className?: string;
}
export function Container({ children = <></>, className = '' }: Props) {
  return (
    <div className={`max-w-[400px] relative mx-auto ${className}`}>
      {children}
    </div>
  );
}
