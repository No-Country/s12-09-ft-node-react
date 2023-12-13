'use client';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { LoginResult, Workshop } from '@/@types';
import { workShopService } from '@/services';

export interface State {
  workshop: Workshop;
  isLoading: boolean;
  logged?: LoginResult;
}

const initialState: State = {
  workshop: {},
  isLoading: false,
  logged:
    typeof window !== 'undefined' && localStorage.getItem('logged') !== null
      ? JSON.parse(localStorage.getItem('logged') ?? '')
      : {},
};

// thunk functions
export const createWorkShopAsync = createAsyncThunk(
  'workShop/register',
  async (workshop: Workshop) => {
    const newWorkShop = await workShopService.create(workshop);
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
    //  CREATE
    builder.addCase(createWorkShopAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(createWorkShopAsync.fulfilled, (state, action) => {
      state.workshop = action.payload;
      state.isLoading = false;
    });
    // GETBYID
    builder.addCase(getWorkShopAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getWorkShopAsync.fulfilled, (state, action) => {
      state.workshop = action.payload;
    });
    // LOGIN
    builder.addCase(loginWorkShopAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(loginWorkShopAsync.fulfilled, (state, action) => {
      state.logged = action.payload;
      state.workshop = action.payload.result;
      if (typeof window !== 'undefined') {
        localStorage.setItem('logged', JSON.stringify(action.payload));
      }
    });
  },
});

export const workShopReducer = workShopSlice.reducer;
