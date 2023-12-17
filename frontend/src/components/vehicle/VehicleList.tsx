'use client';
import { VehicleListItem } from '.';
import { useVehicle } from '@/hook';
import { useEffect, useId } from 'react';

interface Props {
  uri: string;
}

export function VehicleList({ uri }: Props) {
  const { vehicles, isLoading, getAllVehicles } = useVehicle();
  const dinamicID = useId();

  useEffect(() => {
    getAllVehicles();
  }, []);

  return (
    <div className='flex flex-wrap justify-center items-center gap-y-4'>
      {isLoading
        ? 'cargando...'
        : vehicles.length <= 0
          ? 'No hay elementos para mostrar'
          : vehicles.map(item => (
              <VehicleListItem
                key={item.id + dinamicID}
                item={item}
                uri={uri}
              />
            ))}
    </div>
  );
}
