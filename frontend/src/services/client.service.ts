import { User } from '@/@types';
import { handleRequest, httpClient } from '@/utils';

const path = 'user';

export function getAll(): Promise<User[]> {
  return handleRequest(httpClient.get(`${path}`));
}
export function create(newClient: User): Promise<User> {
  return handleRequest(httpClient.post(`${path}`, newClient));
}
export function getOneById(id: string): Promise<User> {
  return handleRequest(httpClient.get(`${path}/${id}`));
}
export function update(modified: User): Promise<User> {
  return handleRequest(httpClient.put(`${path}/${modified.id}`, modified));
}
// export function deleteById(id: string): Promise<boolean> {
//   return handleRequest(httpClient.delete(`${path}/${id}`));
// }
