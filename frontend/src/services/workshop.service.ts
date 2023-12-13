import type { LoginResult, Workshop } from '@/@types';
import { handleRequest, httpClient } from '@/utils';

const path = 'workshop';

export async function getAll(): Promise<Workshop[]> {
  return await handleRequest(httpClient.get(`${path}`));
}
export async function create(newWorkshop: Workshop): Promise<Workshop> {
  return await handleRequest(httpClient.post(`${path}`, newWorkshop));
}
export async function getOneById(id: string): Promise<Workshop> {
  return await handleRequest(httpClient.get(`${path}/${id}`));
}
export async function update(modified: Workshop): Promise<Workshop> {
  return await handleRequest(
    httpClient.put(`${path}/${modified.id}`, modified)
  );
}
export async function login(object: Workshop): Promise<LoginResult> {
  return await handleRequest(httpClient.post(`${path}/login`, object));
}
