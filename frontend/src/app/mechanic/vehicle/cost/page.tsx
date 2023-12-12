import React from 'react';
import { Input } from '@/components/input';
import Image from 'next/image';
import { CabinAir } from '@/assets/icons';

export default function CostPage() {
  return (
    <div>
      <header className='flex w-full justify-evenly pt-5 pb-4'>
        <div>
          <span className='text-secondary font-bold underline'>Componentes</span>
        </div>

        <div>
          <span className='text-secondary font-bold'>Costo</span>
        </div>
      </header>

      <main className='flex flex-col bg-base-300 mx-4 rounded-2xl p-3'>
        <div className='flex flex-col pb-2'>
          <h3 className='text-secondary font-semibold text-lg'>
            Reparación
          </h3>

          <div className='flex border-b-2 border-base-200 gap-2 py-3'>
            <div className=''>
              <div className='bg-white p-1 rounded-full'>
                <Image
                  src={CabinAir}
                  alt=''
                  height={70}
                  width={70}
                  className='p-1'
                />
              </div>
            </div>

            <div className='flex flex-col gap-1'>
              <span className='text-sm text-base-accent pl-1'>
                Componente 1
              </span>
              <Input
                name='description'
                placeholder='Objeto a reparar'
                className={'bg-white h-6 w-44'}
              />
            </div>

            <div className='flex  items-end'>
              <span>$</span>
              <Input
                name='cost'
                placeholder='Costo'
                className={'bg-white h-6'}
              />
            </div>
          </div>

          <div className='flex border-b-2 border-base-200 gap-2 py-3'>
            <div className='pt-1'>
              <div className='bg-white p-1 rounded-full'>
                <Image
                  src={CabinAir}
                  alt=''
                  height={70}
                  width={70}
                  className='p-1'
                />
              </div>
            </div>

            <div className='flex flex-col gap-1'>
              <span className='pl-1 text-sm'>Componente 2</span>
              <Input
                name='description'
                placeholder='Objeto a reparar'
                className={'bg-white h-6 w-44'}
              />
            </div>

            <div className='flex  items-end'>
              <span>$</span>
              <Input
                name='cost'
                placeholder='Costo'
                className={'bg-white h-6'}
              />
            </div>
          </div>
        </div>

        <div className='flex flex-col pb-2'>
          <h3 className='text-secondary font-semibold text-lg pb-3'>
            Mantenimiento
          </h3>

          <div className='flex border-b-2 border-base-200 gap-2 pb-3'>
            <div className='pt-1'>
              <div className='bg-white p-1 rounded-full'>
                <Image
                  src={CabinAir}
                  alt=''
                  height={70}
                  width={70}
                  className='p-1'
                />
              </div>
            </div>

            <div className='flex flex-col gap-1'>
              <span className='text-sm text-base-accent pl-1'>
                Componente 1
              </span>
              <Input
                name='description'
                placeholder='Objeto a reparar'
                className={'bg-white h-6 w-44'}
              />
            </div>

            <div className='flex items-end gap-1'>
              <span>$</span>
              <Input
                name='cost'
                placeholder='Costo'
                className={'bg-white h-6 w-20'}
              />
            </div>
          </div>
        </div>

        <div className='flex border-b-2 border-base-200 pb-3'>
          <h3 className='text-secondary font-medium pb-1 w-full flex-grow'>
            Mano de obra
          </h3>

          <div className='flex items-end gap-1 max-w-[98px]'>
            <span>$</span>
            <Input
              name='cost'
              placeholder='Costo'
              className={'bg-white h-6 w-20'}
            />
          </div>
        </div>

        <div className='flex pt-3 pb-2'>
          <h3 className='text-secondary font-medium pb-1 w-full flex-grow'>
            TOTAL
          </h3>

          <div className='flex items-end gap-1 max-w-[98px]'>
            <span>$</span>
            <Input
              name='total'
              placeholder='Total'
              className={'bg-white h-6 w-20'}
            />
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
