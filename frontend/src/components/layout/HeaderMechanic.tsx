'use client';
import type { Mechanic, MenuItem } from '@/@types';
import { Header } from '.';
import { useMechanic } from '@/hook';
import { useState, useEffect } from 'react';
import { Avatar } from '../Avatar';
const links: MenuItem[] = [
  {
    name: 'Home',
    href: '/mechanic',
    icon: <></>,
  },
  {
    name: 'Historial de cliente',
    href: '/mechanic',
    icon: <></>,
  },
];

export function HeaderMechanic() {
  const [mechanic, setMechanic] = useState<Mechanic>();
  const { logged } = useMechanic();

  useEffect(() => {
    setMechanic(logged);
  }, []);

  return (
    <>
      <Header links={links} hasLogout>
        {mechanic && (
          <Avatar
            name={`${mechanic?.firstName} ${mechanic?.lastName}`}
            className='ml-3 mb-4'
          />
        )}
      </Header>
    </>
  );
}
