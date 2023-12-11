import type { WorkShopModel } from '@/model';
import { httpClient } from '@/utils';
import axios from 'axios';

const path = 'workshop';

export const createWorkShop = async (
  newWorkshop: WorkShopModel
): Promise<WorkShopModel> => {
  return await new Promise((resolve, reject) => {
    axios('https://mechanicalertbackend.onrender.com/api/v1/workshop', {
      method: 'post',
      data: newWorkshop,
    })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err);
      });
  });

  // return await handleRequest(httpClient.post(`${path}`, newWorkshop));
};

export const getWorkShop = async (id: string): Promise<WorkShopModel> => {
  return await new Promise((resolve, reject) => {
    httpClient
      .get(`${path}/${id}`)
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};
