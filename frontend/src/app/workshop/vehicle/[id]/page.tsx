'use client';
import { Container /* , Button */ } from '@/components';
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
          <h1>VehicleDetailsPage {params.id}</h1>
          {isLoading === true ? 'Cargando...' : JSON.stringify(vehicle)}
        </>
      </Container>
    </section>
  );
}
