import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { StoreProvider } from '@/store';

import './globals.css';
import { ModalProvider } from '@/modal';
import { HeaderHome } from '@/components/layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MechanicAlert',
  description: 'Automotive service manager',
};

interface Props {
  children: JSX.Element;
}
export default function RootLayout({ children }: Props) {
  return (
    <html lang='en' data-theme='light'>
      <body className={inter.className}>
        <StoreProvider>
          <HeaderHome />
          <ModalProvider>{children}</ModalProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
