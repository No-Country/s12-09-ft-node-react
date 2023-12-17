import type { MenuItem } from '@/@types';
import { Header } from '.';
import { EditIcon, HomeIcon, UserIcon } from '@/assets/svg';

const links: MenuItem[] = [
  {
    name: 'Inicio',
    href: '/',
    icon: <HomeIcon />,
  },
  {
    name: 'Registrarme',
    href: '/register',
    icon: <EditIcon />,
  },
  {
    name: 'Clientes',
    href: '/login',
    icon: <UserIcon />,
  },
  {
    name: 'Mecánicos',
    href: '/login/mechanic',
    icon: <UserIcon />,
  },
  {
    name: 'Administrador',
    href: '/login/workshop',
    icon: <UserIcon />,
  },
];

export function HeaderHome() {
  return <Header links={links} />;
}
