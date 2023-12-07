'use client';
import { useState, useEffect } from 'react';

import Image from 'next/image';
import { RegisterClient } from './components/registerClient';
import Link from 'next/link';

import { PlusIcon, BotonmasIcon } from '@/assets/icons';

import { useVehicle } from '@/hook';
import type { Vehicle } from '@/@types';

const VehiclePage = () => {
  const { vehicles, getAllVehicles } = useVehicle();

  useEffect(() => {
    getAllVehicles();
  }, [getAllVehicles]);

  const vehicleData: Vehicle[] = vehicles;

  const [currentView, setCurrentView] = useState<'taller' | 'cliente'>(
    'taller'
  );

  const [openModal, setOpenModal] = useState(false);

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

      <section className=' flex justify-center mt-10'>
        <div className='md:flex md:flex-row md:flex-wrap gap-10 grid grid-cols-2 items-center justify-center w-full'>
          <div className='hidden md:block '>
            <button
              onClick={() => {
                setOpenModal(true);
              }}
              className=' flex flex-col justify-center items-center gap-5'
            >
              <section className='bg-base-300 rounded-3xl w-24 h-24 flex place-content-center'>
                <Image width={36} height={36} src={PlusIcon} alt='clio 1.2' />
              </section>
              <p className='font-bold'>Agregar vehiculo</p>
            </button>
          </div>
          {filteredData.length === 0 ? (
            <p>No hay vehículos disponibles.</p>
          ) : (
            filteredData.map((vehicle: Vehicle, index: number) => (
              <div
                key={index}
                className=' flex flex-col justify-center items-center'
              >
                <Link href={`/car/${vehicle.id}`}>
                  <section className='bg-base-300 hover:shadow-lg cursor-pointer rounded-3xl w-24 h-24 flex justify-center items-center'>
                    <Image
                      className='h-7 w-20'
                      src={vehicle.imageUrl}
                      alt={`Imagen de ${vehicle.brand}`}
                      width={30}
                      height={30}
                    />
                  </section>
                </Link>
                <p className='text-base font-bold'>{vehicle.brand}</p>
                <p className='text-base font-normal text-accent'>{`${vehicle.user.firstName} ${vehicle.user.lastName}`}</p>
              </div>
            ))
          )}
        </div>
      </section>

      <button
        onClick={() => {
          setOpenModal(true);
        }}
        className=' block md:hidden    fixed  bottom-[5%] left-[48%]'
      >
        <div className='flex justify-center '>
          <Image className='hover:scale-150' src={BotonmasIcon} alt='boton' />
        </div>
      </button>

      <RegisterClient open={openModal} handleOpen={setOpenModal} />
    </div>
  );
};

export default VehiclePage;
