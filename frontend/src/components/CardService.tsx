import type { RepairLog } from '@/@types';
import { Status } from './StatusRepair';
import Link from 'next/link';

interface Props {
  repairLog: RepairLog;
  //   user: User;
}

export const CardService = ({ repairLog }: Props) => {
  const { id, vehicle, state } = repairLog;

  // console.log(state);

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
        <Link
          className='btn btn-primary btn-xs w-[66px]'
          href={`/mechanic/vehicle/${vehicle?.id}`}
        >
          Detalle
        </Link>
      </div>
      <h4 className='text-xs text-accent'>Estado: {state}</h4>
      <Status state={state} />
    </div>
  );
};
