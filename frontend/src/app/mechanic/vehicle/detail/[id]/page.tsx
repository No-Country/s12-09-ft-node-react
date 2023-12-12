'use client';

import { UserIcon } from '@/assets/icons';
import { useVehicle } from '@/hook';
import Image from 'next/image';
import { useEffect } from 'react';

interface VehicleDetailProps {
  params: { id: string };
}

export default function VehicleDetail({ params }: VehicleDetailProps) {
  const { vehicleById, getOneVehicleById } = useVehicle();

  useEffect(() => {
    getOneVehicleById(params.id);
  }, []);

  console.log(vehicleById);

  return (
    <div>
      {vehicleById !== null ? (
        <section className='md:grid md:grid-cols-2 md:px-[10%] px-[5%] md:gap-20 justify-center items-center min-h-screen'>
          <div className=''>
            <div className='hidden md:block'>
              <div className='flex  flex-row items-center gap-5'>
                <button
                  type='button'
                  className='btn btn-sm btn-circle bg-base-300'
                >
                  <Image
                    src={UserIcon}
                    height={20}
                    width={20}
                    alt='user icon'
                  />
                </button>
                <p className='text-accent'>
                  {vehicleById.user.firstName} {vehicleById.user.lastName}
                </p>
              </div>
            </div>

            <div className='flex place-content-center'>
              <Image
                src={vehicleById.imageUrl}
                alt='car detail'
                width={100}
                height={100}
                className='w-full h-full'
              />
            </div>
            <div className='flex flex-row justify-between'>
              <h2 className='card-title'>
                {vehicleById.brand} - {vehicleById.model}
              </h2>
              <h2 className='card-title'>{vehicleById.licensePlate}</h2>
            </div>
            <p>Kilometraje: {vehicleById.mileage}</p>
          </div>

          <section>
            <div className='md:hidden my-4'>
              <div className='flex justify-between'>
                <div className='flex  flex-row items-center gap-5'>
                  <button
                    type='button'
                    className='btn btn-sm btn-circle bg-base-300'
                  >
                    <Image src={UserIcon} alt='user icon' />
                  </button>
                  <p className='text-accent'>
                    {vehicleById.user.firstName}
                    {vehicleById.user.lastName}
                  </p>
                </div>
                {/* <p className='text-accent'>{`${dia}/${mes}`}</p> */}
              </div>
            </div>
            <section>
              <div className=' hidden md:block mb-10'>
                {/* <p className='text-accent text-right mb-5'>{`${dia}/${mes}`}</p> */}
              </div>
              <div className=' flex justify-center items-center gap-5 flex-col'>
                <p className='bg-base-300 p-5  [readonly] rounded-3xl  w-full'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
                  doloribus dolore sequi repudiandae odit, veniam fuga, ex in
                  omnis laudantium nostrum magnam quasi voluptatibus voluptates
                  magni et, cupiditate accusantium. Quasi!
                </p>

                <div className='flex justify-center mt-5'>
                  <button className='btn btn-primary text-secondary font-bold w-56 text-xl'>
                    Enviar Cotización
                  </button>
                </div>
              </div>
            </section>
          </section>
        </section>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
}
