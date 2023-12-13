import type { User } from '@/@types';
import { clientService } from '@/services';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface State {
  clients: User[];
  isLoading: boolean;
  client?: User;
  created?: User;
}

const initialState: State = {
  clients: [],
  isLoading: false,
};

// thunk functions
export const getAllClientsAsync = createAsyncThunk(
  'client/getAll',
  async () => {
    const clients = await clientService.getAll();
    return clients;
  }
);
export const createClientAsync = createAsyncThunk(
  'client/create',
  async (newClient: User) => {
    const created = await clientService.create(newClient);
    return created;
  }
);
export const getOneClientByIdAsync = createAsyncThunk(
  'client/getOneById',
  async (id: string) => {
    const client = await clientService.getOneById(id);
    return client;
  }
);

const clientSlice = createSlice({
  name: 'client',
  initialState,
  reducers: {},
  extraReducers(builder) {
    // GETALL
    builder.addCase(getAllClientsAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getAllClientsAsync.fulfilled, (state, action) => {
      state.clients = action.payload;
      state.isLoading = false;
    });
    // CREATE
    builder.addCase(createClientAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(createClientAsync.fulfilled, (state, action) => {
      const newClient = action.payload;
      state.clients.push(newClient);
      state.isLoading = false;
    });
    // GETBYID
    builder.addCase(getOneClientByIdAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getOneClientByIdAsync.fulfilled, (state, action) => {
      const client = action.payload;
      state.client = client;
      state.isLoading = false;
    });
  },
});

export const clientReducer = clientSlice.reducer;
