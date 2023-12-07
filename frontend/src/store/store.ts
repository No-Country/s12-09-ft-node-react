import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

import { carReducer } from './features/car/carSlice';
import { workShopReducer } from './features/workShop/workShopSlice';
import { mechanicReducer } from './features/mechanic/mechanicSlice';

export const store = configureStore({
  reducer: {
    cars: carReducer,
    workShop: workShopReducer,
    mechanics: mechanicReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
