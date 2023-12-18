'use client';
import type { Mechanic } from '@/@types';
import { useFormik, type FormikHelpers } from 'formik';
import * as yup from 'yup';
import swal from 'sweetalert';
import { LockIcon } from '@/assets/svg';
import { Button, Input } from '@/components';
import { useRouter } from 'next/navigation';

export function MechanicLogin() {
  const router = useRouter();

  const initialValues: Mechanic = {
    password: '',
  };

  const validationSchema = yup.object().shape({
    password: yup.string().required('Required'),
  });

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: async (
        values: Mechanic,
        { resetForm }: FormikHelpers<Mechanic>
      ) => {
        console.log(values);
        await swal('Es solo un template, no tiene funcionalidad', ' ', 'info');
        resetForm();
        router.push('/');
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
        <LockIcon />
        <Input
          name='password'
          placeholder='Codigo'
          type='password'
          value={values.password}
          handleBlur={handleBlur}
          handleChange={handleChange}
          errorMessage={errors.password}
          error={errors.password != null && touched.password != null}
        />
      </div>

      <div className='flex justify-center mt-6'>
        <Button type='submit'>Ingresar</Button>
      </div>
    </form>
  );
}
