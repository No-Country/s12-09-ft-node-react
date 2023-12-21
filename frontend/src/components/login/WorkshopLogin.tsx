'use client';
import type { Workshop } from '@/@types';
import { useFormik } from 'formik';
import * as yup from 'yup';
import swal from 'sweetalert';
import { MailIcon, LockIcon } from '@/assets/svg';
import { Input, Button } from '@/components';
import { useRouter } from 'next/navigation';
import { useWorkshop } from '@/hook';

export function WorkshopLogin() {
  const { loginWorkshop } = useWorkshop();
  const router = useRouter();

  const initialValues: Workshop = {
    email: '',
    password: '',
  };

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Plesase enter a valid email')
      .required('Required'),
    password: yup.string().min(5).required('Required'),
  });

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: async (values: Workshop, { resetForm }) => {
        loginWorkshop(values);
        resetForm();

        await swal('Loggeado', '', 'success', {
          buttons: [false],
          timer: 1000,
        }).then(() => {
          router.push('/workshop');
        });
      },
    });

  return (
    <form
      onSubmit={handleSubmit}
      className='
            [&>.input-container]:flex 
            [&>.input-container]:gap-4
            [&>.input-container>svg]:mt-4
            [&>.input-container>div]:flex-1
            flex flex-col gap-3'
    >
      <div className='input-container'>
        <MailIcon />
        <Input
          name='email'
          placeholder='Email'
          type='text'
          className=''
          value={values.email}
          handleBlur={handleBlur}
          handleChange={handleChange}
          errorMessage={errors.email}
          error={errors.email != null && touched.email != null}
        />
      </div>

      <div className='input-container'>
        <LockIcon />
        <Input
          name='password'
          placeholder='Contraseña'
          type='password'
          value={values.password}
          handleBlur={handleBlur}
          handleChange={handleChange}
          errorMessage={errors.password}
          error={errors.password != null && touched.password != null}
        />
      </div>

      <div className='flex justify-center mt-6'>
        <Button type='submit'>Registrar</Button>
      </div>
    </form>
  );
}
