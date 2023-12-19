'use client';

import { Provider } from 'react-redux';
import { store } from './store';
import { useEffect } from 'react';
import { setLoggedSync } from './features';
import { usePathname, useRouter } from 'next/navigation';

interface Children {
  children: React.ReactNode;
}

export function StoreProvider({ children }: Children) {
  const pathname = usePathname();
  const route = useRouter();

  useEffect(() => {
    const logged = JSON.parse(localStorage.getItem('logged-mechanic')!);
    store.dispatch(setLoggedSync(logged));
  }, [pathname]);

  useEffect(() => {
    const mechanicLogged = store.getState().mechanics.logged;

    if (pathname.startsWith('/login/mechanic') && mechanicLogged)
      route.push('/mechanic');

    if (pathname.startsWith('/mechanic') && !mechanicLogged) {
      route.push('/login/mechanic');
    }
  }, [pathname]);

  return <Provider store={store}>{children}</Provider>;
}
