import type { Budget } from '@/@types';
import { useAppSelector, useAppDispatch } from '@/store';
import { createBudgetAsync } from '@/store/features';


export function useBudget() {
  const dispatch = useAppDispatch();
  const { budgets, isLoading, created, budget } = useAppSelector(
    state => state.budgets
  );

  function createBudget(newBudget: Budget) {
    dispatch(createBudgetAsync(newBudget));
  }

  return {
    budgets,
    budget,
    isLoading,
    created,
    createBudget,
  };
}
