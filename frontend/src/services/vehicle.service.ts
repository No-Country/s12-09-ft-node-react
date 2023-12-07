import { Vehicle } from '@/@types';
import { httpClient } from '@/utils';

const path = 'vihicle';

export function getAll(): Promise<Vehicle[]> {
  return new Promise((resolve, reject) => {
    httpClient
      .get(`${path}`)
      .then(({ data }) => resolve(data))
      .catch(err => reject(new Error(err)));
  });
}
export function create(newVehicle: Vehicle): Promise<Vehicle> {
  return new Promise((resolve, reject) => {
    httpClient
      .post(`${path}`, newVehicle)
      .then(({ data }) => resolve(data))
      .catch(err => reject(new Error(err)));
  });
}
export function getOneById(id: string): Promise<Vehicle> {
  return new Promise((resolve, reject) => {
    httpClient
      .get(`${path}/${id}`)
      .then(({ data }) => resolve(data))
      .catch(err => reject(new Error(err)));
  });
}
export function update(modified: Vehicle): Promise<Vehicle> {
  return new Promise((resolve, reject) => {
    httpClient
      .put(`${path}/${modified.id}`, modified)
      .then(({ data }) => resolve(data))
      .catch(err => reject(new Error(err)));
  });
}
export function deleteById(id: string): Promise<Vehicle> {
  return new Promise((resolve, reject) => {
    httpClient
      .delete(`${path}/${id}`)
      .then(({ data }) => resolve(data))
      .catch(err => reject(new Error(err)));
  });
}
