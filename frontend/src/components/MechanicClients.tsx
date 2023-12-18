import type { Vehicle } from '@/@types';
import { CardService } from './CardService';

const listVehicles: Vehicle[] = [
  {
    id: '1051928b-69a9-448f-8d00-63d258e94540',
    brand: 'Mercedes',
    model: 'AMG GT',
    color: 'white',
    year: 2012,
    licensePlate: 'hdksar8',
    mileage: 3040,
    imageUrl:
      'https://jamaicaautoauctions.com/wp-content/uploads/2019/11/default-car.jpg',
    userId: '2602bc97-33a9-44ca-8f28-2c659faa7c15',
    createdAt: '2023-12-06T15:28:52.628Z',
    updatedAt: '2023-12-06T15:28:52.628Z',
    user: {
      id: '2602bc97-33a9-44ca-8f28-2c659faa7c15',
      lastName: 'Gonzalez',
      firstName: 'Miguel',
      email: 'miguelgonzalez6@hotmail.com',
      phone: '1122332216',
      rol: 'user',
      pass: '$2b$10$LPBX6U6OLdU29xbPTnLCIu7dPIVvjc6J1TbcMex/b57riMZNMKFQm',
      document: 12312316,
    },
    repairLog: [],
  },
  {
    id: 'a55b4ece-5255-4df9-b531-2b564c1e8c5a',
    brand: 'BMW',
    model: 'i8',
    color: 'red',
    year: 2014,
    licensePlate: 'hdksap6',
    mileage: 2838,
    imageUrl:
      'https://jamaicaautoauctions.com/wp-content/uploads/2019/11/default-car.jpg',
    userId: '43c5a993-fe61-47a8-901d-69922160400f',
    createdAt: '2023-12-06T15:28:28.079Z',
    updatedAt: '2023-12-06T15:28:28.079Z',
    user: {
      id: '43c5a993-fe61-47a8-901d-69922160400f',
      lastName: 'Martinez',
      firstName: 'Luis',
      email: 'luismartinez4@hotmail.com',
      phone: '1122332214',
      rol: 'user',
      pass: '$2b$10$No/S9Tps2Dc77tK1D54qY.aRZpITrK/ZXobvbB.f7HRyP//X1IQ4O',
      document: 12312314,
    },
    repairLog: [],
  },
  {
    id: 'a55b4ece-5255-4df9-b531-2b564c1e7c5a',
    brand: 'BMW',
    model: 'i8',
    color: 'red',
    year: 2014,
    licensePlate: 'hdksap6',
    mileage: 2838,
    imageUrl:
      'https://jamaicaautoauctions.com/wp-content/uploads/2019/11/default-car.jpg',
    userId: '43c5a993-fe61-47a8-901d-69922160400f',
    createdAt: '2023-12-06T15:28:28.079Z',
    updatedAt: '2023-12-06T15:28:28.079Z',
    user: {
      id: '43c5a993-fe61-47a8-901d-69922160409f',
      lastName: 'Martinez',
      firstName: 'Luis',
      email: 'luismartinez4@hotmail.com',
      phone: '1122332214',
      rol: 'user',
      pass: '$2b$10$No/S9Tps2Dc77tK1D54qY.aRZpITrK/ZXobvbB.f7HRyP//X1IQ4O',
      document: 12312314,
    },
    repairLog: [],
  },
];

export const MechanicClients = () => {
  return (
    <div className='max-w-7xl w-full mx-auto px-3'>
      <div className='m-5 flex flex-col'>
        <div>
          <h1 className='text-secondary font-bold my-2'>Mecanico Pepe</h1>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5  w-full'>
            {listVehicles.map(item => (
              <CardService key={item.id} vehicle={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
