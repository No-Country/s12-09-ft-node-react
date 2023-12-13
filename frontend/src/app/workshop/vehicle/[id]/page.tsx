'use client';

import { Container, VehicleDetail } from '@/components';
import { useVehicle } from '@/hook';
import { useEffect } from 'react';

interface Props {
  params: { id: string };
}
export default function VehicleDetailsPage({ params }: Props) {
  const { vehicle, isLoading, getOneVehicleById } = useVehicle();

  useEffect(() => {
    getOneVehicleById(params.id);
  }, []);

  console.log(vehicle);

  return (
    <section>
      <Container>
        <>
          {isLoading === true
            ? 'Cargando...'
            : vehicle?.id && (
                <VehicleDetail vehicle={vehicle}>
                  <VehicleDetail.UserContent>
                    <p className='bg-base-300 rounded-[2rem] p-4 my-4'>
                      Problem
                    </p>
                  </VehicleDetail.UserContent>
                </VehicleDetail>
              )}
        </>
      </Container>
    </section>
  );
}
