'use client';

import { Provider } from 'react-redux';
import  { store } from './store';
import type { ReactNode } from 'react';

interface Children {
    children: ReactNode
}

export function Providers({ children }: Children) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}