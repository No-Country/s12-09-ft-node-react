import type { NewVehicle, Vehicle } from '@/@types';
import { useAppSelector, useAppDispatch } from '@/store';
import {
  getAllVehiclesAsync,
  getOneVehicleByIdAsync,
  createVehicleAsync,
  updateVehicleAsync,
} from '@/store/features';
import { unwrapResult } from '@reduxjs/toolkit';

export function useVehicle() {
  const dispatch = useAppDispatch();
  const { vehicles, vehicleById, isLoading } = useAppSelector(
    state => state.vehicles
  );

  function getAllVehicles() {
    vehicles.length === 0 && dispatch(getAllVehiclesAsync());
  }
  function getOneVehicleById(id: string) {
    dispatch(getOneVehicleByIdAsync(id));
  }
  const createVehicle = async (newVehicle: NewVehicle) => {
    const actionResult = await dispatch(createVehicleAsync(newVehicle));
    return unwrapResult(actionResult);
  };
  function updateVehicle(modified: Vehicle) {
    dispatch(updateVehicleAsync(modified));
  }

  return {
    vehicles,
    vehicleById,
    isLoading,
    getAllVehicles,
    getOneVehicleById,
    createVehicle,
    updateVehicle,
  };
}
