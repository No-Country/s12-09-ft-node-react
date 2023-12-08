import type { User } from '@/@types';
import { useAppSelector, useAppDispatch } from '@/store';
import {
  getAllClientsAsync,
  getOneClientByIdAsync,
  createClientAsync,
  updateClientAsync,
} from '@/store/features';

export function useClient() {
  const displatch = useAppDispatch();
  const { clients, isLoading } = useAppSelector(state => state.clients);

  function getAllClients() {
    clients.length === 0 && displatch(getAllClientsAsync());
  }
  function getOneClientById(id: string) {
    displatch(getOneClientByIdAsync(id));
  }
  function createClient(newClient: User) {
    displatch(createClientAsync(newClient));
  }
  function updateClient(modified: User) {
    displatch(updateClientAsync(modified));
  }

  return {
    clients,
    isLoading,
    getAllClients,
    getOneClientById,
    createClient,
    updateClient,
  };
}
