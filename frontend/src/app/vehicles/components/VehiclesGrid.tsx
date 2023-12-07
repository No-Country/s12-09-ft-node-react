import { useEffect } from 'react';
import { useVehicle } from '@/hook';
import { VehicleItem } from '.';
import { Vehicle } from '@/@types';

export function VehiclesGrid() {
  const { vehicles, isLoading, getAllVehicles } = useVehicle();

  useEffect(() => {
    getAllVehicles();
  }, []);

  return (
    <div className='vehicle-page-grid flex flex-wrap gap-4 justify-center'>
      {isLoading
        ? 'Cargando...'
        : vehicles.length < 1
          ? 'No hay elementos para mostrar'
          : vehicles.map(item => <VehicleItem key={item.id} vehicle={item} />)}
    </div>
  );
}
