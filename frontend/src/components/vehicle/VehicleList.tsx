'use client';
import type { Vehicle } from '@/@types';
import { VehicleListItem } from './VehicleListItem';
import { useVehicle } from '@/hook';
import { useEffect, useId } from 'react';

interface Props {
  uri: string;
  vehicles: Vehicle[];
  isLoading: boolean | undefined
}

export function VehicleList({ uri, vehicles, isLoading }: Props) {
  const { getAllVehicles } = useVehicle();
  const dinamicID = useId();

  useEffect(() => {
    getAllVehicles();
  }, []);

  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-4'>
      {isLoading
        ? 'cargando...'
        : vehicles?.length <= 0
          ? 'No hay elementos para mostrar'
          : vehicles?.map(item => (
              <VehicleListItem
                key={item.id + dinamicID}
                item={item}
                uri={uri}
              />
            ))}
    </div>
  );
}
