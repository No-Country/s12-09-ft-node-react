import { useDispatch } from 'react-redux';
import { getWorkShopAsync } from '@/store/features/workshop.slice';
import type { AppDispatch } from '@/store/store';
import { useAppSelector } from '@/store/store';

export const useWorkshop = () => {
  const { workShop } = useAppSelector(state => state.workShop);
  const dispatch: AppDispatch = useDispatch();

  function getWorkShop(id: string) {
    if (workShop.id === '') {
      dispatch(getWorkShopAsync(id));
    }
  }

  return {
    workShop,
    getWorkShop,
  };
};