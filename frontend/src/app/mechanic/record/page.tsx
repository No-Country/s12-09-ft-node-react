import React from 'react';
import CardRecord from './components/CardRecord';

export default function RecordPage() {
  return (
    <div className='m-5 flex flex-col gap-5 items-center'>
      <h1 className=' mt-10 text-3xl font-bold text-secondary lg:mb-5'>
        Historial de clientes
      </h1>
      <div className='flex flex-wrap gap-5 justify-center'>
        <CardRecord
          brand='Renault'
          fullName='Alejo Araya'
          license='MOV780'
          model='Clio 1.2'
          time='2m'
        />
        <CardRecord />
        <CardRecord />
        <CardRecord />
        <CardRecord />
      </div>
    </div>
  );
}
