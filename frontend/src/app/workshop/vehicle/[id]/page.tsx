'use client';
import { Container /* , Button */ } from '@/components';
import { useVehicle } from '@/hook';
import { useEffect } from 'react';
interface Props {
  params: { id: string };
}
export default function VehicleDetailsPage({ params }: Props) {
  const { vehicles, vehicle, getOneVehicleById } = useVehicle();

  useEffect(() => {
    getOneVehicleById(params.id);
  }, []);

  console.log(vehicles, vehicle);

  return (
    <section>
      <Container>
        <>
          <h1>VehicleDetailsPage {params.id}</h1>
        </>
      </Container>
    </section>
  );
}
