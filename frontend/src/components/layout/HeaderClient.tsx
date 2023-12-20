import type { MenuItem } from '@/@types';
import { Header } from '.';
import { HomeIcon } from '@/assets/svg';

const links: MenuItem[] = [
  {
    name: 'Home',
    href: '/client',
    icon: <HomeIcon />,
  },
  {
    name: 'Estado',
    href: '/client',
    icon: <></>,
  },
];

export function HeaderClient() {
  return <Header links={links} hasLogout />;
}
