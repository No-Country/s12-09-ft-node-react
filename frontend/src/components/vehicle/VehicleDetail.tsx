'use client';
import { createContext, useContext } from 'react';
import Image from 'next/image';
import { UserIcon } from '@/assets/svg';
import type { User, Vehicle } from '@/@types';
import { config } from '@/config';

interface VehicleContextProps {
  user: User;
}
const VehicleContext = createContext({} as VehicleContextProps);

interface UserContentProps {
  children?: JSX.Element;
}

export function Problem({ children }: UserContentProps) {
  const { user } = useContext(VehicleContext);
  const date = new Date();
  const mes = date.getMonth() + 1;
  const dia = date.getDate();

  return (
    <div className='sm:w-1/2'>
      <div className='flex items-center justify-between text-accent sm:hidden'>
        <h3 className='flex items-center'>
          <UserIcon />
          <span className='card-title ml-2'>
            {user?.firstName} {user?.lastName}
          </span>
        </h3>
        <span>{`${dia}/${mes}`}</span>
      </div>
      {children && <div className='sm:mt-10'>{children}</div>}
    </div>
  );
}

interface Props {
  vehicle: Vehicle;
  children?: JSX.Element;
}

export function VehicleDetail({ children, vehicle }: Props) {
  const date = new Date();
  const mes = date.getMonth() + 1;
  const dia = date.getDate();

  return (
    <VehicleContext.Provider value={{ user: vehicle?.user ?? {} }}>
      <div className='vehicle flex flex-col sm:flex-row gap-4'>
        <div>
          <div className='sm:flex items-center gap-2 pb-2 text-accent hidden'>
            <h3 className='flex items-center'>
              <div className='flex justify-center items-center bg-base-300 h-8 w-8 rounded-full'>
                <UserIcon />
              </div>
              <span className='card-title ml-2'>
                {vehicle?.user?.firstName} {vehicle?.user?.lastName}
              </span>
            </h3>
            <span>{`${dia}/${mes}`}</span>
          </div>

          <div className='[&>img]:w-[100%]'>
            {vehicle?.imageUrl && (
              <Image
                src={vehicle?.imageUrl ?? config.default.vehicleImage}
                width='100'
                height='100'
                alt={vehicle?.brand ?? 'image'}
              />
            )}
            <div className='flex items-center justify-between'>
              <h3 className='card-title'>
                {vehicle?.brand} - {vehicle?.model}
              </h3>
              <h3 className='card-title text-primary'>
                {vehicle?.licensePlate}
              </h3>
            </div>
            <div>Kilometraje: {vehicle?.mileage}</div>
          </div>
        </div>
        {children}
      </div>
    </VehicleContext.Provider>
  );
}
VehicleDetail.Problem = Problem;
