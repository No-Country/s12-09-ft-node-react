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
      <div>
        <VehicleDetail vehicle={vehicle}>
          <Problem>
            <p className='bg-base-300 rounded-[2rem] p-4 my-4 text-sm'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Asperiores earum iusto tenetur nesciunt labore. Est perferendis
              officia labore molestiae reprehenderit voluptatem consectetur
              aperiam porro autem. Cumque suscipit ipsum perferendis maiores.
            </p>
          </Problem>
        </VehicleDetail>
        <div className='flex justify-center mt-8'>
          <RedirectButton path='cost' />
        </div>
      </div>
    </section>
  );
}
