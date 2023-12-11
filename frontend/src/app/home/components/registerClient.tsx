'use client';

import type { User } from '@/@types';
import { Input } from '@/components/input';
import { useModal } from '@/context';
import { useClient } from '@/hook/useClient';
import { useFormik } from 'formik';
import type {Dispatch, SetStateAction} from 'react'
import { useEffect, useState } from 'react';
import * as yup from 'yup';

const passwordRules = /^(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

const clientSchema = yup.object().shape({
  lastName: yup.string().required('Requerida'),
  firstName: yup.string().required('Requerida'),
  email: yup
    .string()
    .email('Porfavor ingrese un mail valido')
    .required('Requerida'),
  phone: yup.string().min(5).required('Requerida'),
  pass: yup
    .string()
    .min(5, 'Ingrese mas de 5 caracteres')
    .matches(passwordRules, {
      message: 'Por favor crea una contraseña mas fuerte',
    })
    .required('Requerida'),
  document: yup.number().min(6).required('Requerida'),
});

const initialValues: User = {
  lastName: '',
  firstName: '',
  email: '',
  phone: '',
  pass: '',
  document: 0,
};

interface Props {
  isOpen: boolean,
  handleOpen: Dispatch<SetStateAction<boolean>>,
  nextModal: Dispatch<SetStateAction<boolean>>
}

export const RegisterClient: React.FC<Props> = ({isOpen, handleOpen, nextModal}) => {
  const { createClient, clients } = useClient();
  const { isModalOpen, closeModal, openModal } = useModal()

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: clientSchema,
      onSubmit: async (values: User) => {
        createClient(values);
      },
    });

  const [currentView, setCurrentView] = useState<'new' | 'existing'>('new');

  useEffect(() => {

    const openNextModal = () => {
      if(clients[0] !== undefined) {
        handleOpen(false)
        nextModal(true)
      }
    }

    openNextModal()

  }, [clients, handleOpen, nextModal])

  return (
    <div
      className={`absolute w-full bottom-0 bg-gray-200 rounded-t-[3rem] sm:bottom-auto sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-[3rem] sm:max-w-md ${
        isModalOpen('registerClient') ? '' : 'hidden'
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
                  type='number'
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
                type='password'
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
              {errors.pass != null && touched.pass != null && errors.pass}
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

      <div className='flex flex-col gap-1 justify-center items-center pb-2'>
        <button onClick={() => {closeModal('registerClient')  ; openModal('registerVehicle')}}>abrir siguiente modal</button>
        <button onClick={() => {closeModal('registerClient')}}>cerrar modal</button>
      </div>
    </div>
  );
};
