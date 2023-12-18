'use client';
import type { Vehicle } from '@/@types';
import { useAppSelector, useAppDispatch } from '@/store';
import {
  getAllVehiclesAsync,
  getOneVehicleByIdAsync,
  createVehicleAsync,
  updateVehicleAsync,
  getOneVehicleByIdSync,
  cleanCreatedVehicleSync,
} from '@/store/features';

export function useVehicle() {
  const dispatch = useAppDispatch();
  const { vehicles, isLoading, vehicle, created, error } = useAppSelector(
    state => state.vehicles
  );

  function getAllVehicles() {
    if (vehicles.length === 0) dispatch(getAllVehiclesAsync());
  }
  function getOneVehicleById(id: string) {
    if (vehicles.length === 0) dispatch(getOneVehicleByIdAsync(id));
    else dispatch(getOneVehicleByIdSync(id));
  }
  function createVehicle(newVehicle: Vehicle) {
    dispatch(createVehicleAsync(newVehicle));
  }
  function updateVehicle(modified: Vehicle) {
    dispatch(updateVehicleAsync(modified));
  }
  function cleanCreatedVehicle() {
    dispatch(cleanCreatedVehicleSync());
  }

  return {
    vehicles,
    isLoading,
    vehicle,
    created,
    error,
    getAllVehicles,
    getOneVehicleById,
    createVehicle,
    updateVehicle,
    cleanCreatedVehicle,
  };
}
