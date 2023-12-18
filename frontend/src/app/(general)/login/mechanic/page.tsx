'use client';

import { LockIcon } from '@/assets/svg';
import { Button, Container, Title, Input } from '@/components';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import swal from 'sweetalert';
import * as yup from 'yup';

interface initialValuesProps {
  code: string;
}

const initialValues: initialValuesProps = {
  code: '',
};

const basicSchema = yup.object().shape({
  code: yup.string().required('Required'),
});

export default function LoginMechanicPage() {
  const router = useRouter();
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: basicSchema,
      onSubmit: (values: initialValuesProps) => {
        swal('Es solo un template, no tiene funcionalidad', ' ', 'info', {
          buttons: [false],
          timer: 3000,
        }).then(() => {
          router.push('/mechanic', { scroll: false });
        });
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
                placeholder='Codigo'
                type='password'
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
