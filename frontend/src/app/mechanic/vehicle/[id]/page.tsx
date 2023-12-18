'use client';
import { Button, Container } from '@/components';
import { VehicleDetail } from '@/components/vehicle';
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

  const handleCotization = () => {
    router.push(`/mechanic/vehicle/${params.id}/repair`);
  };

  return (
    <section>
      <Container>
        <>
          {isLoading === true
            ? 'Cargando...'
            : vehicle?.id && (
                <>
                  <VehicleDetail vehicle={vehicle}>
                    <VehicleDetail.Problem>
                      Problema detallado
                    </VehicleDetail.Problem>
                  </VehicleDetail>
                  <div className='flex justify-center mt-8'>
                    <Button onClick={handleCotization}>
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
