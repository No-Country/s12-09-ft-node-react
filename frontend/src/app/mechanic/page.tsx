'use client';

import { input as Input } from '@/components';
import { PlusIcon, UserIcon } from '@/assets/icons';
import Image from 'next/image';
import { useFormik } from 'formik';
import * as yup from 'yup';
import swal from 'sweetalert';

const basicSchema = yup.object().shape({
  email: yup.string().email('Plesase enter a valid email').required('Required'),
  fullName: yup.string().required('Required'),
  dni: yup.number().positive().integer().required('Required'),
  phone: yup.number().positive().integer().required('Required'),
  rol: yup.string().required('Required'),
  password: yup.string().min(5).required('Required'),
});

export default function MechanicPage() {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        email: '',
        fullName: '',
        dni: '',
        phone: '',
        rol: '',
        password: '',
      },
      validationSchema: basicSchema,
      onSubmit: values => {
        console.log(values);
        swal("Mecanico guardado", '( simulacion no tiene endpoint )', 'success');
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
          <button type='button' className='btn btn-sm btn-circle btn-ghost' onClick={() => {swal("Agregar un nuevo mecanico", '( guarda el anterior y crea uno nuevo )', 'info');}}>

            <Image src={PlusIcon} alt='plus icon' />
          </button>
        </div>
        <Input
          className={
            errors.email && touched.email ? 'input-error border-error' : ''
          }
          value={values.email}
          handleBlur={handleBlur}
          handleChange={handleChange}
          name='email'
          placeholder='Email'
          type='text'
        />

        <Input
          className={
            errors.fullName && touched.fullName
              ? 'input-error border-error'
              : ''
          }
          value={values.fullName}
          handleBlur={handleBlur}
          handleChange={handleChange}
          name='fullName'
          placeholder='Nombre y apellido'
          type='text'
        />
        <div className='flex flex-row gap-3'>
          <div className='flex-1 flex flex-col gap-3'>
            <Input
              className={
                errors.dni && touched.dni ? 'input-error border-error' : ''
              }
              value={values.dni}
              handleBlur={handleBlur}
              handleChange={handleChange}
              name='dni'
              placeholder='DNI'
              type='text'
            />
            <Input
              className={
                errors.rol && touched.rol ? 'input-error border-error' : ''
              }
              value={values.rol}
              handleBlur={handleBlur}
              handleChange={handleChange}
              name='rol'
              placeholder='Rol'
              type='text'
            />
          </div>
          <div className='flex-1  flex flex-col gap-3'>
            <Input
              className={
                errors.phone && touched.phone ? 'input-error border-error' : ''
              }
              value={values.phone}
              handleBlur={handleBlur}
              handleChange={handleChange}
              name='phone'
              placeholder='Teléfono'
              type='text'
            />
            <Input
              className={
                errors.password && touched.password
                  ? 'input-error border-error'
                  : ''
              }
              value={values.password}
              handleBlur={handleBlur}
              handleChange={handleChange}
              name='password'
              placeholder='Contraseña'
              type='password'
            />
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
