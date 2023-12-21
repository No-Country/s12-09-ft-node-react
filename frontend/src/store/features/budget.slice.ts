import type { Budget } from '@/@types';
import { budgetService } from '@/services';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface State {
  budgets: Budget[];
  isLoading: boolean;
  budget?: Budget;
  created?: Budget;
  updated?: Budget;
}

const initialState: State = {
  budgets: [],
  isLoading: false,
};

// thunk functions
export const getAllBudgetAsync = createAsyncThunk(
  'budget/getAll',
  async () => {
    const budgets = await budgetService.getAll();
    return budgets;
  }
);
export const createBudgetAsync = createAsyncThunk(
  'budget/create',
  async (newBudget: Budget) => {
    const created = await budgetService.create(newBudget);
    return created;
  }
);
export const updateBudgetAsync = createAsyncThunk(
  'client/update',
  async (modified: Budget) => {
    const updated = await budgetService.update(modified);
    return updated;
  }
);

const budgetSlice = createSlice({
    name: 'client',
    initialState,
    reducers: {},
    extraReducers(builder) {
      // GETALL
      builder.addCase(getAllBudgetAsync.pending, state => {
        state.isLoading = true;
      });
      builder.addCase(getAllBudgetAsync.fulfilled, (state, action) => {
        state.budgets = action.payload;
        state.isLoading = false;
      });
      
      // CREATE
      builder.addCase(createBudgetAsync.pending, state => {
        state.isLoading = true;
      });
      builder.addCase(createBudgetAsync.fulfilled, (state, action) => {
        const newBudget = action.payload;
        state.budgets.push(newBudget);
        state.created = newBudget;
        state.isLoading = false;
      });
      // GETBYID
      
      // UPDATE
      builder.addCase(updateBudgetAsync.pending, state => {
        state.isLoading = true;
      });
      builder.addCase(updateBudgetAsync.fulfilled, (state, action) => {
        const updated = action.payload;
        const id = updated.id;
        const index = state.budgets.findIndex(item => item.id === id);
        state.budgets[index] = updated;
        state.updated = updated
        state.isLoading = false;
      });
    },
  });
  
  export const budgetReducer = budgetSlice.reducer;