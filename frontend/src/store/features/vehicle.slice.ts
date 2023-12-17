import type { Vehicle } from '@/@types';
import { vehicleService } from '@/services';
import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit';

type VehicleID = string;
interface State {
  vehicles: Vehicle[];
  isLoading?: boolean;
  vehicle?: Vehicle;
  created?: Vehicle;
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
    // extraigo el usuario y lo inserto en la respuesta del servicio
    const user = newVehicle.user;
    created.user = user;
    return created;
  }
);
export const getOneVehicleByIdAsync = createAsyncThunk(
  'vehicle/getOneById',
  async (id: VehicleID) => {
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

const vehicleSlice = createSlice({
  name: 'vehicle',
  initialState,
  reducers: {
    getOneVehicleByIdSync: (state, action: PayloadAction<VehicleID>) => {
      const id = action.payload;
      const vehicle = state.vehicles.find(item => item.id === id);
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
      const newVehicle = action.payload;
      state.vehicles.push(newVehicle);
      state.created = newVehicle;

      state.isLoading = false;
    });
    // GETBYID
    builder.addCase(getOneVehicleByIdAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getOneVehicleByIdAsync.fulfilled, (state, action) => {
      state.vehicle = action.payload;
      state.isLoading = false;
    });
    //  UPDATE
    builder.addCase(updateVehicleAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(updateVehicleAsync.fulfilled, (state, action) => {
      const updated = action.payload;
      const id = updated.id;
      const index = state.vehicles.findIndex(item => item.id === id);
      state.vehicles[index] = updated;
      state.isLoading = false;
    });
  },
});

export const { getOneVehicleByIdSync } = vehicleSlice.actions;
export const vehicleReducer = vehicleSlice.reducer;
