import { createSlice } from '@reduxjs/toolkit';

interface ClientModal {
    isOpen: boolean,
    userData: null
}

interface VehicleModel {
    isOpen: boolean,
    userId: null,
    vehicleData: null
}

export interface State {
    clientModal: ClientModal;
    vehicleModal: VehicleModel
}

const initialState: State = {
    clientModal: {
      isOpen: false,
      userData: null,
    },
    vehicleModal: {
      isOpen: false,
      userId: null,
      vehicleData: null,
    },
  };
  

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openClientModal: (state) => {
      state.clientModal.isOpen = true;
    },
    closeClientModal: (state) => {
      state.clientModal.isOpen = false;
    },
    setUserData: (state, action) => {
      state.clientModal.userData = action.payload;
    },
    openVehicleModal: (state, action) => {
      state.vehicleModal.isOpen = true;
      state.vehicleModal.userId = action.payload;
    },
    closeVehicleModal: (state) => {
      state.vehicleModal.isOpen = false;
    },
    setVehicleData: (state, action) => {
      state.vehicleModal.vehicleData = action.payload;
    },
  },
});

export const {
    openClientModal,
    closeClientModal,
    setUserData,
    openVehicleModal,
    closeVehicleModal,
    setVehicleData,
  } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;