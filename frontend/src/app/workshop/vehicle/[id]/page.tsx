'use client';

import { Container } from '@/components';
import { VehicleDetail } from '@/components/vehicle';
import { useMechanic, useVehicle } from '@/hook';
import { useEffect, useState } from 'react';

interface Props {
  params: { id: string };
}
export default function VehicleDetailsPage({ params }: Props) {
  const { vehicle, isLoading, getOneVehicleById, updateVehicle } = useVehicle();
  const { mechanics, getAllMechanic } = useMechanic();
  const [chooseMechanic, setChooseMechanic] = useState('');

  useEffect(() => {
    getOneVehicleById(params.id);
    getAllMechanic();
  }, []);

  const handleUpdate = () => {
    const newVehicle = {...vehicle, mechanicId: chooseMechanic}
    console.log(newVehicle)
    updateVehicle(newVehicle)
  };

  return (
    <section>
      <Container>
        <>
          {isLoading === true
            ? 'Cargando...'
            : vehicle?.id && (
                <VehicleDetail vehicle={vehicle}>
                  <VehicleDetail.Problem>
                    <div className='flex flex-col gap-2 text-start mx-2'>
                      <p className='bg-base-300 rounded-[2rem] p-4 my-4 w-full'>
                        problema
                      </p>

                      <h3 className='text-secondary font-bold text-lg'>
                        Asignar
                      </h3>

                      <select
                        className='bg-base-300 w-full rounded-3xl p-3'
                        name='mechanic'
                        onChange={e => {
                          console.log(e.target.value);
                          setChooseMechanic(e.target.value)
                        }}
                      >
                        <option value='choose'>Elige un mecanico</option>
                        {mechanics.map(mechanic => (
                          <option key={mechanic.id} value={mechanic.id}>
                            {mechanic.firstName} {mechanic.lastName}
                          </option>
                        ))}
                      </select>

                      <div className='w-full flex justify-center pt-4'>
                        <button
                          onClick={handleUpdate}
                          className=' bg-primary text-secondary w-32 h-10 font-bold rounded-xl'
                        >
                          Asignar
                        </button>
                      </div>
                    </div>
                  </VehicleDetail.Problem>
                </VehicleDetail>
              )}
        </>
      </Container>
    </section>
  );
}
