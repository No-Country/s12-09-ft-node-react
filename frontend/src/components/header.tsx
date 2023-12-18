'use client';

import type { MenuItem } from '@/@types';
import Link from 'next/link';
import { LogoutIcon, MenuIcon } from '@/assets/svg';
import { Logo } from '.';

interface Props {
  links: MenuItem[];
  children?: JSX.Element;
  hasLogout?: boolean;
}

export function Header({ children, links, hasLogout = true }: Props) {
  return (
    <header className='navbar bg-primary '>
      <div className='max-w-[420px] sm:max-w-7xl mx-auto w-full'>
        <Link href={links[0].href}>
          <Logo isWhite className='w-36' />
        </Link>

        <div className='drawer justify-end '>
          <input id='my-drawer' type='checkbox' className='drawer-toggle' />
          <div className='drawer-content'>
            <label
              htmlFor='my-drawer'
              className='btn btn-primary drawer-button'
            >
              <MenuIcon className='[&>path]:fill-white' />
            </label>
          </div>
          <nav className='drawer-side z-10'>
            <label
              htmlFor='my-drawer'
              aria-label='close sidebar'
              className='drawer-overlay'
            ></label>
            <div className='menu p-4 w-[260px] min-h-full bg-base-200 text-base-content flex flex-col justify-between'>
              <div>
                <Link href='/'>
                  <Logo className='pb-4' />
                </Link>
                {children}
                <ul>
                  {links.map((item, i) => (
                    <li key={i}>
                      <Link href={item.href}>
                        {item.icon}
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {hasLogout && (
                <ul>
                  <li>
                    <Link href='/login'>
                      <LogoutIcon /> Cerrar session
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
