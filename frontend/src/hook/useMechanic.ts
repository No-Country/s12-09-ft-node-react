'use client';
import { useDispatch } from 'react-redux';
import { createMechanicAsync } from '@/store/features/mechanic.slice';
import { useAppSelector } from '@/store/store';

import type { AppDispatch } from '@/store/store';
import type { Mechanic } from '@/@types';

export const useMechanic = () => {
  const { mechanics } = useAppSelector(state => state.mechanics);
  const dispatch: AppDispatch = useDispatch();

  function createMechanic(mechanic: Mechanic) {
    dispatch(createMechanicAsync(mechanic));
  }

  return {
    mechanics,
    createMechanic,
  };
};
