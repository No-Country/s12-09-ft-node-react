'use client';
import Image from 'next/image';
import { UserIcon } from '@/assets/svg';
import type { User, Vehicle } from '@/@types';
import { createContext, useContext } from 'react';

interface VehicleContextProps {
  user: User;
}
const VehicleContext = createContext({} as VehicleContextProps);

interface UserContentProps {
  children?: JSX.Element;
}

function UserContent({ children }: UserContentProps) {
  const { user } = useContext(VehicleContext);
  const date = new Date();
  const mes = date.getMonth() + 1;
  const dia = date.getDate();

  return (
    <div>
      <div className='flex items-center justify-between text-accent'>
        <h3 className='flex items-center'>
          <UserIcon />
          <span className='card-title'>
            {user?.firstName} {user?.firstName}
          </span>
        </h3>
        <span>{`${dia}/${mes}`}</span>
      </div>
      {children}
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
                src={vehicle?.imageUrl ?? ''}
                width='100'
                height='100'
                alt={vehicle?.brand ?? 'image'}
              />
            )}
            <div className='flex items-center justify-between'>
              <h3 className='card-title'>
                {vehicle?.brand} - {vehicle?.model}
              </h3>
              <h3 className='card-title'>{vehicle?.licensePlate}</h3>
            </div>
            <div>Kilometraje: {vehicle?.mileage}</div>
          </div>
        </div>
        {children}
      </div>
    </VehicleContext.Provider>
  );
}

VehicleDetail.UserContent = UserContent;
