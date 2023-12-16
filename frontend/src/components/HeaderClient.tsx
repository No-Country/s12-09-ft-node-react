'use client';

import type { MenuItem } from '@/@types';
import { Header } from '.';

const links: MenuItem[] = [
  {
    name: 'Home',
    href: '/',
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
