'use client';

import { input as Input } from '@/components';
import { useFormik } from 'formik';
import { useState } from 'react';
import swal from 'sweetalert';
import * as yup from 'yup';

const basicSchema = yup.object().shape({
  lastName: yup.string().required('Required'),
  firstName: yup.string().required('Required'),
  email: yup.string().email('Plesase enter a valid email').required('Required'),
  phone: yup.number().positive().integer().required('Required'),
  pass: yup.string().min(5).required('Required'),
  document: yup.number().required('Required'),
});

interface InitialValues {
  lastName: string;
  firstName: string;
  email: string;
  phone: string;
  pass: string;
  document: string;
}
const initialValues: InitialValues = {
  lastName: '',
  firstName: '',
  email: '',
  phone: '',
  pass: '',
  document: '',
};

interface Props {
  open: boolean;
  handleOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const RegisterClient: React.FC<Props> = ({ open, handleOpen }) => {
  const { values, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues,
    validationSchema: basicSchema,
    onSubmit: async (values: InitialValues) => {
      console.log(values);
      await swal(
        'Cliente registrado',
        '( simulacion no tiene endpoint )',
        'success'
      );
    },
  });

  const [currentView, setCurrentView] = useState<'new' | 'existing'>('new');

  const closeModal = () => {
    handleOpen(false)
  }

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
                  className='bg-base-100 text-sm'
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
                  className='bg-base-100 text-sm'
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
                className='bg-base-100 text-sm'
                value={values.email}
                handleBlur={handleBlur}
                handleChange={handleChange}
              />
            </div>
            <div className='flex gap-2 w-full'>
              <div className='w-full'>
                <Input
                  name='document'
                  placeholder='DNI'
                  className='bg-base-100 text-sm'
                  value={values.document}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                />
              </div>

              <div className='w-full'>
                <Input
                  name='phone'
                  placeholder='Teléfono'
                  className='bg-base-100 text-sm'
                  value={values.phone}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                />
              </div>
            </div>
            <div>
              <Input
                name='pass'
                placeholder='Contraseña'
                className='bg-base-100 text-sm'
                value={values.pass}
                handleBlur={handleBlur}
                handleChange={handleChange}
              />
            </div>
            <div className='flex justify-center pt-2 '>
              <button
                type='submit'
                className='btn text-lg font-medium btn-accent text-base-100 sm:w-full'
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
        <button onClick={closeModal}>
          cerrar modal
        </button>
      </div>
    </div>
  );
};

export default RegisterClient;
