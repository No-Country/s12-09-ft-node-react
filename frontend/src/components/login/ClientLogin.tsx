'use client';
import type { User } from '@/@types';
import { useFormik, type FormikHelpers } from 'formik';
import * as yup from 'yup';
import swal from 'sweetalert';
import { LockIcon } from '@/assets/svg';
import { Button, Input } from '@/components';
import { useRouter } from 'next/navigation';

interface Props {
  users: User[];
}

export function ClientLogin({ users }: Props) {
  console.log('Usuarios', users);

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
        const found = users.find(item => item.document === Number(values.pass));

        if (found) {
          await swal('Logeado', ' ', 'success', {
            buttons: [false],
            timer: 1000,
          });
          localStorage.setItem('logged-user', JSON.stringify(found));
          resetForm();
          router.push('/client');
        } else {
          swal(
            'No encontrado',
            'Credenciales incorrectas, vuelve a intentarlo',
            'error',
            {
              buttons: [false],
              timer: 2000,
            }
          );
        }
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
          togglePassword
        />
      </div>

      <div className='flex justify-center mt-6'>
        <Button type='submit'>Ingresar</Button>
      </div>
    </form>
  );
}
