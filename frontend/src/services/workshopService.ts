import type { WorkShopModel } from '@/model';
import { httpClient } from '@/utils';

const path = 'workshop';

export const createWorkShop = async (
  newWorkshop: WorkShopModel
): Promise<WorkShopModel> => {
  return await new Promise((resolve, reject) => {
    httpClient
      .post(`${path}`, newWorkshop)
      .then(response => {resolve(response.data)})
      .catch(err => {reject(err)});
  });
};
export const getWorkShop = async (id: string): Promise<WorkShopModel> => {
  return await new Promise((resolve, reject) => {
    httpClient
      .get(`${path}/${id}`)
      .then(response => {resolve(response.data)})
      .catch(err => {reject(err)});
  });
};
