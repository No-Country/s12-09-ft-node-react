'use client';

import { useRouter } from 'next/navigation';
import { input as Input } from '@/components';
import {
  GroupIcon,
  LockIcon,
  MailIcon,
  PhoneIcon,
  AddressIcon,
} from '@/assets/icons';
import Image from 'next/image';

import * as yup from 'yup';
import swal from 'sweetalert';

import { useFormik } from 'formik';
import { createWorkShop } from '@/services/workshopService';
// import { useEffect } from 'react';

const basicSchema = yup.object().shape({
  email: yup.string().email('Plesase enter a valid email').required('Required'),
  name: yup.string().required('Required'),
  phone: yup.string().required('Required'),
  password: yup.string().min(5).required('Required'),
  address: yup.string().required('Required'),
});

interface InitialValues {
  email: string;
  name: string;
  phone: string;
  password: string;
  address: string;
}
const initialValues: InitialValues = {
  email: '',
  name: '',
  phone: '',
  password: '',
  address: '',
};

const WorkshopRegister = (): JSX.Element => {
  const router = useRouter();

  const { values, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues,
    validationSchema: basicSchema,
    onSubmit: async (values: InitialValues) => {
      console.log(values);

      try {
        // console.log(values);
        createWorkShop(values);
        await swal('Taller registrado', '', 'success');
        router.push('/mechanic', { scroll: false });
      } catch (error) {
        await swal('Error de registro', '', 'error');
      }
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
          <Image src={GroupIcon} alt='user icon' width={25} height={25} />
          <Input
            name='name'
            placeholder='Nombre del taller'
            type='text'
            className=''
            value={values.name}
            handleBlur={handleBlur}
            handleChange={handleChange}
          />
        </div>
        <div className='flex flex-row gap-2'>
          <Image src={LockIcon} alt='user icon' width={25} height={25} />
          <Input
            name='password'
            placeholder='Contraseña'
            type='password'
            className=''
            value={values.password}
            handleBlur={handleBlur}
            handleChange={handleChange}
          />
        </div>
        <div className='flex flex-row gap-2'>
          <Image src={MailIcon} alt='user icon' width={25} height={25} />
          <Input
            name='email'
            placeholder='Email'
            type='text'
            className=''
            value={values.email}
            handleBlur={handleBlur}
            handleChange={handleChange}
          />
        </div>
        <div className='flex flex-row gap-2'>
          <Image src={PhoneIcon} alt='user icon' width={25} height={25} />
          <Input
            name='phone'
            placeholder='Teléfono'
            type='tel'
            className=''
            value={values.phone}
            handleBlur={handleBlur}
            handleChange={handleChange}
          />
        </div>
        <div className='flex flex-row gap-2'>
          <Image src={AddressIcon} alt='user icon' width={25} height={25} />
          <Input
            name='address'
            placeholder='Direccion'
            type='text'
            className=''
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
