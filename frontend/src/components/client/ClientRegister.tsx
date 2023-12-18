'use client';
import { type FormikHelpers, useFormik } from 'formik';
import { validationSchema } from './ClientRegister.validator';
import { Input, Button, Alert, Sweetalert } from '@/components';
import { useModal } from '@/modal';
import { VehicleRegister } from '@/components/vehicle';
import type { User } from '@/@types';
import { useClient } from '@/hook';

export function ClientRegister() {
  const { openModal } = useModal();
  const { isLoading, error, created, createClient, cleanCreatedClient } =
    useClient();

  const initialValues: User = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    document: '', // it's number
    pass: '',
  };

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: async (values: User, { resetForm }: FormikHelpers<User>) => {
        values.document = Number(values.document);
        createClient(values);
      },
    });
  return (
    <>
      {!!error && <Alert message={error} type='error' />}
      {created && (
        <Sweetalert
          title='Cliente registrado'
          type='success'
          callback={() => {
            openModal(<VehicleRegister client={created} />);
            cleanCreatedClient();
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
        </div>
        <div className='input-container'>
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
            name='pass'
            placeholder='Ingresa tu contraseña'
            type='password'
            togglePassword
            value={values.pass}
            handleBlur={handleBlur}
            handleChange={handleChange}
            errorMessage={errors.pass}
            error={errors.pass != null && touched.pass != null}
          />
        </div>
        <div className='flex justify-center my-2'>
          <Button type='submit' disabled={isLoading}>
            {isLoading ? 'Enviando...' : 'Registrar'}
          </Button>
        </div>
      </form>
    </>
  );
}
