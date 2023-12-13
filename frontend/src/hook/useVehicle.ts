import type { Vehicle } from '@/@types';
import { useAppSelector, useAppDispatch } from '@/store';
import {
  getAllVehiclesAsync,
  getOneVehicleByIdAsync,
  createVehicleAsync,
  updateVehicleAsync,
} from '@/store/features';

export function useVehicle() {
  const dispatch = useAppDispatch();
  const { vehicles, vehicle, isLoading } = useAppSelector(
    state => state.vehicles
  );

  function getAllVehicles() {
    vehicles.length === 0 && dispatch(getAllVehiclesAsync());
  }
  function getOneVehicleById(id: string) {
    vehicles.length === 0 && dispatch(getOneVehicleByIdAsync(id));
  }
  function createVehicle(newVehicle: Vehicle) {
    dispatch(createVehicleAsync(newVehicle));
  }
  function updateVehicle(modified: Vehicle) {
    dispatch(updateVehicleAsync(modified));
  }

  return {
    vehicles,
    vehicle,
    isLoading,
    getAllVehicles,
    getOneVehicleById,
    createVehicle,
    updateVehicle,
  };
}
