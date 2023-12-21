'use client';

import { Button } from '@/components';
import { useBudget } from '@/hook';
import { useRouter } from 'next/navigation';
import swal from 'sweetalert';
import type { Budget as BudgetType } from '@/@types';
import { useModal } from '@/modal';
import { options } from '@/constants';

interface Props {
  budget: BudgetType[];
}

const Budget = ({ budget }: Props) => {
  const { updateBudget } = useBudget();
  const { closeModal } = useModal();
  const router = useRouter();

  const acceptBudget = () => {
    const originalObject = budget[0];

    const transformedObject = {
      id: originalObject.id,
      repair: originalObject.repair,
      maintenance: originalObject.maintenance,
      costs: originalObject.costs,
      labor: originalObject.labor,
      accepted: true,
      isActive: originalObject.isActive,
      userId: originalObject?.user?.id,
      vehicleId: originalObject?.vehicleAssociation?.id,
      mechanicId: originalObject?.mechanicAssociation?.id,
    };

    updateBudget(transformedObject);
    swal('Se acepto la cotizacion', '', 'success', {
      buttons: [false],
      timer: 1000,
    }).then(() => {closeModal(); router.refresh()});
  };

  if(!budget.length) return <p className='min-h-[250px] flex justify-center items-center'>No tienes ninguna contizacion nueva</p>

  return (
    <div className='flex flex-col gap-4 justify-center items-center'>
      <div className='flex flex-col  max-w-sm w-full px-3 py-4 rounded-2xl'>
        <section>
          <h2 className='text-lg font-semibold text-secondary pb-1'>
            Reparación
          </h2>

          {budget[0]?.repair.map(data => (
            <div
              key={data.name}
              className='flex items-center justify-between py-2 text-accent'
            >
              <div className='flex gap-2 items-center'>
                <div className='h-7 w-7 [&>svg]:h-5 [&>svg]:w-5 rounded-full flex justify-center items-center bg-base-300'>
                  {options.optionsRepair.map(
                    item =>
                      item.title === data.name && (
                        <div key={item.title}>{item.icon}</div>
                      )
                  )}
                </div>

                <span>{data.name}</span>
              </div>

              <div className='flex gap-2'>
                <span>$</span>
                <span>{data.cost}</span>
              </div>
            </div>
          ))}
        </section>

        <section className='pb-3'>
          <h2 className='text-lg font-semibold text-secondary pb-1'>
            Mantenimiento
          </h2>

          {budget[0]?.maintenance.map(data => (
            <div
              key={data.task}
              className='flex items-center justify-between py-2 text-accent'
            >
              <div className='flex gap-2'>
                <div className='h-7 w-7 [&>svg]:h-5 [&>svg]:w-5 rounded-full flex justify-center items-center bg-base-300'>
                  {options.optionsMaintenance.map(
                    item =>
                      item.title === data.task && (
                        <div key={item.title}>{item.icon}</div>
                      )
                  )}
                </div>

                <span>{data.task}</span>
              </div>

              <div className='flex gap-2'>
                <span>$</span>
                <span>{data.cost}</span>
              </div>
            </div>
          ))}
        </section>

        <section className='flex flex-col gap-3 border-t-2 border-accent pt-4 text-accent'>
          <div className='flex justify-between'>
            <span className='text-secondary font-medium'>Mano de obra</span>

            <div>
              <span>$</span>
              <span>{budget[0]?.labor}</span>
            </div>
          </div>

          <div className='flex justify-between'>
            <span className='text-secondary font-medium'>TOTAL</span>

            <div>
              <span>$</span>
              <span>{budget[0]?.costs}</span>
            </div>
          </div>
        </section>
      </div>

      <div>
        <Button onClick={acceptBudget} className='text-sm'>
          Aceptar Cotizacion
        </Button>
      </div>
    </div>
  );
};

export default Budget;
