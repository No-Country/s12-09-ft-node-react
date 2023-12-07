import { Vehicle } from '@/@types';
import { handleRequest, httpClient } from '@/utils';

const path = 'vehicle';

export function getAll(): Promise<Vehicle[]> {
  return handleRequest(httpClient.get(`${path}`));
}
export function create(newVehicle: Vehicle): Promise<Vehicle> {
  return handleRequest(httpClient.post(`${path}`, newVehicle));
}
export function getOneById(id: string): Promise<Vehicle> {
  return handleRequest(httpClient.get(`${path}/${id}`));
}
export function update(modified: Vehicle): Promise<Vehicle> {
  return handleRequest(httpClient.put(`${path}/${modified.id}`, modified));
}
export function deleteById(id: string): Promise<Vehicle> {
  return handleRequest(httpClient.delete(`${path}/${id}`));
}
