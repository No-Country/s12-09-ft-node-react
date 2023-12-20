import type { BudgetState, RepairLog } from '@/@types';
import { repairService } from '@/services';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface State {
  repairlogs: RepairLog[];
  isLoading: boolean;
  repairlog?: RepairLog;
  created?: RepairLog;
  updated?: RepairLog;
}

const initialState: State = {
  repairlogs: [],
  isLoading: false,
};

export const getAllRepairLogsAsync = createAsyncThunk(
  'reapairlog/getAll',
  async () => {
    const repairLogList = await repairService.getAll();
    return repairLogList;
  }
);

export const createRepairLogAsync = createAsyncThunk(
  'reapairlog/create',
  async (newRepairLog: RepairLog) => {
    const created = await repairService.create(newRepairLog);
    return created;
  }
);

export const getOneRepairLogByIdAsync = createAsyncThunk(
  'reapairlog/getOneById',
  async (id: string) => {
    const repairLog = await repairService.getOneById(id);
    return repairLog;
  }
);

export const deleteRepairLogAsync = createAsyncThunk(
  'repairlog/delete',
  async (id: string) => {
    const deleteLog = await repairService.deleteLog(id);
    return deleteLog;
  }
);

interface tempProps {
  id: string;
  newState: BudgetState;
}

export const updateRepairLogAsync = createAsyncThunk(
  'repairlog/update',
  async ({ id, newState }: tempProps) => {
    const updated = await repairService.update(id, newState);
    return updated;
  }
);

const repairLogSlice = createSlice({
  name: 'repairlog',
  initialState,
  reducers: {},
  extraReducers(builder) {
    // GET ALL
    builder.addCase(getAllRepairLogsAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getAllRepairLogsAsync.fulfilled, (state, action) => {
      state.repairlogs = action.payload;
      state.isLoading = false;
    });

    // CREATE
    builder.addCase(createRepairLogAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(createRepairLogAsync.fulfilled, (state, action) => {
      const newRepairLog = action.payload;
      state.repairlogs.push(newRepairLog);
      state.created = newRepairLog;
      state.isLoading = false;
    });

    // GET BY ID
    builder.addCase(getOneRepairLogByIdAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getOneRepairLogByIdAsync.fulfilled, (state, action) => {
      console.log('GETONE', action.payload);
      state.repairlog = action.payload;
      state.isLoading = false;
    });

    // UPDATE
    // builder.addCase(updateRepairLogAsync.pending, state => {
    //   state.isLoading = true;
    // });
    // builder.addCase(updateRepairLogAsync.fulfilled, (state, action) => {
    //   const { id, newBudget } = action.payload;
    //   const index = state.repairlogs.findIndex(item => item.id === id);
    //   state.repairlogs[index].state = newBudget;
    //   state.updated = newBudget;
    //   state.isLoading = false;
    // });
  },
});

export const repairLogReducer = repairLogSlice.reducer;
