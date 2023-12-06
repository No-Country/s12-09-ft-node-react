import type { CarModel, MechanicModel } from '@/model';
import axios from 'axios';

export const createMechanic = async (
  mechanic: MechanicModel
): Promise<MechanicModel[]> => {
  return await new Promise((resolve, rejects) => {
    axios('https://mechanicalertbackend.onrender.com/api/v1/mechanic',{
      method: 'post',
      data: mechanic,
    })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        rejects(err);
      });
  });
};
