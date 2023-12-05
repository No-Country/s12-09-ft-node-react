'use client';

import { input as Input } from '@/components';
import {
  GroupIcon,
  LockIcon,
  MailIcon,
  PhoneIcon,
  AddressIcon,
} from '@/assets/icons';
import Image from 'next/image';
import { useFormik } from 'formik';
import * as yup from 'yup';
import swal from 'sweetalert';

const basicSchema = yup.object().shape({
  email: yup.string().email('Plesase enter a valid email').required('Required'),
  workshopName: yup.string().required('Required'),
  phone: yup.number().positive().integer().required('Required'),
  password: yup.string().min(5).required('Required'),
  address: yup.string().required('Required'),
});

const WorkshopRegister = (): JSX.Element => {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        email: '',
        workshopName: '',
        phone: '',
        password: '',
        address: '',
      },
      validationSchema: basicSchema,
      onSubmit: async values => {
        console.log(values);
        await swal(
          'Taller registrado',
          '( simulacion no tiene endpoint )',
          'success'
        );
      },
    });

  return (
    <div className='flex flex-col items-center mt-8'>
      <header>
        <h1 className='text-center text-3xl font-bold text-secondary'>
          Bienvenido!
        </h1>
        <h2 className='text-xl text-center text-accent'>
          Ingresa los datos de tu taller para registrarlo
        </h2>
      </header>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col w-full gap-2 my-8 items-center'
      >
        <div className='flex flex-row gap-2'>
          <Image src={GroupIcon} alt='user icon' />
          <Input
            name='workshopName'
            placeholder='Nombre del taller'
            type='text'
            className={
              errors.workshopName && touched.workshopName
                ? 'input-error border-error'
                : ''
            }
            value={values.workshopName}
            handleBlur={handleBlur}
            handleChange={handleChange}
          />
        </div>
        <div className='flex flex-row gap-2'>
          <Image src={LockIcon} alt='user icon' />
          <Input
            name='password'
            placeholder='Contraseña'
            type='password'
            className={
              errors.password && touched.password
                ? 'input-error border-error'
                : ''
            }
            value={values.password}
            handleBlur={handleBlur}
            handleChange={handleChange}
          />
        </div>
        <div className='flex flex-row gap-2'>
          <Image src={MailIcon} alt='user icon' />
          <Input
            name='email'
            placeholder='Email'
            type='text'
            className={
              errors.email && touched.email ? 'input-error border-error' : ''
            }
            value={values.email}
            handleBlur={handleBlur}
            handleChange={handleChange}
          />
        </div>
        <div className='flex flex-row gap-2'>
          <Image src={PhoneIcon} alt='user icon' />
          <Input
            name='phone'
            placeholder='Teléfono'
            type='tel'
            className={
              errors.phone && touched.phone ? 'input-error border-error' : ''
            }
            value={values.phone}
            handleBlur={handleBlur}
            handleChange={handleChange}
          />
        </div>
        <div className='flex flex-row gap-2'>
          <Image src={AddressIcon} alt='user icon' />
          <Input
            name='address'
            placeholder='Direccion'
            type='text'
            className={
              errors.address && touched.address
                ? 'input-error border-error'
                : ''
            }
            value={values.address}
            handleBlur={handleBlur}
            handleChange={handleChange}
          />
        </div>
        <div className='flex justify-center mt-6'>
          <button
            type='submit'
            className='btn text-lg font-bold btn-primary text-secondary'
          >
            Registrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default WorkshopRegister;
