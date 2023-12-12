'use client';

import { Input } from '@/components';
import { useFormik } from 'formik';
import { LockIcon } from '@/assets/icons';
import Image from 'next/image';
import * as yup from 'yup';
import swal from 'sweetalert';
import { useRouter } from 'next/navigation';

interface initialValuesProps {
  code: string;
}

const initialValues: initialValuesProps = {
  code: '',
};

const basicSchema = yup.object().shape({
  code: yup.string().required('Required'),
});

function MechanicLoginPage() {
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
          router.push('home', { scroll: false });
        });
      },
    });

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete='off'
      className='flex flex-col h-[60vh]  justify-center items-center gap-5'
    >
      <h1 className='text-3xl font-bold text-secondary'>¡Bienvenido!</h1>
      <h2 className='text-xl  text-accent'>Ingresa tu código de acceso</h2>

      <div className='flex flex-col gap-3 mt-10'>
        <div className='flex gap-3'>
          <Image src={LockIcon} alt='lock icon' height={24} width={22} />
          <div>
            <Input
              className={`${
                errors.code != null && touched.code != null
                  ? 'border-error border-2'
                  : ''
              } `}
              value={values.code}
              handleBlur={handleBlur}
              handleChange={handleChange}
              name='code'
              placeholder='Codigo'
              type='password'
            />
            {errors.code != null && touched.code != null && (
              <p className='text-xs text-error absolute mt-1'>{errors.code}</p>
            )}
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

export default MechanicLoginPage;
