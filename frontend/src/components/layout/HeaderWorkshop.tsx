import type { MenuItem } from '@/@types';
import { Header } from '.';
// import { Avatar } from '../Avatar';
import { HomeIcon, AddUserIcon } from '@/assets/svg';

const links: MenuItem[] = [
  {
    name: 'Inicio',
    href: '/workshop',
    icon: <HomeIcon />,
  },
  {
    name: 'Registrar Mecánico',
    href: '/workshop/mechanic/register',
    icon: <AddUserIcon />,
  },
];

export function HeaderWorkshop() {
  return (
    <Header links={links} hasLogout>
      {/* <Avatar name={name} className='ml-3 mb-4' loading={isLoading} /> */}
    </Header>
  );
}
