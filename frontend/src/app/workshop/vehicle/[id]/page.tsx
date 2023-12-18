import { AddMechanicOnVehicle } from '@/components/mechanic';
import { VehicleDetail, Problem } from '@/components/vehicle';
import { mechanicService, vehicleService } from '@/services';

interface Props {
  params: { id: string };
}
export default async function VehicleDetailsPage({ params }: Props) {
  const { id } = params;
  const vehicle = await vehicleService.getOneById(id);
  const mechanics = await mechanicService.getAll();

  console.log(vehicle);

  return (
    <section>
      <VehicleDetail vehicle={vehicle}>
        <Problem>problem</Problem>
      </VehicleDetail>
      <AddMechanicOnVehicle vehicle={vehicle} mechanics={mechanics} />
    </section>
  );
}
