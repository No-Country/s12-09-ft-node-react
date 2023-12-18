import { Container } from '@/components';
import { RedirectButton } from '@/components/RedirectButton';
import { Problem, VehicleDetail } from '@/components/vehicle';
import { vehicleService } from '@/services';

interface VehicleDetailProps {
  params: { id: string };
}

export default async function VehicleDetailsPage({
  params,
}: VehicleDetailProps) {
  const vehicle = await vehicleService.getOneById(params.id);
  // const router = useRouter();

  return (
    <section>
      <Container>
        <div>
          <VehicleDetail vehicle={vehicle}>
            <Problem>Problema detallado</Problem>
          </VehicleDetail>
          <div className='flex justify-center mt-8'>
            <RedirectButton path='cost' />
          </div>
        </div>
      </Container>
    </section>
  );
}
