import { HeaderWorkshop } from '@/components/layout';
import { Container } from '@/components';

interface Props {
  children: JSX.Element;
}
export default function WorkshopLayout({ children }: Props) {
  return (
    <>
      <HeaderWorkshop />
      <Container>{children}</Container>
    </>
  );
}
