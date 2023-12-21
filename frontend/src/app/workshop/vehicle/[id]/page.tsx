'use client';

import { AddMechanicOnVehicle } from '@/components/mechanic';
import { Problem, VehicleDetail } from '@/components/vehicle';
import { useMechanic, useVehicle } from '@/hook';
import { useEffect } from 'react';

interface Props {
  params: { id: string };
}
export default function VehicleDetailsPage({ params }: Props) {
  const { vehicle, getOneVehicleById } = useVehicle();
  const { mechanics, getAllMechanic } = useMechanic();

  useEffect(() => {
    getOneVehicleById(params.id);
    getAllMechanic();
  }, []);

  if (!vehicle) return <p>Cargando...</p>;

  return (
    <section>
      <VehicleDetail vehicle={vehicle}>
        <Problem>
          <div className='flex flex-col gap-2 text-start mx-2'>
            <p className='bg-base-300 rounded-[2rem] p-4 my-4 w-full'>
              problema
            </p>

            <AddMechanicOnVehicle vehicle={vehicle} mechanics={mechanics} />
          </div>
        </Problem>
      </VehicleDetail>
    </section>
  );
}
