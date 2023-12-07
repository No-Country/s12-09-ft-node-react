import type { WorkShopModel } from '@/model';
import axios from 'axios';

const API = 'https://mechanicalertbackend.onrender.com/api/v1/';

export const createWorkShop = async (
  newWorkshop: WorkShopModel
): Promise<WorkShopModel> => {
  return await new Promise((resolve, reject) => {
    axios
      .post(`${API}workshop`, newWorkshop)
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const getWorkShop = async (id: string): Promise<WorkShopModel> => {
  return await new Promise((resolve, reject) => {
    axios
      .get(`${API}workshop/${id}`)
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};
