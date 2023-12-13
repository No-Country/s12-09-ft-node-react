'use client';

import type { MenuItem } from '@/@types';
import { Header } from '.';

const links: MenuItem[] = [
  {
    name: 'Home',
    href: '/mechanic',
    icon: <></>,
  },
];

export function HeaderMechanic() {
  return (
    <Header links={links}>
      <>mechanic Avatar</>
    </Header>
  );
}
