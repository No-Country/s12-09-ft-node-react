'use client';

import type { MenuItem } from '@/@types';
import { Header } from '.';

const links: MenuItem[] = [
  {
    name: 'Home',
    href: '/client',
    icon: <></>,
  },
];

export function HeaderClient() {
  return (
    <Header links={links}>
      <>Admin Client</>
    </Header>
  );
}
