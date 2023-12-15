'use client';
import { Button, Container, VehicleDetail } from '@/components';
import { useVehicle } from '@/hook';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface VehicleDetailProps {
  params: { id: string };
}

export default function VehicleDetailsPage({ params }: VehicleDetailProps) {
  const { vehicle, isLoading, getOneVehicleById } = useVehicle();
  const router = useRouter();

  useEffect(() => {
    getOneVehicleById(params.id);
  }, []);

  const handleCotiseichon = () => {
    router.push(`${params.id}/budget`);
  };

  return (
    <section>
      <Container>
        <>
          {isLoading
            ? 'Cargando...'
            : vehicle?.id && (
                <>
                  <VehicleDetail vehicle={vehicle}>
                    <VehicleDetail.Problem>
                      Problema detallado
                    </VehicleDetail.Problem>
                  </VehicleDetail>
                  <div className='flex justify-center mt-8'>
                    <Button onClick={handleCotiseichon}>
                      Enviar cotizacion
                    </Button>
                  </div>
                </>
              )}
        </>
      </Container>
    </section>
  );
}
