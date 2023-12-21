'use client';

import type { RepairLog } from '@/@types';
import { useRepairLog } from '@/hook';
import { useEffect, useState } from 'react';
import { CardServiceClient } from './CardServiceClient';

export const ClientRepairs = () => {
  const { repairlogs, isLoading, getAllRepairLog } = useRepairLog();
  const [filteredLogs, setFilteredLogs] = useState<RepairLog[]>([]);

  useEffect(() => {
    getAllRepairLog();
  }, [repairlogs]);

  useEffect(() => {
    if (localStorage) {
      const user = JSON.parse(localStorage.getItem('logged-user') ?? '');

      const newLogs = repairlogs.filter(
        state => state.vehicle?.userId === user.id
      );

      setFilteredLogs(newLogs);
    }
  }, [repairlogs, isLoading]);

  return (
    <div className='max-w-7xl w-full mx-auto px-3'>
      <div className='m-5 flex flex-col'>
        <div className='text-center text-lg'>
          {filteredLogs.length <= 0 ? (
            <p>No hay reparaciones en curso</p>
          ) : (
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full'>
              {isLoading
                ? 'cargando...'
                : filteredLogs.map(item => (
                    <CardServiceClient key={item.id} repairLog={item} />
                  ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
