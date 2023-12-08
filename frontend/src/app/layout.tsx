import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components';
import { StoreProvider } from '@/store';
import { ModalProvider } from '@/context';

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
        <Header />
        <StoreProvider>
          <ModalProvider>{children}</ModalProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
