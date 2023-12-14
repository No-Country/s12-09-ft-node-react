import { HeaderMechanic } from '@/components';

interface Props {
  children: JSX.Element;
}
export default function MechanicLayout({ children }: Props) {
  return (
    <>
      <HeaderMechanic />
      {children}
    </>
  );
}
