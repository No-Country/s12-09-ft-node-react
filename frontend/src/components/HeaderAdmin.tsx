'use client';

import type { MenuItem } from '@/@types';
import { Header } from '.';

const links: MenuItem[] = [
  {
    name: 'Home',
    href: '/admin',
    icon: <></>,
  },
];

export function HeaderAdmin() {
  return (
    <Header links={links}>
      <>Admin Avatar</>
    </Header>
  );
}
