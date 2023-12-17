'use client';
import type { User } from '@/@types';
import { useFormik, type FormikHelpers } from 'formik';
import * as yup from 'yup';
import swal from 'sweetalert';
import { LockIcon } from '@/assets/svg';
import { Button, Input } from '@/components';
import { useRouter } from 'next/navigation';

export function ClientLogin() {
  const router = useRouter();

  const initialValues: User = {
    pass: '',
  };

  const validationSchema = yup.object().shape({
    pass: yup.string().required('Required'),
  });

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: async (values: User, { resetForm }: FormikHelpers<User>) => {
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
          name='pass'
          placeholder='Codigo'
          type='password'
          value={values.pass}
          handleBlur={handleBlur}
          handleChange={handleChange}
          errorMessage={errors.pass}
          error={errors.pass != null && touched.pass != null}
        />
      </div>

      <div className='flex justify-center mt-6'>
        <Button type='submit'>Ingresar</Button>
      </div>
    </form>
  );
}
