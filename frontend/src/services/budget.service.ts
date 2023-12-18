import type { Budget } from '@/@types';
import { handleRequest, httpClient } from '@/utils';

const path = 'budget';

export async function getAll(): Promise<Budget[]> {
  return await handleRequest(httpClient.get(`${path}`));
}

export async function create(newBudget: Budget): Promise<Budget> {
  return await handleRequest(httpClient.post(`${path}`, newBudget));
}

export async function update(modified: Budget): Promise<Budget> {
  return await handleRequest(httpClient.put(`${path}/${modified.id}`, modified));
}
