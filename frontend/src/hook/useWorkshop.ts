'use client';
import type { Workshop } from '@/@types';
import {
  getWorkshopAsync,
  loginWorkshopAsync,
  createWorkshopAsync,
} from '@/store/features/workshop.slice';
import { useAppSelector, useAppDispatch } from '@/store/store';

export const useWorkshop = () => {
  const { workshop, logged, isLoading } = useAppSelector(
    state => state.workshop
  );
  const dispatch = useAppDispatch();

  function getWorkshop(id: string) {
    if (workshop.id === '') {
      dispatch(getWorkshopAsync(id));
    }
  }
  function createWorkshop(newWorkshop: Workshop) {
    dispatch(createWorkshopAsync(newWorkshop));
  }
  function loginWorkshop(loginObject: Workshop) {
    dispatch(loginWorkshopAsync(loginObject));
  }

  return {
    workshop,
    logged,
    isLoading,
    getWorkshop,
    createWorkshop,
    loginWorkshop,
  };
};
