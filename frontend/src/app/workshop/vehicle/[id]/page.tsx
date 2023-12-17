import { VehicleDetail, Problem } from '@/components/vehicle';
import { vehicleService } from '@/services';

interface Props {
  params: { id: string };
}
export default async function VehicleDetailsPage({ params }: Props) {
  const { id } = params;
  const vehicle = await vehicleService.getOneById(id);

  return (
    <section>
      <VehicleDetail vehicle={vehicle}>
        <Problem>problem</Problem>
      </VehicleDetail>
    </section>
  );
}
