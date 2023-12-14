interface Props {
  children: string;
  isOutline?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
  onClick: () => void;
}
export function Button(props: Props) {
  const {
    children = '',
    className = '',
    isOutline = false,
    ...otherProps
  } = props;
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
