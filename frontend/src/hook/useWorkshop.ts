import { useDispatch } from 'react-redux';
import { getWorkShopAsync } from '@/store/features/workShop/workShopSlice';
import type { AppDispatch } from '@/store/store';
import { useAppSelector } from '@/store/store';

export const useWorkshop = () => {
  const { workShop } = useAppSelector(state => state.workShop);
  const dispatch: AppDispatch = useDispatch();

  function getWorkShop() {
    if (workShop.id === '') {
      dispatch(getWorkShopAsync());
    }
  }

  return {
    workShop,
    getWorkShop,
  };
};
