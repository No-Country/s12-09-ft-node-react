import { useDispatch } from 'react-redux';
import { getAllVehiclesAsync } from '@/store/features/vehicle.slice';
import type { AppDispatch } from '@/store/store';
import { useAppSelector } from '@/store/store';

export const useCar = () => {
  const { vehicles: cars } = useAppSelector(state => state.vehicles);
  const dispatch: AppDispatch = useDispatch();

  function getAllCars() {
    if (cars.length === 0) {
      dispatch(getAllVehiclesAsync());
    }
  }

  return {
    cars,
    getAllCars,
  };
};
