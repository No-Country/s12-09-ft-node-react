'use client';
import { useDispatch } from 'react-redux';
import { createMechanicAsync, getAllMechanicsAsync } from '@/store/features/mechanic.slice';
import { useAppSelector } from '@/store/store';

import type { AppDispatch } from '@/store/store';
import type { Mechanic } from '@/@types';

export const useMechanic = () => {
  const { mechanics, isLoading, mechanic, created, error } = useAppSelector(
    state => state.mechanics
  );
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
    getAllClients,
    createMechanic,
    getAllMechanic
  };
};
