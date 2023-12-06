'use client';
import { useRouter } from 'next/navigation';

import { input as Input } from '@/components';
import { PlusIcon, UserIcon } from '@/assets/icons';
import Image from 'next/image';

import { useFormik } from 'formik';
import * as yup from 'yup';
import swal from 'sweetalert';

import { useMechanic } from '@/hook';
import { MechanicModel } from '@/model';

const basicSchema = yup.object().shape({
  email: yup.string().email('Plesase enter a valid email').required('Required'),
  firstName: yup.string().required('Required'),
  lastName: yup.string().required('Required'),
  document: yup.number().positive().integer().required('Required'),
  phone: yup.string().required('Required'),
  // role: yup.string().required('Required'),
  // password: yup.string().min(5).required('Required'),
});

const initialValues: MechanicModel = {
  email: '',
  firstName: '',
  lastName: '',
  document: 0,
  phone: '',
  // role: '',
  // password: '',
};
export default function MechanicPage() {
  const { mechanics, createMechanic } = useMechanic();
  const router = useRouter();

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: basicSchema,
      onSubmit: (values: MechanicModel) => {
        createMechanic(values);
        // if(response){
        swal('Mecanico guardado', '', 'success');
        // } else {
        //   swal('El mecanico no fue gruardado', '', 'error');
        // }

        router.push('/home', { scroll: false });
      },
    });

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete='off'
      className='flex flex-col justify-center items-center m-5 gap-5 [&>div]:mt-5'
    >
      <h1 className='text-3xl font-bold text-secondary'>Tu equipo</h1>

      <h2 className='text-xl text-center text-accent'>
        Crea usuarios para tu equipo de trabajo
      </h2>
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
            errors.email && touched.email ? 'border-error border-2' : ''
          }
          value={values.email}
          handleBlur={handleBlur}
          handleChange={handleChange}
          name='email'
          placeholder='Email'
          type='text'
        />

        <div className='flex w-full gap-5'>
          <Input
            className={
              errors.firstName && touched.firstName
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
          <Input
            className={
              errors.lastName && touched.lastName ? 'border-error border-2' : ''
            }
            value={values.lastName}
            handleBlur={handleBlur}
            handleChange={handleChange}
            name='lastName'
            placeholder='Apellido'
            type='text'
          />
        </div>
        <div className='flex flex-row gap-3'>
          <div className='flex-1 flex flex-col gap-3'>
            <Input
              className={
                errors.document && touched.document
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
            {/* <Input
              className={(errors.role && touched.role) ? 'border-error border-2' : ''}
              value={values.role}
              handleBlur={handleBlur}
              handleChange={handleChange}
              name='role'
              placeholder='Rol'
              type='text'
            /> */}
          </div>
          <div className='flex-1  flex flex-col gap-3'>
            <Input
              className={
                errors.phone && touched.phone ? 'border-error border-2' : ''
              }
              value={values.phone}
              handleBlur={handleBlur}
              handleChange={handleChange}
              name='phone'
              placeholder='Teléfono'
              type='string'
            />
            {/* <Input
              className={(errors.password && touched.password) ? 'border-error border-2' : ''}
              value={values.password}
              handleBlur={handleBlur}
              handleChange={handleChange}
              name='password'
              placeholder='Contraseña'
              type='password'
            /> */}
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
