'use client';
import { useEffect, useState } from 'react';
import type Vehicle from '@/interface/home';
import { useCar } from '@/hook/useCar';
import Image from 'next/image';
import { PlusIcon } from '@/assets/icons';
import { CarImage } from '@/assets/image';

const VehiclePage: React.FC = () => {
  //   const { getAllCars, cars } = useCar();
  //   useEffect(() => {
  //     getAllCars();
  //   }, []);

  const [vehicleData] = useState<Vehicle[]>([
    {
      id: '1497cedd-6361-41ec',
      brand: 'Tesla',
      model: 'Model S',
      color: 'red',
      year: 2020,
      licensePlate: 'hdksak',
      mileage: 2332,
      imageUrl:
        'https://jamaicaautoauctions.com/wp-content/uploads/2019/11/default-car.jpg',
      userId: '88b7c240-3227-4046-96c1-b19b85d7074f',
      createdAt: '2023-12-03T05:56:50.942Z',
      updatedAt: '2023-12-03T05:56:50.942Z',
      user: {
        id: '88b7c240-3227-4046-96c1-b19b85d7074f',
        lastName: 'Yordan',
        firstName: 'Jimenez',
        email: 'yordan@hotmail.com',
        phone: 1122332212,
        rol: 'user',
        pass: '$2b$10$2y1ZaU1JNO8OwZwIooVTze8JVknL.B69O9X6KNtIrkU2kmba85vgC',
      },
      repairLog: [
        {
          id: 'b9a91a5a-a378-4ed4-956a-8758b4b2a18f',
          date: '2023-12-03T00:00:00.000Z',
          description: 'Probando ando',
          cost: 90,
          state: 'Cotizar',
          vehicleId: '1497cedd-6361-41ec-b0ff-4e62cf090782',
          mechanicId: 'b5926459-c4aa-4274-8e6b-3f9c9866ae31',
          MechanicId: null,
        },
      ],
    },
    {
      id: '1497cedf4-4e62cf090782',
      brand: 'Tesla',
      model: 'Model S',
      color: 'red',
      year: 2020,
      licensePlate: 'hdksak',
      mileage: 2332,
      imageUrl:
        'https://jamaicaautoauctions.com/wp-content/uploads/2019/11/default-car.jpg',
      userId: '88b7c240-3227-4046-96c1-b19b85d7074f',
      createdAt: '2023-12-03T05:56:50.942Z',
      updatedAt: '2023-12-03T05:56:50.942Z',
      user: {
        id: '88b7c240-3227-4046-96c1-b19b85d7074f',
        lastName: 'Yordan',
        firstName: 'Jimenez',
        email: 'yordan@hotmail.com',
        phone: 1122332212,
        rol: 'user',
        pass: '$2b$10$2y1ZaU1JNO8OwZwIooVTze8JVknL.B69O9X6KNtIrkU2kmba85vgC',
      },
      repairLog: [
        {
          id: 'b9a91a5a-a378-4ed4-954a-8758b4b2a18f',
          date: '2023-12-03T00:00:00.000Z',
          description: 'Probando ando',
          cost: 90,
          state: 'Cotizar',
          vehicleId: '1497cedd-6361-41ec-b0ff-4e62cf090782',
          mechanicId: 'b5926459-c4aa-4274-8e6b-3f9c9866ae31',
          MechanicId: null,
        },
      ],
    },
    {
      id: '1497ce782',
      brand: 'Tesla',
      model: 'Model S',
      color: 'red',
      year: 2020,
      licensePlate: 'hdksak',
      mileage: 2332,
      imageUrl:
        'https://jamaicaautoauctions.com/wp-content/uploads/2019/11/default-car.jpg',
      userId: '88b7c240-3227-4046-96c1-b19b85d7074f',
      createdAt: '2023-12-03T05:56:50.942Z',
      updatedAt: '2023-12-03T05:56:50.942Z',
      user: {
        id: '88b7c240-3227-4046-96c1-b19b85d7074f',
        lastName: 'Yordan',
        firstName: 'Jimenez',
        email: 'yordan@hotmail.com',
        phone: 1122332212,
        rol: 'user',
        pass: '$2b$10$2y1ZaU1JNO8OwZwIooVTze8JVknL.B69O9X6KNtIrkU2kmba85vgC',
      },
      repairLog: [
        {
          id: 'b9a91a5a-a378-4ed4-956a-8758b4b2a18f',
          date: '2023-12-03T00:00:00.000Z',
          description: 'Probando ando',
          cost: 90,
          state: 'Cotizar',
          vehicleId: '1497cedd-6361-41ec-b0ff-4e62cf090782',
          mechanicId: 'b5926459-c4aa-4274-8e6b-3f9c9866ae31',
          MechanicId: null,
        },
      ],
    },
    {
      id: '1497ced2',
      brand: 'Tesla',
      model: 'Model S',
      color: 'red',
      year: 2020,
      licensePlate: 'hdksak',
      mileage: 2332,
      imageUrl:
        'https://jamaicaautoauctions.com/wp-content/uploads/2019/11/default-car.jpg',
      userId: '88b7c240-3227-4046-96c1-b19b85d7074f',
      createdAt: '2023-12-03T05:56:50.942Z',
      updatedAt: '2023-12-03T05:56:50.942Z',
      user: {
        id: '88b7c240-3227-4046-96c1-b19b85d7074f',
        lastName: 'Yordan',
        firstName: 'Jimenez',
        email: 'yordan@hotmail.com',
        phone: 1122332212,
        rol: 'user',
        pass: '$2b$10$2y1ZaU1JNO8OwZwIooVTze8JVknL.B69O9X6KNtIrkU2kmba85vgC',
      },
      repairLog: [
        {
          id: 'b9a91a5a-a378-4ed4-956a-8758b4b2a18f',
          date: '2023-12-03T00:00:00.000Z',
          description: 'Probando ando',
          cost: 90,
          state: 'Cotizar',
          vehicleId: '1497cedd-6361-41ec-b0ff-4e62cf090782',
          mechanicId: 'b5926459-c4aa-4274-8e6b-3f9c9866ae31',
          MechanicId: null,
        },
      ],
    },
  ]);

  const [currentView, setCurrentView] = useState<'taller' | 'cliente'>(
    'taller'
  );
  const filteredData =
    currentView === 'taller'
      ? vehicleData
      : vehicleData.filter(vehicle => vehicle.user.rol === 'user');

  return (
    <div>
      <div className='flex justify-evenly w-full mt-5'>
        <button
          onClick={() => {
            setCurrentView('taller');
          }}
          className={`${
            currentView === 'taller'
              ? ' text-secondary font-bold underline'
              : 'text-secondary font-bold'
          }`}
        >
          Taller
        </button>
        <button
          onClick={() => {
            setCurrentView('cliente');
          }}
          className={` ${
            currentView === 'cliente'
              ? ' text-secondary font-bold underline'
              : 'text-secondary font-bold'
          }`}
        >
          Cliente
        </button>
      </div>

      <section className='flex justify-center mt-10'>
        <div className='flex flex-row flex-wrap gap-10 justify-center '>
          <div className=' flex flex-col justify-center items-center gap-5'>
            <section className='bg-base-300 rounded-3xl w-24 h-24 flex place-content-center'>
              <Image width={36} height={36} src={PlusIcon} alt='clio 1.2' />
            </section>
            <p className='font-bold'>Agregar vehiculo</p>
          </div>

          {filteredData.map(vehicle => (
            <div className=' flex flex-col justify-center items-center'>
              <section className='bg-base-300 rounded-3xl w-24 h-24 flex justify-center items-center'>
                <Image
                className=' h-7 w-20'
                  src={
                    /* vehicle.imageUrl */ CarImage
                  }
                  alt='clio 1.2'
                />
              </section>
              <p className='text-base font-bold'>{vehicle.brand}</p>
              <p className='text-base font-normal text-accent'>{`${vehicle.user.firstName} ${vehicle.user.lastName}`}</p>
            </div>
          ))}
        </div>
      </section>
      {/* <div className='flex justify-center'>
                <button className=' bg-cyan-400 p-4 font-bold mt-5 text-white rounded-[100%] text-[20px] '>+</button>
            </div> */}
    </div>
  );
};

export default VehiclePage;
