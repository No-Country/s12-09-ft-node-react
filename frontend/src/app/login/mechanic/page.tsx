'use client';

import { LockIcon } from '@/assets/icons';
import { Button, Container, Title, Input } from '@/components';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import swal from 'sweetalert';
import * as yup from 'yup';

const initialValues = {
  code: '',
};

const basicSchema = yup.object().shape({
  code: yup.number().positive().integer().required('Required'),
});

export default function LoginMechanicPage() {
  const router = useRouter();
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: basicSchema,
      onSubmit: async (values, { resetForm }) => {
        resetForm();

        await swal(
          'Taller registrado',
          '( simulacion no tiene endpoint )',
          'success'
        ).then(() => {});

        router.push('/login');
      },
    });
  return (
    <section>
      <Container>
        <>
          <Title title='¡Bienvenido!' className='text-center'>
            <Title.Subtitle>Ingresa tu codigo de acceso</Title.Subtitle>
          </Title>
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
                name='code'
                placeholder='Contraseña'
                type='number'
                value={values.code}
                handleBlur={handleBlur}
                handleChange={handleChange}
                errorMessage={errors.code}
                error={errors.code != null && touched.code != null}
              />
            </div>

            <div className='flex justify-center mt-6'>
              <Button type='submit'>Ingresar</Button>
            </div>
          </form>
        </>
      </Container>
    </section>
  );
}
