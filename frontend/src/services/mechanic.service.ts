import type { Mechanic } from '@/@types';
import { handleRequest, httpClient } from '@/utils';

const path = 'mechanic';

export async function getAll(): Promise<Mechanic[]> {
  return await handleRequest(httpClient.get(`${path}`));
}
export async function create(newMechanic: Mechanic): Promise<Mechanic> {
  return await handleRequest(httpClient.post(`${path}`, newMechanic));
}
export async function getOneById(id: string): Promise<Mechanic> {
  return await handleRequest(httpClient.get(`${path}/${id}`));
}
