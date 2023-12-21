import type { MenuItem } from '@/@types';
import { Header } from '.';
import { HomeIcon } from '@/assets/svg';

const links: MenuItem[] = [
  {
    name: 'Home',
    href: '/client',
    icon: <HomeIcon />,
  }
];

export function HeaderClient() {
  return <Header links={links} hasLogout />;
}
