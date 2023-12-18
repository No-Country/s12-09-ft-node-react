'use client';

import type { ItemsRepair } from '@/app/mechanic/vehicle/[id]/budget/page';
import type { Budget } from '@/@types';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useBudget, useVehicle } from '@/hook';
import { Input } from '@/components';
import swal from 'sweetalert';
import { Tires } from '@/assets/svg';

const validationSchema = yup.object().shape({
  repair: yup.array().of(
    yup.object().shape({
      name: yup.string(),
      description: yup.string().required('La descripción es obligatoria'),
      cost: yup.number().required('El costo es obligatorio'),
    })
  ),
  maintenance: yup.array().of(
    yup.object().shape({
      task: yup.string(),
      description: yup.string().required('La descripción es obligatoria'),
      cost: yup.number().required('El costo es obligatorio'),
    })
  ),
  labor: yup.number().required('La mano de obra es obligatoria'),
});

interface Props {
  itemsForQuoteRepair: ItemsRepair[];
  itemsForQuoteMainteance: ItemsRepair[];
  setView?: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const CostPage: React.FC<Props> = ({
  itemsForQuoteRepair,
  itemsForQuoteMainteance,
  setView,
}) => {
  const params = useParams();
  const vehicleId = Array.isArray(params.id) ? params.id[0] : params.id;

  const { createBudget, created, budgets } = useBudget();
  const { getOneVehicleById, vehicle } = useVehicle();

  useEffect(() => {
    getOneVehicleById(vehicleId);

    console.log('vehicle:', vehicle?.id);
  }, [params]);
  // @ts-expect-error
  const initialValues: Budget = {
    repair: itemsForQuoteRepair.map(repairItem => ({
      name: repairItem.title,
      description: '',
      cost: '',
    })),
    maintenance: itemsForQuoteMainteance.map(maintenanceItem => ({
      task: maintenanceItem.title,
      description: '',
      cost: '',
    })),
    labor: 0,
    accepted: false,
    userId: vehicle?.userId,
    vehicleId: vehicle?.id,
    mechanicId: vehicle?.mechanicId,
  };

  const { values, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues,
    validationSchema,
    enableReinitialize: true,
    onSubmit: values => {
      createBudget(values);
      console.log('se creo un nuevo budget', created);
      console.log('se creo', budgets);
      if (created) {
        swal('Cotizacion registrada', '', 'success');
      }
    },
  });

  return (
    <div>
      <section className='flex flex-col bg-base-300 sm:bg-transparent mx-4 rounded-2xl px-4 py-3'>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col sm:flex-row sm:gap-4 sm:border-b-2 sm:border-base-200 sm:pb-3 md:gap-20'>
            <div className='flex flex-col pb-2 w-full'>
              <h3 className='text-secondary font-semibold text-lg sm:text-xl sm:font-semibold'>
                Reparación
              </h3>

              {itemsForQuoteRepair.map((data, index) => {
                return (
                  <div
                    key={index}
                    className='flex border-b-2 border-base-200 sm:border-none gap-1 py-3 sm:gap-4'
                  >
                    <div className=''>
                      <div className='p-1 bg-white sm:bg-base-300 flex justify-center items-center h-7 w-7 sm:h-12 sm:w-12 rounded-full'>
                        {data.icon}
                      </div>
                    </div>

                    <div className='flex flex-col gap-1 w-full'>
                      <span className='text-sm text-base-accent pl-1 sm:text-base md:text-lg'>
                        {data.title}
                      </span>
                      <Input
                        name={`repair[${index}].description`}
                        placeholder='Objeto a reparar'
                        className={`bg-white sm:bg-base-300 h-8 md:h-10 w-44 `}
                        value={values.repair[index]?.description}
                        handleBlur={handleBlur}
                        handleChange={handleChange}
                      />
                    </div>

                    <div className='flex items-end max-w-[98px] md:max-w-[112px] md:ml-3'>
                      <div className='flex items-center gap-1'>
                        <span>$</span>
                        <Input
                          type='number'
                          name={`repair[${index}].cost`}
                          placeholder='Costo'
                          className={'bg-white sm:bg-base-300 h-8 md:h-10'}
                          value={values.repair[index]?.cost}
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className='flex flex-col pb-2 w-full'>
              <h3 className='text-secondary font-semibold text-lg sm:text-xl sm:font-semibold'>
                Mantenimiento
              </h3>

              {itemsForQuoteMainteance.map((data, index) => (
                <div
                  key={index}
                  className='flex border-b-2 border-base-200 sm:border-none gap-1 py-3 sm:gap-4'
                >
                  <div className='pt-1'>
                    <div className='relative p-1 items-center bg-white sm:bg-base-300 flex justify-center h-7 w-7 sm:h-12 sm:w-12 rounded-full'>
                      <Tires />
                    </div>
                  </div>

                  <div className='flex flex-col gap-1 w-full'>
                    <span className='text-sm text-base-accent pl-1 sm:text-base md:text-lg'>
                      {data.title}
                    </span>
                    <Input
                      name={`maintenance[${index}].description`}
                      placeholder='Objeto a reparar'
                      className={'bg-white sm:bg-base-300 h-8 md:h-10 w-44'}
                      value={values.maintenance[index]?.description}
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                    />
                  </div>

                  <div className='flex items-end max-w-[98px] md:max-w-[112px] md:ml-3 md:mr-6'>
                    <div className='flex items-center gap-1'>
                      <span>$</span>
                      <Input
                        name={`maintenance[${index}].cost`}
                        placeholder='Costo'
                        className={'bg-white sm:bg-base-300 h-8 md:h-10'}
                        type='number'
                        value={values.maintenance[index]?.cost}
                        handleBlur={handleBlur}
                        handleChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='flex items-center border-b-2 border-base-200 py-3'>
            <h3 className='text-secondary font-medium pb-1 w-full flex-grow sm:text-xl sm:font-semibold'>
              Mano de obra
            </h3>

            <div className='flex items-end gap-1 max-w-[98px]'>
              <div className='flex items-center gap-1'>
                <span>$</span>
                <Input
                  name='labor'
                  type='number'
                  placeholder='Costo'
                  className={'bg-white sm:bg-base-300 h-8 md:h-10 w-20'}
                  value={values.labor}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className='flex pt-3 pb-2'>
            <h3 className='text-secondary font-medium pb-1 w-full flex-grow sm:text-xl sm:font-semibold'>
              TOTAL
            </h3>

            <div className='flex items-end gap-1 max-w-[98px]'>
              <div className='flex items-center gap-1'>
                <span>$</span>
                <Input
                  name='total'
                  placeholder='Total'
                  className={'bg-white sm:bg-base-300 h-8 md:h-10 w-20'}
                />
              </div>
            </div>
          </div>

          <div className='mx-4 flex justify-evenly pt-5 gap-2'>
            <button
              onClick={() => {
                if (setView) setView('Componentes');
              }}
              className='px-4 py-2 border-2 border-primary rounded-xl text-secondary font-bold'
            >
              Cancelar
            </button>

            <button
              type='submit'
              className='px-4 py-2 bg-primary rounded-xl text-secondary font-bold '
            >
              Enviar Cotizacion
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default CostPage;
