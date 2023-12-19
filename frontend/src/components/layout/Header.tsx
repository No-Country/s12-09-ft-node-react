'use client';
import type { MenuItem } from '@/@types';
import Link from 'next/link';
import { Container, Logo } from '@/components';
import { LogoutIcon, MenuIcon } from '@/assets/svg';
import { useRouter } from 'next/navigation';

interface Props {
  links: MenuItem[];
  children?: JSX.Element;
  hasLogout?: boolean;
}

export function Header({ children, links = [], hasLogout = false }: Props) {
  const route = useRouter();
  const handleLogout = () => {
    localStorage.clear();
    route.push('/login');
  };

  return (
    <header className='navbar bg-primary '>
      <Container className='flex justify-between w-full'>
        <>
          <Link href={links[0].href}>
            <Logo isWhite />
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
                    <Logo className='my-4' />
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
                      <button onClick={handleLogout}>
                        <LogoutIcon /> Cerrar session
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            </nav>
          </div>
        </>
      </Container>
    </header>
  );
}
