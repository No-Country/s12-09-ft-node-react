import { Vehicle } from '@/@types';
import Image from 'next/image';

export interface Props {
  vehicle: Vehicle;
}

export function VehicleItem({ vehicle }: Props) {
  return (
    <div className='vehicle-item text-center flex flex-col justify-center items-center flex-1 '>
      <div className='vehicle-item-box bg-black w-[96px] h-[96px] rounded-box overflow-hidden shadow-md'>
        <Image
          src={vehicle.imageUrl}
          alt='car detail'
          width={100}
          height={100}
          className='object-cover w-full h-full'
        />
      </div>
      <h3>{vehicle.brand}</h3>
    </div>
  );
}
