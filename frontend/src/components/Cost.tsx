'use client';

import { Input, Container, Button } from '@/components';
import * as yup from 'yup';
import { useFormik } from 'formik';
import CostBlock from './CostBlock';

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
  labor: number;
  accepted: false;
  userId: string;
  vehicleId: string;
  mechanicId: string;
}

export default function CostPage({
  itemsForQuoteRepair,
  setItemsForQuoteRepair,
  itemsForQuoteMainteance,
  setItemsForQuoteMainteance
}: any) {
  const initialValues: RepairLog = {
    repairs: itemsForQuoteRepair?.map(name => ({
      name,
      description: '',
      cost: 0,
    })),
    maintenance: itemsForQuoteMainteance?.map(task => ({
      task,
      description: '',
      cost: 0,
    })),
    labor: 0,
    accepted: false,
    userId: '4d00e8d1-1609-4799-a8df-304e9dd44d8a',
    vehicleId: 'e6e3f04f-32ef-4571-ba04-a553a890ea78',
    mechanicId: 'bad33934-8945-4502-b12f-22fc522670aa',
  };

  const { values, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: values => {
      console.log(values);
    },
  });

  console.log(itemsForQuoteRepair);
  console.log(itemsForQuoteMainteance);

  return (
    <Container>
      <section className='flex flex-col bg-base-300 sm:bg-transparent mx-4 rounded-2xl p-3'>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col'>
            <CostBlock
              title='Reparacion'
              data={itemsForQuoteRepair}
              setData={setItemsForQuoteRepair}
              handleBlur={handleBlur}
              handleChange={handleChange}
              values={values}
            />
            <CostBlock
              title='Mantenimiento'
              data={itemsForQuoteMainteance}
              setData={setItemsForQuoteMainteance}
              handleBlur={handleBlur}
              handleChange={handleChange}
              values={values}
            />
          </div>

          <div className='flex items-center border-b-2 border-base-200 py-3'>
            <h3 className='text-secondary font-medium pb-1 w-full flex-grow'>
              Mano de obra
            </h3>

            <div className='flex items-end gap-1 max-w-[98px]'>
              <div className='flex items-center gap-1'>
                <span>$</span>
                <Input
                  name='labor'
                  placeholder='Costo'
                  className={'bg-white h-8'}
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

          <div className='mx-4 flex justify-evenly gap-2 pt-5'>
            <Button type='submit'>Cancelar</Button>

            <Button type='submit'>Enviar Cotizacion</Button>
          </div>
        </form>
      </section>
    </Container>
  );
}
