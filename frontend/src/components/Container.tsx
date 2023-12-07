interface Props {
  children: JSX.Element;
}
export function Container({ children }: Props) {
  return <div className='max-w-4xl relative mx-auto p-4'>{children}</div>;
}
