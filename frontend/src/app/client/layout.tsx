import { HeaderClient } from '@/components/layout';
import { ModalProvider } from '@/modal';
import { StoreProvider } from '@/store';

interface Props {
  children: JSX.Element;
}
export default function ClientLayout({ children }: Props) {
  return (
    <>
      <HeaderClient />
      <StoreProvider>
        <ModalProvider>{children}</ModalProvider>
      </StoreProvider>
    </>
  );
}
