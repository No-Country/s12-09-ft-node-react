import type { Mechanic } from '@/@types';
import { mechanicService } from '@/services';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface State {
  mechanics: Mechanic[];
  isLoading: boolean;
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
export const updateMechanicAsync = createAsyncThunk(
  'mechanic/update',
  async (modified: Mechanic) => {
    const updated = await mechanicService.update(modified);
    return updated;
  }
);
// export const deleteMechanicByIdAsync = createAsyncThunk(
//   'mechanic/deleteById',
//   async (id: string) => {
//     await mechanicService.deleteById(id);
//   }
// );

const mechanicSlice = createSlice({
  name: 'mechanic',
  initialState,
  reducers: {},
  extraReducers(builder) {
    // GETALL
    builder.addCase(getAllMechanicsAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getAllMechanicsAsync.fulfilled, (state, action) => {
      state.mechanics = action.payload;
      state.isLoading = false;
    });
    // CREATE
    builder.addCase(createMechanicAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(createMechanicAsync.fulfilled, (state, action) => {
      console.log('CREATE', action.payload);
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
    //  UPDATE
    builder.addCase(updateMechanicAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(updateMechanicAsync.fulfilled, (state, action) => {
      console.log('UPDATE', action.payload);
      state.isLoading = false;
    });
    //  DELETE
  },
});

export const mechanicReducer = mechanicSlice.reducer;
