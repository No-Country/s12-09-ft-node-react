'use client'

import type { RepairLog } from '@/@types';
import { CardService } from './CardService';
import { useRepairLog } from '@/hook';
import { useEffect, useState } from 'react';

export const ClientRepairs = () => {
  const { repairlogs, isLoading, getAllRepairLog } = useRepairLog();
  const [filteredLogs, setFilteredLogs] = useState<RepairLog[]>([]);

  useEffect(() => {
    getAllRepairLog();
  }, []);

  useEffect(() => {
    if (localStorage) {
      const user = JSON.parse(localStorage.getItem('logged-user') ?? '');

      const newLogs = repairlogs.filter(state => state.vehicle?.userId === user.id);

      setFilteredLogs(newLogs);
      console.log('FilteredLogs', filteredLogs)
    }
  }, [repairlogs]);

  return (
    <div className='max-w-7xl w-full mx-auto px-3'>
      <div className='m-5 flex flex-col'>
        <div>
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
