'use client';

import { useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
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
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
