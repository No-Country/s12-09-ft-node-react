import { UserIcon } from '@/assets/icons';
import Image from 'next/image';
import React from 'react';

interface CardRecordProps {
  fullName?: string;
  brand?: string;
  model?: string;
  license?: string;
  time?: string;
}

export default function CardRecord({
  brand = 'Marca',
  fullName = 'Laura Sosa',
  license = 'Patente',
  model = 'Modelo',
  time = '2s',
}: CardRecordProps) {
  return (
    <div className='p-3  h-20 bg-base-300 rounded-3xl flex flex-row items-start justify-between w-full max-w-[389px]'>
      <div className=' gap-3 flex items-center'>
        <div className='rounded-full w-10 h-10 flex place-content-center bg-base-100'>
          <Image src={UserIcon} width={19} height={19} alt='user icon' />
        </div>
        <div>
          <h1 className='text-lg font-bold text-secondary'>{fullName}</h1>
          <p>{`${brand} ${model} | ${license}`}</p>
        </div>
      </div>
      <p className='text-xs text-accent'>Ultimo arreglo {time}</p>
    </div>
  );
}
