import { Container } from '@/components';
import { HeaderClient } from '@/components/layout';

interface Props {
  children: JSX.Element;
}
export default function ClientLayout({ children }: Props) {
  return (
    <>
      <HeaderClient />
      <Container>{children}</Container>
    </>
  );
}
