'use client';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Input } from '@/components/input';
import type {Dispatch, SetStateAction} from 'react'
import { useClient } from '@/hook/useClient';
import { useModal } from '@/context';

const basicSchema = yup.object().shape({
  brand: yup.string().required('Required'),
  model: yup.string().required('Required'),
  year: yup.number().required('Required'),
  mileage: yup.number().positive().integer().required('Required'),
  color: yup.string().required('Required'),
  licensePlate: yup.string().required('Required'),
});

const initialValues = {
  brand: '',
  model: '',
  year: 0,
  mileage: 0,
  color: '',
  licensePlate: '',
};

interface Props {
  isOpen: boolean,
  handleOpen: Dispatch<SetStateAction<boolean>>
}

const RegisterVehicle: React.FC<Props> = ({isOpen, handleOpen}) => {
  const { clients } = useClient()
  const { isModalOpen, closeModal } = useModal()

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        ...initialValues,
        userId: clients.length > 0 ? clients[0].id : null
      },
      validationSchema: basicSchema,
      onSubmit: values => {
        console.log(values);
        handleOpen(false)
      },
    });

  const colors = [
    {
      name: 'white',
      class: 'white',
    },
    {
      name: 'red',
      class: '#ef4444',
    },
    {
      name: 'blue',
      class: '#3b82f6',
    },
    {
      name: 'green',
      class: '#22c55e',
    },
    {
      name: 'orange',
      class: '#f97316',
    },
    {
      name: 'black',
      class: 'black',
    },
  ];

  return (
    <div
      className={`absolute w-full bottom-0 bg-gray-200 rounded-t-[3rem] sm:bottom-auto sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-[3rem] sm:max-w-md transition-all ${isModalOpen('registerVehicle') ? '' : 'hidden'}`}
    >
      <header className='flex gap-8 sm:gap-16 justify-center pt-8'>
        <span className=' text-sm sm:text-base font-medium'>
          Datos de vehiculo
        </span>
      </header>

      <main className='py-8 px-8'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
          <div className='flex gap-2'>
            <div className='w-full'>
              <Input
                name='brand'
                type='text'
                placeholder='Marca'
                className={`bg-base-100 text-sm ${
                  errors.brand != null && touched.brand != null
                    ? 'border-error border-2'
                    : ''
                }`}
                value={values.brand}
                handleBlur={handleBlur}
                handleChange={handleChange}
              />
            </div>

            <div className='w-full'>
              <Input
                name='model'
                type='text'
                placeholder='Modelo'
                className={`bg-base-100 text-sm ${
                  errors.model != null && touched.model != null
                    ? 'border-error border-2'
                    : ''
                }`}
                value={values.model}
                handleBlur={handleBlur}
                handleChange={handleChange}
              />
            </div>
          </div>

          <div className='flex gap-2 w-full'>
            <div className='w-full'>
              <Input
                type='text'
                name='year'
                placeholder='Año'
                className={`bg-base-100 text-sm ${
                  errors.year != null && touched.year != null
                    ? 'border-error border-2'
                    : ''
                }`}
                value={values.year}
                handleBlur={handleBlur}
                handleChange={handleChange}
              />
            </div>

            <div className='w-full'>
              <Input
                type='text'
                name='mileage'
                placeholder='Kilometraje'
                className={`bg-base-100 text-sm ${
                  errors.mileage != null && touched.mileage != null
                    ? 'border-error border-2'
                    : ''
                }`}
                value={values.mileage}
                handleBlur={handleBlur}
                handleChange={handleChange}
              />
            </div>
          </div>

          <div className='px-2 py-2 flex justify-between'>
            <span>Color</span>

            <ul className='flex gap-4'>
              {colors.map(color => (
                <li
                  key={color.name}
                  onClick={() => {
                    handleChange('color')(color.name);
                  }}
                  className={`cursor-pointer h-7 w-7 border-2 rounded-full transition-all`}
                  style={{'borderColor': color.class, 'backgroundColor': values.color === color.name ? color.class : ''}}
                />
              ))}
            </ul>
          </div>

          <div>
            <Input
              name='licensePlate'
              placeholder='Patente'
              className={`bg-base-100 text-sm ${
                errors.licensePlate != null && touched.licensePlate != null
                  ? 'border-error border-2'
                  : ''
              }`}
              value={values.licensePlate}
              handleBlur={handleBlur}
              handleChange={handleChange}
            />
          </div>

          <div className='flex justify-center pt-2 '>
            <button
              type='submit'
              className='btn text-lg font-medium btn-accent text-base-180 sm:w-full'
            >
              Agregar Vehiculo
            </button>
          </div>
        </form>
      </main>
      
      <div className='flex justify-center'>
        <button onClick={() => {closeModal('registerVehicle')}}>
          Close Modal
        </button>
      </div>
    </div>
  );
};

export default RegisterVehicle;
