import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { StoreProvider } from '@/store';

import './globals.css';
<<<<<<< HEAD
import { HeaderHome } from '@/components/layout';
=======
import { ModalProvider } from '@/modal';
>>>>>>> 651955d99067b887f89130a6d8b01aaafd9ace93

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
