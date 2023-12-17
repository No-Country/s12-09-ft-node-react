import { HeaderMechanic } from '@/components';
import { ModalProvider } from '@/components/Modal/context';
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
