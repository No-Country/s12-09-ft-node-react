import type { RepairLog } from '@/@types';
import { CardService } from './CardService';
import { useMechanic, useRepairLog } from '@/hook';
import { useEffect, useState } from 'react';

export const MechanicClients = () => {
  const { mechanic } = useMechanic();
  const { repairlogs, isLoading, getAllRepairLog } = useRepairLog();
  const [filteredLogs, setFilteredLogs] = useState<RepairLog[]>([]);

  useEffect(() => {
    getAllRepairLog();
  }, [repairlogs]);

  useEffect(() => {
    if (localStorage) {
      const mechanic = JSON.parse(localStorage.getItem('logged-mechanic')??'')

      const newLogs = repairlogs.filter(
        state => state.vehicle?.mechanicId === mechanic.result.id
      );

      setFilteredLogs(newLogs);
    }
  }, [repairlogs, isLoading]);

  return (
    <div className='max-w-7xl w-full mx-auto px-3'>
      <div className='m-5 flex flex-col'>
        <div>
          <h1 className='text-secondary font-bold my-2'>
            Mecanico {mechanic?.firstName} {mechanic?.lastName}
          </h1>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5  w-full'>
            {isLoading
              ? 'cargando...'
              : filteredLogs.length <= 0
                ? 'No hay elementos para mostrar'
                : filteredLogs.map(item => (
                    <CardService key={item.id} repairLog={item} />
                  ))}
          </div>
        </div>
      </div>
    </div>
  );
};
