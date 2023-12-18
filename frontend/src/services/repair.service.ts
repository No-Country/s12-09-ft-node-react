import type { BudgetState, RepairLog } from '@/@types';
import { handleRequest, httpClient } from '@/utils';

const path = 'repairlog';

export async function getAll(): Promise<RepairLog[]> {
  return await handleRequest(httpClient.get(`${path}`));
}

export async function create(newRepair: RepairLog): Promise<RepairLog> {
  return await handleRequest(httpClient.post(`${path}`, newRepair));
}

export async function getOneById(id: string): Promise<RepairLog> {
  return await handleRequest(httpClient.get(`${path}/${id}`));
}

export async function update(
  id: string,
  state: BudgetState
): Promise<RepairLog> {
  return await handleRequest(httpClient.put(`${path}/${id}`, { state }));
}

export async function deleteLog(id: string): Promise<RepairLog> {
  return await handleRequest(httpClient.delete(`${path}/${id}`));
}

export async function sendNotification(id: string): Promise<RepairLog> {
  return await handleRequest(httpClient(`${path}/notification/${id}`));
}
