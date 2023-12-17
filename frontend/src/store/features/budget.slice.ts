import type { Budget } from '@/@types';
import { budgetService } from '@/services';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface State {
  budgets: Budget[];
  isLoading: boolean;
  budget?: Budget;
  created?: Budget;
}

const initialState: State = {
  budgets: [],
  isLoading: false,
};

// thunk functions
export const createBudgetAsync = createAsyncThunk(
  'budget/create',
  async (newBudget: Budget) => {
    const created = await budgetService.create(newBudget);
    return created;
  }
);

const budgetSlice = createSlice({
    name: 'client',
    initialState,
    reducers: {},
    extraReducers(builder) {
      // GETALL
      
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
      
    },
  });
  
  export const budgetReducer = budgetSlice.reducer;