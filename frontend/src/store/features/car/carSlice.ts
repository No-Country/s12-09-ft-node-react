'use client';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { CarModel } from '@/model';

import { carService } from '@/services'

export interface CarState {
    value: Array<CarModel>
}

const initialState: CarState = {
    value: []
}

export const getAllCarAsync = createAsyncThunk(
    'car/getAll',
    async () => {
        const aux =await carService.getAllCar()
        return aux
    }
)

export const carSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {
         
    },
    extraReducers: (builder) => {
        builder.addCase(getAllCarAsync.fulfilled, (state, action) => {
            state.value = action.payload
        })
    }
})

// export const { getAllCar } = carSlice.actions;
// export default carSlice.reducer;

export const carReducer = carSlice.reducer