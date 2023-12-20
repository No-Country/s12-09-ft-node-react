'use client';

import type { RepairLog } from '@/@types';
import { useAppSelector, useAppDispatch } from '@/store/store';
import {
  createRepairLogAsync,
  getAllRepairLogsAsync,
  getOneRepairLogByIdAsync,
  //   updateRepairLogAsync,
} from '@/store/features';

export function useRepairLog() {
  const dispatch = useAppDispatch();
  const { repairlogs, isLoading, created, repairlog, updated } = useAppSelector(
    state => state.repairlog
  );

  function getAllRepairLog() {
    repairlogs.length === 0 && dispatch(getAllRepairLogsAsync());
  }

  function getRepairLogById(id: string) {
    dispatch(getOneRepairLogByIdAsync(id));
    if (repairlogs.length === 0) dispatch(getOneRepairLogByIdAsync(id));
    else dispatch(getOneRepairLogByIdAsync(id));
  }

  function createRepairLog(newRepairLog: RepairLog) {
    dispatch(createRepairLogAsync(newRepairLog));
  }

  //   function updateRepairLog(id: string, budget: BudgetState) {
  //     dispatch(updateRepairLogAsync(id, budget));
  //   }

  return {
    repairlogs,
    repairlog,
    isLoading,
    created,
    updated,
    createRepairLog,
    getAllRepairLog,
    getRepairLogById,
    // updateRepairLog,
  };
}
