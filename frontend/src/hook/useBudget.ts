import type { Budget } from '@/@types';
import { useAppSelector, useAppDispatch } from '@/store';
import { createBudgetAsync, getAllBudgetAsync, updateBudgetAsync } from '@/store/features';


export function useBudget() {
  const dispatch = useAppDispatch();
  const { budgets, isLoading, created, budget, updated } = useAppSelector(
    state => state.budgets
  );

  function getAllBudget() {
    budgets.length === 0 && dispatch(getAllBudgetAsync());
  }
  function createBudget(newBudget: Budget) {
    dispatch(createBudgetAsync(newBudget));
  }

  function updateBudget(modified: Budget) {
    dispatch(updateBudgetAsync(modified));
  }

  return {
    budgets,
    budget,
    isLoading,
    created,
    updated,
    createBudget,
    getAllBudget,
    updateBudget
  };
}
