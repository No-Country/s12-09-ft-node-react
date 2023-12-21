import type { MenuItem } from '@/@types';
import { Header } from '.';
import { HomeIcon } from '@/assets/svg';
import { Avatar } from '../Avatar';

const links: MenuItem[] = [
  {
    name: 'Home',
    href: '/client',
    icon: <HomeIcon />,
  },
];

export function HeaderClient() {
  return (
    <Header links={links} hasLogout>
      <Avatar name={`Alvaro Rodriguez`} className='ml-3 mb-4' />
    </Header>
  );
}
