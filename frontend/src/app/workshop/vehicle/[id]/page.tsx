import { AddMechanicOnVehicle } from '@/components/mechanic';
import { VehicleDetail, Problem } from '@/components/vehicle';
import { config } from '@/config';
import { mechanicService } from '@/services';

interface Props {
  params: { id: string };
}
export default async function VehicleDetailsPage({ params }: Props) {
  const { id } = params;

  // ! change for a service (vehicleService)
  const response = await fetch(`${config.api.base}vehicle/${id}`);
  const vehicle = await response.json();

  const mechanics = await mechanicService.getAll();

  return (
    <section>
      <VehicleDetail vehicle={vehicle}>
        <Problem>
          <>problem</>
        </Problem>
      </VehicleDetail>
      <AddMechanicOnVehicle vehicle={vehicle} mechanics={mechanics} />
    </section>
  );
}
