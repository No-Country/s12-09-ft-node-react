import type { User } from '@/@types';
import { clientService } from '@/services';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import swal from 'sweetalert';

interface State {
  clients: User[];
  isLoading: boolean;
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
  'user',
  async (newClient: User) => {
    try {
      const created = await clientService.create(newClient);
      await swal('Cliente registrado', '', 'success');
      return created
    } catch (error) {
      await swal('No se pudo registrar el cliente', '', 'error');
      return undefined
    }
  }
);
export const getOneClientByIdAsync = createAsyncThunk(
  'client/getOneById',
  async (id: string) => {
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
// export const deleteClientByIdAsync = createAsyncThunk(
//   'client/delete',
//   async (id: string) => {
//     return;
//   }
// );

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
      console.log('CLIENT/CREATE', action.payload);
      const newClient = action.payload;
      newClient !== undefined && state.clients.push(newClient);
      state.isLoading = false;
    });
    // GETBYID
    builder.addCase(getOneClientByIdAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getOneClientByIdAsync.fulfilled, (state, action) => {
      console.log('CLIENT/GETONE', action.payload);
      state.isLoading = false;
    });
    //  UPDATE
    builder.addCase(updateClientAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(updateClientAsync.fulfilled, (state, action) => {
      console.log('CLIENT/UPDATE', action.payload);
      state.isLoading = false;
    });
    //  DELETE
  },
});

export const clientReducer = clientSlice.reducer;
