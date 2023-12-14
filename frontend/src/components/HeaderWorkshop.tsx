'use client';

import type { MenuItem } from '@/@types';
import { Header } from '.';
import { Avatar } from './Avatar';
import { HomeIcon } from '@/assets/svg';
import { useWorkshop } from '@/hook';

const links: MenuItem[] = [
  {
    name: 'Home',
    href: '/workshop',
    icon: <HomeIcon />,
  },
];

export function HeaderWorkshop() {
  const { logged, isLoading } = useWorkshop();
  const name = logged?.result?.name ?? '';
  return (
    <Header links={links} hasLogout>
      <Avatar name={name} className='ml-3 mb-4' loading={isLoading} />
    </Header>
  );
}
