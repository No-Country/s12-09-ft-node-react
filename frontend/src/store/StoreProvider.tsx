'use client';

import { Provider } from 'react-redux';
import { store } from './store';

interface Children {
  children: React.ReactNode;
}

export function StoreProvider({ children }: Children) {
  return <Provider store={store}>{children}</Provider>;
}
