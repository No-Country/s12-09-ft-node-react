import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

import { workShopReducer } from './features/workshop.slice';
import { mechanicReducer } from './features/mechanic.slice';
import { vehicleReducer, clientReducer, modalReducer } from './features';

export const store = configureStore({
  reducer: {
    workShop: workShopReducer,
    mechanics: mechanicReducer,
    vehicles: vehicleReducer,
    clients: clientReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
