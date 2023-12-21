import { CardService } from './CardService';
import { useRepairLog } from '@/hook';
import { useEffect } from 'react';

export const WorkshopClients = () => {
  const { repairlogs, isLoading, getAllRepairLog } = useRepairLog();

  useEffect(() => {
    getAllRepairLog();
  }, [repairlogs]);


  return (
    <div className='max-w-7xl w-full mx-auto px-3'>
      <div className='m-5 flex flex-col'>
        <div>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5  w-full'>
            {isLoading
              ? 'cargando...'
              : repairlogs.length <= 0
                ? 'No hay elementos para mostrar'
                : repairlogs.map(item => (
                    <CardService key={item.id} repairLog={item} />
                  ))}
          </div>
        </div>
      </div>
    </div>
  );
};
