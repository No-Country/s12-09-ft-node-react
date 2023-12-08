import type { Vehicle } from '@/@types';
import { handleRequest, httpClient } from '@/utils';

const path = 'vehicle';

export async function getAll(): Promise<Vehicle[]> {
  return await handleRequest(httpClient.get(`${path}`));
}
export async function create(newVehicle: Vehicle): Promise<Vehicle> {
  return await handleRequest(httpClient.post(`${path}`, newVehicle));
}
export async function getOneById(id: string): Promise<Vehicle> {
  return await handleRequest(httpClient.get(`${path}/${id}`));
}
export async function update(modified: Vehicle): Promise<Vehicle> {
  return await handleRequest(httpClient.put(`${path}/${modified.id}`, modified));
}
// export function deleteById(id: string): Promise<boolean> {
//   return handleRequest(httpClient.delete(`${path}/${id}`));
// }
