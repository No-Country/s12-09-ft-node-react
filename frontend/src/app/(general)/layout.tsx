import { Container } from '@/components';
import { HeaderClient } from '@/components/layout';

interface Props {
  children: JSX.Element;
}
export default function WorkshopLayout({ children }: Props) {
  return (
    <>
      <HeaderClient />
      <Container>{children}</Container>
    </>
  );
}
