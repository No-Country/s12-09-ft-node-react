import { Container } from '@/components';
import { HeaderMechanic } from '@/components/layout';
interface Props {
  children: JSX.Element;
}
export default function MechanicLayout({ children }: Props) {
  return (
    <>
      <HeaderMechanic />
      <Container>{children}</Container>
    </>
  );
}
