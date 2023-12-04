import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { header as Header } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MechanicAlert',
  description: 'Automotive service manager',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' data-theme="light">
      <body className={inter.className}>
        <Header/>
        {children}
        </body>
    </html>
  );
}
