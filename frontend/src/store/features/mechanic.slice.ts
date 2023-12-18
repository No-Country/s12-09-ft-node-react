import type { Mechanic } from '@/@types';
import { mechanicService } from '@/services';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface State {
  mechanics: Mechanic[];
  isLoading: boolean;
  mechanic?: Mechanic;
  created?: Mechanic;
  error?: string;
}

const initialState: State = {
  mechanics: [],
  isLoading: false,
};

// thunk functions
export const getAllMechanicsAsync = createAsyncThunk(
  'mechanic/getAll',
  async () => {
    const mechanicList = await mechanicService.getAll();
    return mechanicList;
  }
);
export const createMechanicAsync = createAsyncThunk(
  'mechanic/create',
  async (newMechanic: Mechanic) => {
    const created = await mechanicService.create(newMechanic);
    return created;
  }
);
export const getOneMechanicByIdAsync = createAsyncThunk(
  'mechanic/getOneById',
  async (id: string) => {
    const mechanic = await mechanicService.getOneById(id);
    return mechanic;
  }
);

const mechanicSlice = createSlice({
  name: 'mechanic',
  initialState,
  reducers: {
    cleanCreatedMechanicSync(state) {
      const { created, ...newState } = state;
      return { ...newState };
    },
  },
  extraReducers(builder) {
    // GETALL
    builder.addCase(getAllMechanicsAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getAllMechanicsAsync.fulfilled, (state, action) => {
      state.mechanics = action.payload;
      state.isLoading = false;
    });

    // * CREATE
    builder.addCase(createMechanicAsync.pending, state => {
      state.isLoading = true;
      state.error = '';
    });
    builder.addCase(createMechanicAsync.fulfilled, (state, action) => {
      const newMechanic = action.payload;
      state.mechanics.push(newMechanic);
      state.created = newMechanic;
      state.isLoading = false;
    });
    builder.addCase(createMechanicAsync.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    });

    // GETBYID
    builder.addCase(getOneMechanicByIdAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getOneMechanicByIdAsync.fulfilled, (state, action) => {
      console.log('GETONE', action.payload);
      state.isLoading = false;
    });
  },
});

export const { cleanCreatedMechanicSync } = mechanicSlice.actions;
export const mechanicReducer = mechanicSlice.reducer;
