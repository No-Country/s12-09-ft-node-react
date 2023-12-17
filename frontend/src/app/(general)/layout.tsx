import { HeaderHome } from '@/components/layout';
import { Container } from '@/components';

interface Props {
  children: React.ReactNode;
}
export default function GeneralLayout({ children }: Props) {
  return (
    <>
      <HeaderHome />
      <Container>
        <>{children}</>
      </Container>
    </>
  );
}
