'use client';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { MechanicModel } from '@/model';

import { createMechanic } from '@/services'

export interface mechanicState {
    value: MechanicModel[]
}

const initialState: mechanicState = {
    value: []
}

export const createMechanicAsync = createAsyncThunk(
    'mechanic/create',
    async (mechanic:MechanicModel) => {
        return await createMechanic(mechanic)
        
    }
)

export const mechanicSlice = createSlice({
    name: 'mechanics',
    initialState,
    reducers: {
         
    },
    // extraReducers: (builder) => {
    //     builder.addCase(createMechanicAsync.fulfilled, (state, action) => {
    //         state.value = action.payload
    //     })
    // }
})

// export const { getAllmechanic } = mechanicSlice.actions;
// export default mechanicSlice.reducer;

export const mechanicReducer = mechanicSlice.reducer