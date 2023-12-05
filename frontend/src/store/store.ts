'use client';

import { useSelector } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit';
import { carReducer } from './features/car/carSlice';
import { TypedUseSelectorHook } from 'react-redux';

export const store = configureStore({
    reducer: {
        cars: carReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
