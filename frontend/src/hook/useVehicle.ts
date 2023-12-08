import type { Vehicle } from '@/@types';
import { useAppSelector, useAppDispatch } from '@/store';
import {
  getAllVehiclesAsync,
  getOneVehicleByIdAsync,
  createVehicleAsync,
  updateVehicleAsync,
} from '@/store/features';

export function useVehicle() {
  const displatch = useAppDispatch();
  const { vehicles, isLoading } = useAppSelector(state => state.vehicles);

  function getAllVehicles() {
    vehicles.length === 0 && displatch(getAllVehiclesAsync());
  }
  function getOneVehicleById(id: string) {
    displatch(getOneVehicleByIdAsync(id));
  }
  function createVehicle(newVehicle: Vehicle) {
    displatch(createVehicleAsync(newVehicle));
  }
  function updateVehicle(modified: Vehicle) {
    displatch(updateVehicleAsync(modified));
  }

  return {
    vehicles,
    isLoading,
    getAllVehicles,
    getOneVehicleById,
    createVehicle,
    updateVehicle,
  };
}
