'use client';

import type { User } from '@/@types';
import { input as Input } from '@/components';
import { useClient } from '@/hook/useClient';
import { useFormik } from 'formik';
import { useState } from 'react';
import * as yup from 'yup';

import { OpenEyeIcon, CloseEyeIcon } from '@/assets/icons';
import Image from 'next/image';

/* const passwordRules = /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{5,}$/;
 */
const basicSchema = yup.object().shape({
  lastName: yup.string().required('Required'),
  firstName: yup.string().required('Required'),
  email: yup.string().email('Plesase enter a valid email').required('Required'),
  phone: yup.number().positive().integer().min(5).required('Required'),
  pass: yup
    .string()
    .min(5)
    /* .matches(passwordRules, { message: 'Please create a stronger password' }) */
    .required('Required'),
  document: yup.number().min(6).required('Required'),
});

const initialValues: User = {
  lastName: '',
  firstName: '',
  email: '',
  phone: 0,
  pass: '',
  document: 0,
};

interface Props {
  open: boolean;
  handleOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const RegisterClient = ({ open, handleOpen }: Props) => {
  const [passwordType, setPasswordType] = useState<string>('password');
  const { createClient } = useClient();
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: basicSchema,
      onSubmit: async (values: User) => {
        createClient(values);
      },
    });

  const [currentView, setCurrentView] = useState<'new' | 'existing'>('new');

  const closeModal = () => {
    handleOpen(false);
  };

  return (
    <div
      className={`absolute w-full bottom-0 bg-gray-200 rounded-t-[3rem] sm:bottom-auto sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-[3rem] sm:max-w-md ${
        open ? '' : 'hidden'
      } transition-all`}
    >
      <header className='flex gap-8 sm:gap-16 justify-center pt-8'>
        <button
          className='cursor-pointer flex flex-col'
          onClick={() => {
            setCurrentView('new');
          }}
        >
          <div className='relative text-sm sm:text-base font-medium'>
            Registrar cliente
            <span
              className={`bg-black absolute h-0.5 w-10 -bottom-1 left-1/2 -translate-x-1/2 ${
                currentView === 'new' ? '' : 'hidden'
              }`}
            />
          </div>
        </button>

        <button
          className='cursor-pointer'
          onClick={() => {
            setCurrentView('existing');
          }}
        >
          <div className='relative text-sm sm:text-base font-medium'>
            Cliente existente
            <span
              className={`bg-black absolute h-0.5 w-10 -bottom-1 left-1/2 -translate-x-1/2 ${
                currentView === 'existing' ? '' : 'hidden'
              }`}
            />
          </div>
        </button>
      </header>

      <main className='py-8 px-8'>
        {currentView === 'new' ? (
          <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
            <div className='flex gap-2'>
              <div className='w-full'>
                <Input
                  name='firstName'
                  type='text'
                  placeholder='Nombre'
                  className={`bg-base-100 text-sm ${
                    errors.firstName != null && touched.firstName != null
                      ? 'border-error border-2'
                      : ''
                  }`}
                  value={values.firstName}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                />
              </div>

              <div className='w-full'>
                <Input
                  name='lastName'
                  type='text'
                  placeholder='Apellidos'
                  className={`bg-base-100 text-sm ${
                    errors.lastName != null && touched.lastName != null
                      ? 'border-error border-2'
                      : ''
                  }`}
                  value={values.lastName}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                />
              </div>
            </div>

            <div>
              <Input
                name='email'
                placeholder='Email'
                className={`bg-base-100 text-sm ${
                  errors.email != null && touched.email != null
                    ? 'border-error border-2'
                    : ''
                }`}
                value={values.email}
                handleBlur={handleBlur}
                handleChange={handleChange}
              />
            </div>
            <div className='flex gap-2 w-full'>
              <div className='w-full'>
                <Input
                  type='text'
                  name='document'
                  placeholder='DNI'
                  className={`bg-base-100 text-sm ${
                    errors.document != null && touched.document != null
                      ? 'border-error border-2'
                      : ''
                  }`}
                  value={values.document}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                />
              </div>

              <div className='w-full'>
                <Input
                  type='text'
                  name='phone'
                  placeholder='Teléfono'
                  className={`bg-base-100 text-sm ${
                    errors.phone != null && touched.phone != null
                      ? 'border-error border-2'
                      : ''
                  }`}
                  value={values.phone}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                />
              </div>
            </div>
            <div>
              <Input
                type={passwordType}
                name='pass'
                placeholder='Contraseña'
                className={`bg-base-100 text-sm ${
                  errors.pass != null && touched.pass != null
                    ? 'border-error border-2'
                    : ''
                }`}
                value={values.pass}
                handleBlur={handleBlur}
                handleChange={handleChange}
              />
              <label className='swap absolute right-12 bottom-[150px]'>
                <input type='checkbox' />
                <Image
                  onClick={() => {
                    setPasswordType('password');
                  }}
                  className='swap-off fill-current'
                  src={OpenEyeIcon}
                  alt='icon'
                  width={20}
                  height={20}
                />
                <Image
                  onClick={() => {
                    setPasswordType('text');
                  }}
                  className='swap-on fill-current'
                  src={CloseEyeIcon}
                  alt='icon'
                  width={18}
                  height={18}
                />
              </label>
            </div>
            <div className='flex justify-center pt-2 '>
              <button
                type='submit'
                className='btn text-lg font-medium btn-accent text-base-180 sm:w-full'
              >
                Registrar
              </button>
            </div>
          </form>
        ) : (
          // Placeholder, falta definir que ira en esta parte
          <div className='min-h-[200px] flex justify-center items-center'>
            Cliente existente
          </div>
        )}
      </main>

      <div className='flex justify-center items-center py-2'>
        <button onClick={closeModal}>cerrar modal</button>
      </div>
    </div>
  );
};
