import { useDispatch } from 'react-redux';
import { getAllCarAsync } from '@/store/features/car/carSlice'
import type { AppDispatch } from '@/store/store';
import  { useAppSelector } from '@/store/store';


export const useCar = () => {
    const { value: cars } = useAppSelector(state => state.cars)
    const dispatch:AppDispatch = useDispatch();

    function getAllCars() {
        if (cars.length === 0) {
            dispatch(getAllCarAsync());
        }
    }

    return {
        cars,
        getAllCars,
    }
}