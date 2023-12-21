import type { RepairLog } from '@/@types';
import Link from 'next/link';
import { StatusClient } from './StatusClient';

interface Props {
  repairLog: RepairLog;
  //   user: User;
}

export const CardServiceClient = ({ repairLog }: Props) => {
  const { id, vehicle, state } = repairLog;

  return (
    <div key={id} className='w-full bg-base-300 rounded-3xl p-5 flex flex-col'>
      <div className='flex justify-between'>
        <div className='flex  flex-col'>
          <h4 className='text-xs'>
            {vehicle?.user?.firstName ?? ''} {vehicle?.user?.lastName ?? ''}
          </h4>
          <div className='flex flex-row gap-3'>
            <h2 className='text-base font-bold'>
              {vehicle?.brand}-{vehicle?.model}
            </h2>
            <h2 className='text-base'>| {vehicle?.licensePlate}</h2>
          </div>
        </div>
        {state !== 'Aviso al cliente' ? (
          <Link
            className='btn btn-primary btn-xs w-[66px]'
            href={`/mechanic/vehicle/${vehicle?.id}`}
          >
            Detalle
          </Link>
        ) : null}
      </div>

      <StatusClient idLog={id!} state={state} />
    </div>
  );
};
