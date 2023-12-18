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
  children?: string;
}

export function Problem({ children }: UserContentProps) {
  const { user } = useContext(VehicleContext);
  const date = new Date();
  const mes = date.getMonth() + 1;
  const dia = date.getDate();

  return (
    <div>
      <div className='flex items-center justify-between text-accent'>
        <h3 className='flex items-center'>
          <UserIcon />
          <span className='card-title ml-2'>
            {user?.firstName} {user?.firstName}
          </span>
        </h3>
        <span>{`${dia}/${mes}`}</span>
      </div>
      {children && (
        <p className='bg-base-300 rounded-[2rem] p-4 my-4'>{children}</p>
      )}
    </div>
  );
}

interface Props {
  vehicle: Vehicle;
  children?: JSX.Element;
}

export function VehicleDetail({ children, vehicle }: Props) {
  return (
    <VehicleContext.Provider value={{ user: vehicle?.user ?? {} }}>
      <div className='vehicle flex flex-col gap-4'>
        <div>
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
