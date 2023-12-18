'use client';
import { useFormik } from 'formik';
import * as yup from 'yup';
import swal from 'sweetalert';
import { Input, Button, VehicleRegister } from '.';
import type { User } from '@/@types';
import { useClient, useModal } from '@/hook';

const initialValues: User = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  document: 0,
  pass: '',
};

const basicSchema = yup.object().shape({
  lastName: yup.string().required('Required'),
  firstName: yup.string().required('Required'),
  email: yup.string().email('Plesase enter a valid email').required('Required'),
  phone: yup.string().required('Required'),
  document: yup.number().positive().integer().required('Required'),
  pass: yup.string().min(5).required('Required'),
});

export function ClientRegister() {
  const { openModal } = useModal();
  const { isLoading, createClient } = useClient();
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: basicSchema,
      onSubmit: async (values: User, { resetForm }) => {
        console.log(values);
        createClient(values);
        resetForm();

        await swal(
          'Cliente registrado',
          'success'
        ).then(() => {});

        openModal(<VehicleRegister />);
      },
    });
  return (
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
          type='text'
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
          type='text'
          value={values.lastName}
          handleBlur={handleBlur}
          handleChange={handleChange}
          errorMessage={errors.lastName}
          error={errors.lastName != null && touched.lastName != null}
        />
      </div>
      <div className='input-container'>
        <Input
          name='email'
          placeholder='Ingresa tu correo electrónico'
          type='text'
          value={values.email}
          handleBlur={handleBlur}
          handleChange={handleChange}
          errorMessage={errors.email}
          error={errors.email != null && touched.email != null}
        />
      </div>
      <div className='input-container'>
        <Input
          name='phone'
          placeholder='Ingresa tu número telefónico'
          type='text'
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
          type='number'
          value={values.document}
          handleBlur={handleBlur}
          handleChange={handleChange}
          errorMessage={errors.document}
          error={errors.document != null && touched.document != null}
        />
      </div>
      <div className='input-container'>
        <Input
          name='pass'
          placeholder='Ingresa tu contraseña'
          type='password'
          value={values.pass}
          handleBlur={handleBlur}
          handleChange={handleChange}
          errorMessage={errors.pass}
          error={errors.pass != null && touched.pass != null}
        />
      </div>
      <div className='flex justify-center my-2'>
        <Button type='submit'>{isLoading ? 'Enviando...' : 'Registrar'}</Button>
      </div>
    </form>
  );
}
