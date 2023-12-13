'use client';
import type { Vehicle } from '@/@types';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  data: Vehicle[];
  loading?: boolean;
}

export function VehicleList({ loading = false, data = [] }: Props) {
  console.log('vehicles length', data.length);
  return (
    <div className='flex flex-wrap justify-center items-center'>
      {loading
        ? 'cargando...'
        : data.length < 0
          ? 'No hay elementos para mostrar'
          : data.map(item => (
              <div
                key={item.id}
                className=' flex flex-col justify-center items-center w-[50%]'
              >
                <section className='bg-base-300 hover:shadow-lg cursor-pointer rounded-3xl w-24 h-24 flex justify-center items-center [&>a]:w-full [&>a]:h-full shadow-lg'>
                  <Link href={`/workshop/vehicle/${item.id}`}>
                    <Image
                      className=' object-cover w-full h-full'
                      src={item.imageUrl ?? ''}
                      alt={`Imagen de ${item.brand}`}
                      width={30}
                      height={30}
                    />
                  </Link>
                </section>
                <p className='text-base font-bold'>{item.brand}</p>
                <p className='text-base font-normal text-accent'>{`${item.user?.firstName} ${item.user?.lastName}`}</p>
              </div>
            ))}
    </div>
  );
}
