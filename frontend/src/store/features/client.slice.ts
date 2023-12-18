import type { User } from '@/@types';
import { clientService } from '@/services';
import {
  type PayloadAction,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';

type UserID = string;
interface State {
  clients: User[];
  isLoading: boolean;
  client?: User;
  created?: User;
  error?: string;
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
  async (id: UserID) => {
    const client = await clientService.getOneById(id);
    return client;
  }
);
export const updateClientAsync = createAsyncThunk(
  'client/update',
  async (modified: User) => {
    const updated = await clientService.update(modified);
    return updated;
  }
);

const clientSlice = createSlice({
  name: 'client',
  initialState,
  reducers: {
    setClientSync(state, action: PayloadAction<User>) {
      return { ...state, client: action.payload };
    },
    cleanCreatedClientSync(state) {
      const { created, ...newState } = state;
      return { ...newState };
    },
  },
  extraReducers(builder) {
    // GETALL
    builder.addCase(getAllClientsAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getAllClientsAsync.fulfilled, (state, action) => {
      state.clients = action.payload;
      state.isLoading = false;
    });

    // * CREATE
    builder.addCase(createClientAsync.pending, state => {
      state.isLoading = true;
      state.error = '';
    });
    builder.addCase(createClientAsync.fulfilled, (state, action) => {
      const newClient = action.payload;
      state.clients.push(newClient);
      state.created = newClient;
      state.isLoading = false;
    });
    builder.addCase(createClientAsync.rejected, (state, action) => {
      state.error = action.error.message;
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

    // UPDATE
    builder.addCase(updateClientAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(updateClientAsync.fulfilled, (state, action) => {
      const updated = action.payload;
      const id = updated.id;
      const index = state.clients.findIndex(item => item.id === id);
      state.clients[index] = updated;
      state.isLoading = false;
    });
  },
});

export const { setClientSync, cleanCreatedClientSync } = clientSlice.actions;
export const clientReducer = clientSlice.reducer;
