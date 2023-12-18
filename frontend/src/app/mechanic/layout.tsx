import { HeaderMechanic } from '@/components/layout';
import { ModalProvider } from '@/modal';
import { StoreProvider } from '@/store';

interface Props {
  children: JSX.Element;
}
export default function MechanicLayout({ children }: Props) {
  return (
    <>
      <HeaderMechanic />
      <StoreProvider>
        <ModalProvider>{children}</ModalProvider>
      </StoreProvider>
    </>
  );
}
