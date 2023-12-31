import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

import {
  workshopReducer,
  mechanicReducer,
  vehicleReducer,
  clientReducer,
  budgetReducer,
  repairLogReducer,
} from './features';

export const store = configureStore({
  reducer: {
    workshop: workshopReducer,
    mechanics: mechanicReducer,
    vehicles: vehicleReducer,
    clients: clientReducer,
    budgets: budgetReducer,
    repairlog: repairLogReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
