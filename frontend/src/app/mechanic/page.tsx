'use client';
import { Input } from '@/components';
import { PlusIcon, UserIcon } from '@/assets/icons';
import Image from 'next/image';

import { useFormik } from 'formik';
import * as yup from 'yup';
import swal from 'sweetalert';

import { useMechanic } from '@/hook';
import type { Mechanic } from '@/@types';
import { Welcome } from './components/Welcome';

const basicSchema = yup.object().shape({
  email: yup.string().email('Plesase enter a valid email').required('Required'),
  firstName: yup.string().required('Required'),
  lastName: yup.string().required('Required'),
  document: yup
    .number()
    .positive()
    .integer()
    .min(10000, 'Must be higher to 10000')
    .max(99999999, 'Must be lesser to 99999999')
    .required('Required'),
  phone: yup.string().required('Required'),
  // role: yup.string().required('Required'),
  // password: yup.string().min(5).required('Required'),
});

const initialValues: Mechanic = {
  email: '',
  firstName: '',
  lastName: '',
  document: 0,
  phone: '',
  // role: '',
  // password: '',
};
export default function MechanicPage() {
  const { createMechanic } = useMechanic();

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: basicSchema,
      onSubmit: (values: Mechanic) => {
        createMechanic(values);
      },
    });

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete='off'
      className='flex flex-col justify-center items-center m-5 gap-5 [&>div]:mt-5'
    >
      <Welcome />
      <div className='flex flex-col gap-3'>
        <div className='flex justify-between'>
          <button type='button' className='btn btn-sm btn-circle bg-base-300'>
            <Image src={UserIcon} alt='user icon' />
          </button>
          <button
            type='button'
            className='btn btn-sm btn-circle btn-ghost'
            onClick={() => {
              swal(
                'Agregar un nuevo mecanico',
                '( guarda el anterior y crea uno nuevo )',
                'info'
              );
            }}
          >
            <Image src={PlusIcon} alt='plus icon' />
          </button>
        </div>
        <Input
          className={
            errors.email != null && touched.email != null
              ? 'border-error border-2'
              : ''
          }
          value={values.email}
          handleBlur={handleBlur}
          handleChange={handleChange}
          name='email'
          placeholder='Email'
          type='text'
        />
        {errors.email != null && touched.email != null && (
          <p className='text-xs text-error mt-[-10px]'>{errors.email}</p>
        )}
        <div className='flex flex-row gap-3'>
          <div className='flex-1 flex flex-col gap-3'>
            <Input
              className={
                errors.firstName != null && touched.firstName != null
                  ? 'border-error border-2'
                  : ''
              }
              value={values.firstName}
              handleBlur={handleBlur}
              handleChange={handleChange}
              name='firstName'
              placeholder='Nombre'
              type='text'
            />
            {errors.firstName != null && touched.firstName != null && (
              <p className='text-xs text-error mt-[-10px]'>
                {errors.firstName}
              </p>
            )}

            <Input
              className={
                errors.document != null && touched.document != null
                  ? 'border-error border-2'
                  : ''
              }
              value={values.document}
              handleBlur={handleBlur}
              handleChange={handleChange}
              name='document'
              placeholder='Dni'
              type='number'
            />
            {errors.document != null && touched.document != null && (
              <p className='text-xs text-error mt-[-10px]'>{errors.document}</p>
            )}
          </div>
          <div className='flex-1  flex flex-col gap-3'>
            <Input
              className={
                errors.lastName != null && touched.lastName != null
                  ? 'border-error border-2'
                  : ''
              }
              value={values.lastName}
              handleBlur={handleBlur}
              handleChange={handleChange}
              name='lastName'
              placeholder='Apellido'
              type='text'
            />
            {errors.lastName != null && touched.lastName != null && (
              <p className='text-xs text-error mt-[-10px]'>{errors.lastName}</p>
            )}
            <Input
              className={
                errors.phone != null && touched.phone != null
                  ? 'border-error border-2'
                  : ''
              }
              value={values.phone}
              handleBlur={handleBlur}
              handleChange={handleChange}
              name='phone'
              placeholder='Teléfono'
              type='string'
            />
            {errors.phone != null && touched.phone != null && (
              <p className='text-xs text-error mt-[-10px]'>{errors.phone}</p>
            )}
          </div>
        </div>
        <div className='flex justify-center mt-6'>
          <button
            type='submit'
            className='btn w-20 text-lg font-bold btn-primary text-secondary'
          >
            Listo
          </button>
        </div>
      </div>
    </form>
  );
}
