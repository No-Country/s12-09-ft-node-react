interface Props {
  children: string;
  isOutline?: boolean;
  type?: string;
  className?: string;
}
export function Button(props: Props) {
  const { children, className = '', isOutline = false, ...otherProps } = props;
  return (
    <button
      className={`
      btn text-lg font-bold btn-primary text-secondary
      ${isOutline ? 'btn-outline border-2' : ''}
      ${className}`}
      {...otherProps}
    >
      {children}
    </button>
  );
}
