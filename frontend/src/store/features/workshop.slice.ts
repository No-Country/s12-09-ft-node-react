'use client';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { WorkShopModel } from '@/model';

import { workShopService } from '@/services';

export interface WorkShopState {
  workShop: WorkShopModel;
  isLoading: boolean;
}

const initialState: WorkShopState = {
  workShop: {
    name: '',
    address: '',
    email: '',
    password: '',
    phone: '',
    role: '',
    id: '',
  },
  isLoading: false,
};

export const createWorkShopAsync = createAsyncThunk(
  'workShop/register',
  async (workShop: WorkShopModel) => {
    const newWorkShop = await workShopService.createWorkShop(workShop);
    return newWorkShop;
  }
);

export const getWorkShopAsync = createAsyncThunk(
  'workShop/getOne',
  async (id: string) => {
    const created = await workShopService.getWorkShop(id);
    return created;
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
    builder.addCase(getWorkShopAsync.fulfilled, (state, action) => {
      state.workShop = action.payload;
    });
  },
});

export const workShopReducer = workShopSlice.reducer;
