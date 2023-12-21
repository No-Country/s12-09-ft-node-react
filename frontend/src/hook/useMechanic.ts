'use client';
import {
  createMechanicAsync,
  getAllMechanicsAsync
} from '@/store/features/mechanic.slice';
import { useAppSelector } from '@/store/store';
import { useDispatch } from 'react-redux';

import type { Mechanic } from '@/@types';
import type { AppDispatch } from '@/store/store';

export const useMechanic = () => {
  const { mechanics, isLoading, mechanic, created, error, logged } =
    useAppSelector(state => state.mechanics);
  const dispatch: AppDispatch = useDispatch();

  function getAllClients() {
    mechanics.length === 0 && dispatch(getAllMechanicsAsync());
  }

  function createMechanic(mechanic: Mechanic) {
    dispatch(createMechanicAsync(mechanic));
  }
  function getAllMechanic() {
    if (mechanics.length === 0) {
      dispatch(getAllMechanicsAsync());
    }
  }

  return {
    mechanics,
    isLoading,
    mechanic,
    created,
    error,
    logged,
    getAllClients,
    createMechanic,
    getAllMechanic
  };
};
