import { useDispatch } from 'react-redux';
import {
  createMechanicAsync,
  getAllMechanicsAsync,
} from '@/store/features/mechanic.slice';
import { useAppSelector } from '@/store/store';

import type { AppDispatch } from '@/store/store';
import type { Mechanic } from '@/@types';
import { unwrapResult } from '@reduxjs/toolkit';

export const useMechanic = () => {
  const { mechanics } = useAppSelector(state => state.mechanics);
  const dispatch: AppDispatch = useDispatch();

  async function createMechanic(mechanic: Mechanic) {
    const actionResult = await dispatch(createMechanicAsync(mechanic));
    return unwrapResult(actionResult);
  }

  function getAllMechanic() {
    if (mechanics.length === 0) {
      dispatch(getAllMechanicsAsync());
    }
  }

  return {
    mechanics,
    createMechanic,
    getAllMechanic,
  };
};
