import type { User } from '@/@types';
import { handleRequest, httpClient } from '@/utils';

const path = 'user';

export async function getAll(): Promise<User[]> {
  return await handleRequest(httpClient.get(`${path}`));
}
export async function create(newClient: User): Promise<User> {
  return await handleRequest(httpClient.post(`${path}`, newClient));
}
export async function getOneById(id: string): Promise<User> {
  return await handleRequest(httpClient.get(`${path}/${id}`));
}
export async function update(modified: User): Promise<User> {
  return await handleRequest(httpClient.put(`${path}/${modified.id}`, modified));
}
// export async function deleteById(id: string): Promise<boolean> {
//   return handleRequest(httpClient.delete(`${path}/${id}`));
// }
