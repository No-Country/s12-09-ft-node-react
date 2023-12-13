import type { Vehicle } from '@/@types';
import { vehicleService } from '@/services';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

type VehicleID = string;
interface State {
  vehicles: Vehicle[];
  isLoading?: boolean;
  vehicle: Vehicle;
}

const initialState: State = {
  vehicles: [],
  isLoading: false,
  vehicle: {},
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
  async (newVehicle: Vehicle) => {
    const created = await vehicleService.create(newVehicle);
    return created;
  }
);
export const getOneVehicleByIdAsync = createAsyncThunk(
  'vehicle/getOneById',
  async (id: VehicleID) => {
    const vehicle = await vehicleService.getOneById(id);
    console.log(vehicle);
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
  reducers: {
    getOneVehicleByIdAsync: (state, action) => {
      const id = action.payload;
      const vehicle = state.vehicles.find(item => item.userId === id);
      return { ...state, vehicle };
    },
  },
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
      state.vehicle = action.payload;
      console.log(action.payload);
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
