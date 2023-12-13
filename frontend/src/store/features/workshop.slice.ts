'use client';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { LoginResult, Workshop } from '@/@types';
import { workShopService } from '@/services';

export interface WorkShopState {
  workShop: Workshop;
  isLoading: boolean;
  logged?: LoginResult | null;
}

if (typeof window !== 'undefined') {
  console.log(localStorage.getItem('logged'));
}

const initialState: WorkShopState = {
  workShop: {},
  isLoading: false,
  logged:
    typeof window !== 'undefined' && localStorage.getItem('logged') !== null
      ? JSON.parse(localStorage.getItem('logged') ?? '')
      : {},
};

export const createWorkShopAsync = createAsyncThunk(
  'workShop/register',
  async (workShop: Workshop) => {
    const newWorkShop = await workShopService.create(workShop);
    return newWorkShop;
  }
);

export const getWorkShopAsync = createAsyncThunk(
  'workShop/getOne',
  async (id: string) => {
    const created = await workShopService.getOneById(id);
    return created;
  }
);

export const loginWorkShopAsync = createAsyncThunk(
  'workShop/login',
  async (loginObject: Workshop) => {
    const logged = await workShopService.login(loginObject);
    return logged;
  }
);

export const workShopSlice = createSlice({
  name: 'workShop',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(createWorkShopAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(createWorkShopAsync.fulfilled, (state, action) => {
      state.workShop = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getWorkShopAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getWorkShopAsync.fulfilled, (state, action) => {
      state.workShop = action.payload;
    });
    builder.addCase(loginWorkShopAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(loginWorkShopAsync.fulfilled, (state, action) => {
      state.logged = action.payload;
      if (typeof window !== 'undefined') {
        localStorage.setItem('logged', JSON.stringify(action.payload));
      }
    });
  },
});

export const workShopReducer = workShopSlice.reducer;
