import React from 'react'
import { useDispatch } from 'react-redux';
import { getAllCarAsync } from '@/store/features/car/carSlice'
import { AppDispatch, useAppSelector } from '@/store/store';

export const useCar = () => {
    const { value: cars } = useAppSelector(state => state.cars)
    const dispatch:AppDispatch = useDispatch();

    function getAllCars() {
        if (!cars.length) {
            dispatch(getAllCarAsync());
        }
    }

    return {
        cars,
        getAllCars
    }
}