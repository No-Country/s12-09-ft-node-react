import React from 'react';
import { Input } from '@/components/input';
import Image from 'next/image';
import { CabinAir } from '@/assets/icons';

export default function CostPage() {
  const data = {
    repairs: ['Aire de cabina', 'Tren delantero'],
    maintenance: ['Neumaticos'],
  };

  return (
    <div>
      <header className='flex w-full justify-evenly pt-5 pb-4'>
        <div>
          <span className='text-secondary font-bold underline'>
            Componentes
          </span>
        </div>

        <div>
          <span className='text-secondary font-bold'>Costo</span>
        </div>
      </header>

      <main className='flex flex-col bg-base-300 sm:bg-transparent mx-4 rounded-2xl p-3'>
        <div className='flex flex-col sm:flex-row sm:gap-4 sm:border-b-2 sm:border-base-200 sm:pb-3 md:gap-20'>
          <div className='flex flex-col pb-2 w-full'>
            <h3 className='text-secondary font-semibold text-lg sm:text-xl sm:font-semibold'>
              Reparación
            </h3>

            {data.repairs.map(data => (
              <div
                key={data}
                className='flex border-b-2 border-base-200 sm:border-none gap-1 py-3 sm:gap-4'
              >
                <div className=''>
                  <div className='relative p-1 bg-white sm:bg-base-300 flex justify-center h-7 w-7 sm:h-12 sm:w-12 rounded-full'>
                    <Image
                      src={CabinAir}
                      alt=''
                      fill
                      className='p-1 sm:p-2'
                    />
                  </div>
                </div>

                <div className='flex flex-col gap-1 w-full'>
                  <span className='text-sm text-base-accent pl-1 sm:text-base md:text-lg'>{data}</span>
                  <Input
                    name='description'
                    placeholder='Objeto a reparar'
                    className={'bg-white sm:bg-base-300 h-8 md:h-10 w-44'}
                  />
                </div>

                <div className='flex items-end max-w-[98px] md:max-w-[112px] md:ml-3'>
                  <div className='flex items-center gap-1'>
                    <span>$</span>
                    <Input
                      name='cost'
                      placeholder='Costo'
                      className={'bg-white sm:bg-base-300 h-8 md:h-10'}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className='flex flex-col pb-2 w-full'>
            <h3 className='text-secondary font-semibold text-lg pb-3 sm:text-xl sm:font-semibold'>
              Mantenimiento
            </h3>

            {data.maintenance.map(data => (
              <div
                key={data}
                className='flex border-b-2 border-base-200 sm:border-none gap-1 py-3 sm:gap-4'
              >
                <div className='pt-1'>
                  <div className='relative p-1 bg-white sm:bg-base-300 flex justify-center h-7 w-7 sm:h-12 sm:w-12 rounded-full'>
                    <Image
                      src={CabinAir}
                      alt=''
                      fill
                      className='p-1 sm:p-2'
                    />
                  </div>
                </div>

                <div className='flex flex-col gap-1 w-full'>
                  <span className='text-sm text-base-accent pl-1 sm:text-base md:text-lg'>{data}</span>
                  <Input
                    name='description'
                    placeholder='Objeto a reparar'
                    className={'bg-white sm:bg-base-300 h-8 md:h-10 w-44'}
                  />
                </div>

                <div className='flex items-end max-w-[98px] md:max-w-[112px] md:ml-3 md:mr-6'>
                  <div className='flex items-center gap-1'>
                    <span>$</span>
                    <Input
                      name='cost'
                      placeholder='Costo'
                      className={'bg-white sm:bg-base-300 h-8 md:h-10'}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='flex items-center border-b-2 border-base-200 py-3'>
          <h3 className='text-secondary font-medium pb-1 w-full flex-grow sm:text-xl sm:font-semibold'>
            Mano de obra
          </h3>

          <div className='flex items-end gap-1 max-w-[98px]'>
            <div className='flex items-center gap-1'>
              <span>$</span>
              <Input
                name='cost'
                placeholder='Costo'
                className={'bg-white sm:bg-base-300 h-8 md:h-10 w-20'}
              />
            </div>
          </div>
        </div>

        <div className='flex pt-3 pb-2'>
          <h3 className='text-secondary font-medium pb-1 w-full flex-grow sm:text-xl sm:font-semibold'>
            TOTAL
          </h3>

          <div className='flex items-end gap-1 max-w-[98px]'>
            <div className='flex items-center gap-1'>
              <span>$</span>
              <Input
                name='total'
                placeholder='Total'
                className={'bg-white sm:bg-base-300 h-8 md:h-10 w-20'}
              />
            </div>
          </div>
        </div>
      </main>

      <footer className='mx-4 flex justify-evenly pt-5'>
        <button className='px-4 py-2 border-2 border-primary rounded-xl text-secondary font-bold text-lg'>
          Cancelar
        </button>

        <button className='px-4 py-2 bg-primary rounded-xl text-secondary font-bold text-lg'>
          Enviar Cotizacion
        </button>
      </footer>
    </div>
  );
}
