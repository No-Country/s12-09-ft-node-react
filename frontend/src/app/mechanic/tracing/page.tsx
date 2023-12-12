'use client';

import type { Vehicle } from '@/@types';
import { CardService } from '@/app/client/components/CardService';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

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
    id: 'a55b4ece-5255-4df9-asdasd-2b564c1e8c5a',
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
];

export default function TracingPage() {
  const pathname = usePathname();

  return (
    <div className='w-full'>
      <div className='flex justify-evenly w-full mt-5'>
        <Link href={'/mechanic/home'}>
          <button
            className={`${
              pathname === '/mechanic/home'
                ? ' text-secondary font-bold underline'
                : 'text-secondary font-bold'
            }`}
          >
            Taller
          </button>
        </Link>
        <button
          className={` ${
            pathname === '/mechanic/tracing'
              ? ' text-secondary font-bold underline'
              : 'text-secondary font-bold'
          }`}
        >
          Cliente
        </button>
      </div>

      <div className='m-5 flex flex-col mt-10'>
        <div className='flex flex-row flex-wrap justify-center gap-5  w-full'>
          {listVehicles.map(item => (
            <CardService key={item.id} vehicle={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
