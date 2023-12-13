'use client';
import { useFormik } from 'formik';
import * as yup from 'yup';
import swal from 'sweetalert';
import { Container, Input, Button, Title } from '@/components';
import {
  HomeIcon,
  GroupIcon,
  PhoneIcon,
  MailIcon,
  LockIcon,
} from '@/assets/svg';
import { useWorkshop } from '@/hook';
import type { Workshop } from '@/@types';
import { useRouter } from 'next/navigation';

const initialValues: Workshop = {
  email: '',
  name: '',
  phone: '',
  password: '',
  address: '',
};

const basicSchema = yup.object().shape({
  email: yup.string().email('Plesase enter a valid email').required('Required'),
  name: yup.string().required('Required'),
  phone: yup.number().positive().integer().required('Required'),
  password: yup.string().min(5).required('Required'),
  address: yup.string().required('Required'),
});

export default function HomeRegisterPage() {
  const { createWorkshop } = useWorkshop();
  const router = useRouter();
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: basicSchema,
      onSubmit: async (values: Workshop, { resetForm }) => {
        createWorkshop(values);
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
            <Title.Subtitle>
              Ingresa los datos de tu taller para registrarlo.
            </Title.Subtitle>
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
              <GroupIcon />
              <Input
                name='name'
                placeholder='Nombre del taller'
                type='text'
                value={values.name}
                handleBlur={handleBlur}
                handleChange={handleChange}
                errorMessage={errors.name}
                error={errors.name != null && touched.name != null}
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
              <PhoneIcon />
              <Input
                name='phone'
                placeholder='Teléfono'
                type='tel'
                className=''
                value={values.phone}
                handleBlur={handleBlur}
                handleChange={handleChange}
                errorMessage={errors.phone}
                error={errors.phone != null && touched.phone != null}
              />
            </div>
            <div className='input-container'>
              <HomeIcon />
              <Input
                name='address'
                placeholder='Direccion'
                type='text'
                className=''
                value={values.address}
                handleBlur={handleBlur}
                handleChange={handleChange}
                errorMessage={errors.address}
                error={errors.address != null && touched.address != null}
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
