'use client';

import type { Vehicle } from '@/@types';
import { useVehicle } from '@/hook';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function MechanicPage() {
  const { vehicles, getAllVehicles } = useVehicle();

  useEffect(() => {
    getAllVehicles();
  }, [getAllVehicles]);

  const vehicleData: Vehicle[] = vehicles;

  const [currentView, setCurrentView] = useState<'taller' | 'cliente'>(
    'taller'
  );

  const filteredData =
    currentView === 'taller'
      ? vehicleData
      : vehicleData.filter(vehicle => vehicle?.user?.rol === 'user');

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
        <Link href={'/mechanic/tracing'}>
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
        </Link>
      </div>

      <section className=' flex justify-center mt-10'>
        <div className='md:flex md:flex-row md:flex-wrap gap-10 grid grid-cols-2 items-center justify-center w-full'>
          {filteredData.length === 0 ? (
            <p>No hay vehículos disponibles.</p>
          ) : (
            filteredData.map((vehicle: Vehicle, index: number) => (
              <div
                key={index}
                className=' flex flex-col justify-center items-center'
              >
                <Link href={`/mechanic/vehicle/${vehicle.id}`}>
                  <section className='bg-base-300 hover:shadow-lg cursor-pointer rounded-3xl w-24 h-24 flex justify-center items-center'>
                    <Image
                      className='h-7 w-20'
                      src={vehicle.imageUrl ?? ''}
                      alt={`Imagen de ${vehicle.brand}`}
                      width={30}
                      height={30}
                    />
                  </section>
                </Link>
                <p className='text-base font-bold'>{vehicle.brand}</p>
                <p className='text-base font-normal text-accent'>{`${
                  vehicle.user?.firstName ?? ''
                } ${vehicle.user?.lastName ?? ''}`}</p>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
