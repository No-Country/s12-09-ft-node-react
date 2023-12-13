'use client';
import { useFormik } from 'formik';
import * as yup from 'yup';
import swal from 'sweetalert';
import { Container, Input, Button, Title } from '@/components';
import { MailIcon, LockIcon } from '@/assets/svg';
import { useWorkshop } from '@/hook';
import type { Workshop } from '@/@types';
import { useRouter } from 'next/navigation';

const initialValues: Workshop = {
  email: '',
  password: '',
};

const basicSchema = yup.object().shape({
  email: yup.string().email('Plesase enter a valid email').required('Required'),
  password: yup.string().min(5).required('Required'),
});

export default function HomeLoginPage() {
  const { loginWorkShop } = useWorkshop();
  const router = useRouter();
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: basicSchema,
      onSubmit: async (values: Workshop, { resetForm }) => {
        loginWorkShop(values);
        resetForm();

        await swal(
          'Loggeado',
          '( simulacion no tiene endpoint )',
          'success'
        ).then(() => {});

        router.push('/workshop');
      },
    });

  return (
    <section>
      <Container>
        <>
          <Title title='¡Bienvenido!' className='text-center'>
            <Title.Subtitle>Ingresa tus datos de acceso</Title.Subtitle>
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
        </>
      </Container>
    </section>
  );
}
