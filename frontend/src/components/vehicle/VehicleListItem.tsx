import { config } from '@/config';
import Image from 'next/image';
import Link from 'next/link';
import type { Vehicle } from '@/@types';

interface Props {
  item: Vehicle;
  uri?: string;
}

export function VehicleListItem({ item, uri }: Props) {
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
            priority={false}
          />
        </Link>
      </section>
      <p className='text-base font-bold'>{item.brand}</p>
      <p className='text-base font-normal text-accent'>{`${item.user?.firstName} ${item.user?.lastName}`}</p>
    </div>
  );
}
