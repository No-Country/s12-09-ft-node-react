function Subtitle({ children }: { children: string }) {
  return <small className='block text-xl text-accent'>{children}</small>;
}

interface Props {
  title: string;
  children?: JSX.Element;
  className?: string;
}
export function Title({ title, children, className }: Props) {
  return (
    <h1 className={`text-3xl font-bold text-secondary py-8 ${className}`}>
      {title}
      {children}
    </h1>
  );
}

Title.Subtitle = Subtitle;
