'use client';

import { Input } from '@/components/input';
import Image from 'next/image';
import { CabinAir } from '@/assets/icons';
import * as yup from 'yup';
import { useFormik } from 'formik';

const validationSchema = yup.object().shape({
  repairs: yup.array().of(
    yup.object().shape({
      name: yup.string(),
      description: yup.string().required('La descripción es obligatoria'),
      cost: yup
        .number()
        .required('El costo es obligatorio')
        .positive('El costo debe ser positivo'),
    })
  ),
  maintenance: yup.array().of(
    yup.object().shape({
      task: yup.string(),
      description: yup.string().required('La descripción es obligatoria'),
      cost: yup
        .number()
        .required('El costo es obligatorio')
        .positive('El costo debe ser positivo'),
    })
  ),
  labor: yup
    .number()
    .required('La mano de obra es obligatoria')
    .positive('La mano de obra debe ser positiva'),
});

interface Repair {
  name: string;
  description: string;
  cost: number;
}

interface Maintenance {
  task: string;
  description: string;
  cost: number;
}

interface RepairLog {
  repairs: Repair[];
  maintenance: Maintenance[];
  labor: string;
}



export default function CostPage() {
  const data = {
    repairs: ['Aire de cabina', 'Tren delantero'],
    maintenance: ['Neumaticos'],
  };

  const initialValues: RepairLog = {
    repairs: data.repairs.map(name => ({ name, description: '', cost: 0 })),
    maintenance: data.maintenance.map(task => ({ task, description: '', cost: 0 })),
    labor: '',
  };

  const { values, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: values => {
        console.log(values);
      },
    });

  return (
    <div>
      <header className='flex w-full justify-evenly pt-5 pb-4'>
        <div>
          <span className='text-secondary font-bold underline'>
            Componentes
          </span>
        </div>

        <div>
          <span className='text-secondary font-bold'>Costo</span>
        </div>
      </header>

      <main className='flex flex-col bg-base-300 sm:bg-transparent mx-4 rounded-2xl p-3'>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col sm:flex-row sm:gap-4 sm:border-b-2 sm:border-base-200 sm:pb-3 md:gap-20'>
            <div className='flex flex-col pb-2 w-full'>
              <h3 className='text-secondary font-semibold text-lg sm:text-xl sm:font-semibold'>
                Reparación
              </h3>

              {data.repairs.map((data, index) => (
                <div
                  key={data}
                  className='flex border-b-2 border-base-200 sm:border-none gap-1 py-3 sm:gap-4'
                >
                  <div className=''>
                    <div className='relative p-1 bg-white sm:bg-base-300 flex justify-center h-7 w-7 sm:h-12 sm:w-12 rounded-full'>
                      <Image
                        src={CabinAir}
                        alt='Icon'
                        fill
                        className='p-1 sm:p-2'
                      />
                    </div>
                  </div>

                  <div className='flex flex-col gap-1 w-full'>
                    <span className='text-sm text-base-accent pl-1 sm:text-base md:text-lg'>
                      {data}
                    </span>
                    <Input
                      name={`repairs[${index}].description`}
                      placeholder='Objeto a reparar'
                      className={`bg-white sm:bg-base-300 h-8 md:h-10 w-44 `}
                      value={values.repairs[index]?.description}
                      handleBlur={handleBlur}
                      handleChange={handleChange}
                    />
                  </div>

                  <div className='flex items-end max-w-[98px] md:max-w-[112px] md:ml-3'>
                    <div className='flex items-center gap-1'>
                      <span>$</span>
                      <Input
                        name={`repairs[${index}].cost`}
                        placeholder='Costo'
                        className={'bg-white sm:bg-base-300 h-8 md:h-10'}
                        value={values.repairs[index]?.cost}
                        handleBlur={handleBlur}
                        handleChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className='flex flex-col pb-2 w-full'>
              <h3 className='text-secondary font-semibold text-lg pb-3 sm:text-xl sm:font-semibold'>
                Mantenimiento
              </h3>

              {data.maintenance.map((data, index) => (
                <div
                  key={data}
                  className='flex border-b-2 border-base-200 sm:border-none gap-1 py-3 sm:gap-4'
                >
                  <div className='pt-1'>
                    <div className='relative p-1 bg-white sm:bg-base-300 flex justify-center h-7 w-7 sm:h-12 sm:w-12 rounded-full'>
                      <Image
                        src={CabinAir}
                        alt='Icon'
                        fill
                        className='p-1 sm:p-2'
                      />
                    </div>
                  </div>

                  <div className='flex flex-col gap-1 w-full'>
                    <span className='text-sm text-base-accent pl-1 sm:text-base md:text-lg'>
                      {data}
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

          <div className='mx-4 flex justify-evenly pt-5'>
            <button className='px-4 py-2 border-2 border-primary rounded-xl text-secondary font-bold text-lg'>
              Cancelar
            </button>

            <button
              type='submit'
              className='px-4 py-2 bg-primary rounded-xl text-secondary font-bold text-lg'
            >
              Enviar Cotizacion
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
