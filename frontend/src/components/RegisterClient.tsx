'use client';

import { input as Input } from '@/components';
import { useFormik } from 'formik';
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
  open: boolean
}

const RegisterClient: React.FC<Props> = ({ open }) => {
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

  return (
    <div className={`absolute w-full bottom-0 bg-gray-200 rounded-t-[3rem] sm:bottom-auto sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-[3rem] sm:max-w-md ${open ? '' : 'hidden'} transition-all`}>
      <header className='flex gap-8 sm:gap-16 justify-center pt-8'>
        <div className='cursor-pointer'>
          <span className='text-sm sm:text-base font-medium'>Registrar cliente</span>
        </div>

        <div className='cursor-pointer' >
          <span className='text-sm sm:text-base font-medium'>Cliente existente</span>
        </div>
      </header>

      <main className='py-8 px-8'>
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
                placeholder='Apellido'
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
      </main>
    </div>
  );
};

export default RegisterClient;
