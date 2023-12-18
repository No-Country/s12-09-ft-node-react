'use client';

import { Button, Container } from '@/components';
import { useBudget } from '@/hook';
import React, { useEffect } from 'react';
import swal from 'sweetalert';

const BudgetPage = () => {
  const { getAllBudget, budgets, updateBudget, updated } = useBudget();

  useEffect(() => {
    getAllBudget();
  }, []);

  const acceptBudget = async () => {
    const originalObject = budgets[0];

    const transformedObject = {
      id: originalObject.id,
      repair: originalObject.repair,
      maintenance: originalObject.maintenance,
      costs: parseFloat(originalObject.costs),
      labor: parseFloat(originalObject.labor),
      accepted: false,
      isActive: originalObject.isActive,
      userId: originalObject?.user?.id,
      vehicleId: originalObject?.vehicleAssociation?.id,
      mechanicId: originalObject?.mechanicAssociation?.id,
    };

    console.log(originalObject)
    updateBudget(transformedObject);

    if(updated) {
        await swal('Se acepto la cotizacion')
        console.log('Updated', updated)
    }
  };

  return (
    <Container>
      <div className='flex flex-col gap-4 justify-center items-center'>
        <div className='flex flex-col bg-base-300 max-w-sm w-full px-3 py-4 rounded-2xl'>
          <section>
            <h2 className='text-lg font-semibold text-secondary pb-1'>
              Reparación
            </h2>

            {budgets[0]?.repair.map(data => (
              <div
                key={data.name}
                className='flex items-center justify-between py-2 text-accent'
              >
                <div className='flex gap-3'>
                  <div className='h-6 w-6 bg-white rounded-full' />

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

            {budgets[0]?.maintenance.map(data => (
              <div
                key={data.task}
                className='flex items-center justify-between py-2 text-accent'
              >
                <div className='flex gap-3'>
                  <div className='h-6 w-6 bg-white rounded-full' />

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
                <span>{budgets[0]?.labor}</span>
              </div>
            </div>

            <div className='flex justify-between'>
              <span className='text-secondary font-medium'>TOTAL</span>

              <div>
                <span>$</span>
                <span>{budgets[0]?.costs}</span>
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
    </Container>
  );
};

export default BudgetPage;
