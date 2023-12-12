import type { NewVehicle, Vehicle } from '@/@types';
import { vehicleService } from '@/services';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface State {
  vehicles: Vehicle[];
  isLoading: boolean;
}

const initialState: State = {
  vehicles: [],
  isLoading: false,
};

// thunk functions
export const getAllVehiclesAsync = createAsyncThunk(
  'vehicle/getAll',
  async () => {
    const vehicleList = await vehicleService.getAll();
    return vehicleList;
  }
);
export const createVehicleAsync = createAsyncThunk(
  'vehicle/create',
  async (newVehicle: NewVehicle, { rejectWithValue }) => {
    try {
      const created = await vehicleService.create(newVehicle);
      return created;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const getOneVehicleByIdAsync = createAsyncThunk(
  'vehicle/getOneById',
  async (id: string) => {
    const vehicle = await vehicleService.getOneById(id);
    return vehicle;
  }
);
export const updateVehicleAsync = createAsyncThunk(
  'vehicle/update',
  async (modified: Vehicle) => {
    const updated = await vehicleService.update(modified);
    return updated;
  }
);
// export const deleteVehicleByIdAsync = createAsyncThunk(
//   'vehicle/deleteById',
//   async (id: string) => {
//     await vehicleService.deleteById(id);
//   }
// );

const vehicleSlice = createSlice({
  name: 'vehicle',
  initialState,
  reducers: {},
  extraReducers(builder) {
    // GETALL
    builder.addCase(getAllVehiclesAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getAllVehiclesAsync.fulfilled, (state, action) => {
      state.vehicles = action.payload;
      state.isLoading = false;
    });
    // CREATE
    builder.addCase(createVehicleAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(createVehicleAsync.fulfilled, (state, action) => {
      console.log('CREATE', action.payload);
      state.isLoading = false;
    });
    // GETBYID
    builder.addCase(getOneVehicleByIdAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getOneVehicleByIdAsync.fulfilled, (state, action) => {
      console.log('GETONE', action.payload);
      state.isLoading = false;
    });
    //  UPDATE
    builder.addCase(updateVehicleAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(updateVehicleAsync.fulfilled, (state, action) => {
      console.log('UPDATE', action.payload);
      state.isLoading = false;
    });
    //  DELETE
  },
});

export const vehicleReducer = vehicleSlice.reducer;
