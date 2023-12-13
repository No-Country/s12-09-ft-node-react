import { type Workshop } from '@/@types';
import {
  getWorkShopAsync,
  loginWorkShopAsync,
  createWorkShopAsync,
} from '@/store/features/workshop.slice';
import { useAppSelector, useAppDispatch } from '@/store/store';

export const useWorkshop = () => {
  const { workShop } = useAppSelector(state => state.workShop);
  const dispatch = useAppDispatch();

  function getWorkShop(id: string) {
    if (workShop.id === '') {
      dispatch(getWorkShopAsync(id));
    }
  }
  function createWorkshop(newWorkshop: Workshop) {
    dispatch(createWorkShopAsync(newWorkshop));
  }
  function loginWorkShop(loginObject: Workshop) {
    dispatch(loginWorkShopAsync(loginObject));
  }

  return {
    workShop,
    getWorkShop,
    createWorkshop,
    loginWorkShop,
  };
};
