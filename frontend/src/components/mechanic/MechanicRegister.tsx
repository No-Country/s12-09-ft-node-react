'use client';

import { type FormikHelpers, useFormik } from 'formik';
import { validationSchema } from './MechanicRegister.validator';
import { Input, Button, Alert, Sweetalert } from '@/components';
import type { Mechanic } from '@/@types';
import { useMechanic } from '@/hook';
import { cleanCreatedMechanicSync } from '@/store/features';
// import { redirect } from 'next/navigation';

export function MechanicRegister() {
  const { isLoading, created, error, createMechanic } = useMechanic();

  const initialValues: Mechanic = {
    firstName: '',
    lastName: '',
    email: '',
    document: '', // it's a number
    phone: '',
    password: '',
  };

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: async (
        values: Mechanic,
        { resetForm }: FormikHelpers<Mechanic>
      ) => {
        values.document = Number(values.document);
        createMechanic(values);
        resetForm();
      },
    });
  return (
      <div className='max-w-2xl w-full mx-auto'>
        {!!error && <Alert message={error} type='error' />}
        {created && (
          <Sweetalert
            title='Mecánico registrado'
            type='success'
            callback={() => {
              cleanCreatedMechanicSync();
            }}
          />
        )}
        <form
          onSubmit={handleSubmit}
          className='
        [&>.input-container]:flex 
        [&>.input-container]:gap-4
        [&>.input-container>svg]:mt-4
        [&>.input-container>div]:flex-1'
        >
          <div className='input-container'>
            <Input
              name='firstName'
              placeholder='Ingresa tu nombre'
              value={values.firstName}
              handleBlur={handleBlur}
              handleChange={handleChange}
              errorMessage={errors.firstName}
              error={errors.firstName != null && touched.firstName != null}
            />
          </div>
          <div className='input-container'>
            <Input
              name='lastName'
              placeholder='Ingresa tu apellido'
              value={values.lastName}
              handleBlur={handleBlur}
              handleChange={handleChange}
              errorMessage={errors.lastName}
              error={errors.lastName != null && touched.lastName != null}
            />
          </div>
          <div className='input-container'>
            <Input
              name='phone'
              placeholder='Ingresa tu número telefónico'
              value={values.phone}
              handleBlur={handleBlur}
              handleChange={handleChange}
              errorMessage={errors.phone}
              error={errors.phone != null && touched.phone != null}
            />

            <Input
              name='document'
              placeholder='DNI'
              value={values.document}
              handleBlur={handleBlur}
              handleChange={handleChange}
              errorMessage={errors.document}
              error={errors.document != null && touched.document != null}
            />
          </div>
          <div className='input-container'>
            <Input
              name='email'
              placeholder='Ingresa tu correo electrónico'
              value={values.email}
              handleBlur={handleBlur}
              handleChange={handleChange}
              errorMessage={errors.email}
              error={errors.email != null && touched.email != null}
            />
          </div>
          <div className='input-container'>
            <Input
              name='password'
              placeholder='Ingresa tu contraseña'
              type='password'
              togglePassword
              value={values.password}
              handleBlur={handleBlur}
              handleChange={handleChange}
              errorMessage={errors.password}
              error={errors.password != null && touched.password != null}
            />
          </div>
          <div className='flex justify-center my-2'>
            <Button type='submit' disabled={isLoading}>
              {isLoading ? 'Enviando...' : 'Registrar'}
            </Button>
          </div>
        </form>
      </div>
  );
}
