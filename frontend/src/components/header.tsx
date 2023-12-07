import { BarsIcon } from '@/assets/icons';
import { Logo } from '@/components';
import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  const links = [
    {
      name: 'LOGO',
      href: '/',
      icon: '',
    },
    {
      name: 'Home',
      href: '/home',
      icon: '',
    },
    {
      name: 'Mechanic',
      href: '/mechanic',
      icon: '',
    },
    {
      name: 'Workshop',
      href: '/workshop',
      icon: '',
    },
    {
      name: 'Vehicle',
      href: '/vehicles',
      icon: '',
    },
    {
      name: 'Car Detail',
      href: '/car',
      icon: '',
    },
  ];

  return (
    <div className='navbar bg-primary'>
      <Logo />

      <div className='drawer justify-end'>
        <input id='my-drawer' type='checkbox' className='drawer-toggle' />
        <div className='drawer-content'>
          {/* Page content here */}
          <label htmlFor='my-drawer' className='btn btn-primary drawer-button'>
            <Image src={BarsIcon} alt='bars icon' className='h-8 w-6' />
          </label>
        </div>
        <div className='drawer-side z-10'>
          <label
            htmlFor='my-drawer'
            aria-label='close sidebar'
            className='drawer-overlay'
          ></label>
          <ul className='menu p-4 w-80 min-h-full bg-base-200 text-base-content'>
            {links.map(item => {
              return (
                <li key={item.name}>
                  <Link href={item.href}>
                    <p>{item.name}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
