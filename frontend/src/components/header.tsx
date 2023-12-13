'use client';

import type { MenuItem } from '@/@types';
import Link from 'next/link';
import { Logo, Container } from '.';
import { MenuIcon } from '@/assets/svg';

interface Props {
  links: MenuItem[];
  children?: JSX.Element;
}

export function Header({ children, links = [] }: Props) {
  return (
    <div className='bg-primary'>
      <Container>
        <header className='navbar bg-primary '>
          <Link href='/'>
            <Logo isWhite />
          </Link>
          {children}
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
              <div className='menu p-4 w-[260px] min-h-full bg-base-200 text-base-content'>
                <Link href='/'>
                  <Logo className='pb-4' />
                </Link>
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
            </nav>
          </div>
        </header>
      </Container>
    </div>
  );
}
