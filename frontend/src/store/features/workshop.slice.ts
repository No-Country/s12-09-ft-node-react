'use client';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { LoginResult, Workshop } from '@/@types';
import { workshopService } from '@/services';

export interface State {
  workshop: Workshop;
  isLoading: boolean;
  logged?: LoginResult;
}

const initialState: State = {
  workshop: {},
  isLoading: false,
  logged: typeof window !== 'undefined' && localStorage.getItem('logged') !== null
      ? JSON.parse(localStorage.getItem('logged') ?? '')
      : {},
};

// thunk functions
export const createWorkshopAsync = createAsyncThunk(
  'workshop/register',
  async (workshop: Workshop) => {
    const newWorkshop = await workshopService.create(workshop);
    return newWorkshop;
  }
);
export const getWorkshopAsync = createAsyncThunk(
  'workshop/getOne',
  async (id: string) => {
    const created = await workshopService.getOneById(id);
    return created;
  }
);
export const loginWorkshopAsync = createAsyncThunk(
  'workshop/login',
  async (loginObject: Workshop) => {
    const logged = await workshopService.login(loginObject);
    return logged;
  }
);

export const workshopSlice = createSlice({
  name: 'workshop',
  initialState,
  reducers: {},
  extraReducers: builder => {
    //  CREATE
    builder.addCase(createWorkshopAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(createWorkshopAsync.fulfilled, (state, action) => {
      state.workshop = action.payload;
      state.isLoading = false;
    });
    // GETBYID
    builder.addCase(getWorkshopAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getWorkshopAsync.fulfilled, (state, action) => {
      state.workshop = action.payload;
    });
    // LOGIN
    builder.addCase(loginWorkshopAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(loginWorkshopAsync.fulfilled, (state, action) => {
      state.logged = action.payload;
      state.workshop = action.payload.result;
      state.isLoading = false;
      // save in localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('logged', JSON.stringify(action.payload));
      }
    });
  },
});

export const workshopReducer = workshopSlice.reducer;
