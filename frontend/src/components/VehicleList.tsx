'use client';
import type { Vehicle } from '@/@types';
import { config } from '@/config';
import Image from 'next/image';
import Link from 'next/link';

interface VehicleItemProps {
  item: Vehicle;
  uri?: string;
}

function VehicleListItem({ item, uri }: VehicleItemProps) {
  return (
    <div className='flex flex-col justify-center items-center '>
      <section className='bg-base-300 hover:shadow-lg cursor-pointer rounded-3xl w-24 h-24 flex justify-center items-center [&>a]:w-full [&>a]:h-full shadow-lg overflow-hidden'>
        <Link href={`${uri}/${item.id}`}>
          <Image
            className=' object-cover w-full h-full'
            src={item.imageUrl ?? config.default.vehicleImage}
            alt={`Imagen de ${item.brand}`}
            width={100}
            height={100}
          />
        </Link>
      </section>
      <p className='text-base font-bold'>{item.brand}</p>
      <p className='text-base font-normal text-accent'>{`${item.user?.firstName} ${item.user?.lastName}`}</p>
    </div>
  );
}

interface Props {
  data: Vehicle[];
  uri: string;
  loading?: boolean;
}

export function VehicleList({ loading = false, data = [], uri }: Props) {
  console.log('vehicles length', data.length);
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-4'>
      {loading
        ? 'cargando...'
        : data.length <= 0
          ? 'No hay elementos para mostrar'
          : data.map(item => (
              <VehicleListItem key={item.id} item={item} uri={uri} />
            ))}
    </div>
  );
}
