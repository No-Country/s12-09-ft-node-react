import { Container } from '@/components';
import { HeaderHome } from '@/components/layout';

interface Props {
  children: JSX.Element;
}
export default function WorkshopLayout({ children }: Props) {
  return (
    <>
      <HeaderHome />
      <Container>{children}</Container>
    </>
  );
}
