import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { StoreProvider } from '@/store';
import { ModalProvider } from '@/context';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MechanicAlert',
  description: 'Automotive service manager',
  icons: {
    icon: 'favicon.svg',
    shortcut: 'favicon.svg',
  },
};

interface Props {
  children: JSX.Element;
}
export default function RootLayout({ children }: Props) {
  return (
    <html lang='en' data-theme='light'>
      <body className={inter.className}>
        <main>
          <StoreProvider>
            <ModalProvider>{children}</ModalProvider>
          </StoreProvider>
        </main>
      </body>
    </html>
  );
}
