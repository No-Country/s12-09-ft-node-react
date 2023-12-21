'use client';
import type { Mechanic } from '@/@types';
import { LockIcon } from '@/assets/svg';
import { Button, Input } from '@/components';
import yup, {
  errorMessages as msg,
  onlyNumbers,
} from '@/utils/yupCustomValidations';
import axios from 'axios';
import { useFormik, type FormikHelpers } from 'formik';
import { useRouter } from 'next/navigation';
import swal from 'sweetalert';

export function MechanicLogin() {
  const router = useRouter();

  const initialValues: Mechanic = {
    document: '', // it's a number
  };
  const url = 'https://mechanicalertbackend.onrender.com/api/v1/mechanic/login';

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: yup.object().shape({
        document: yup
          .string()
          .required(msg.required)
          .min(8, 'debe tener al menos 8 caracteres')
          .max(8, 'limite de caracteres permitidos')
          .test('only-numbers', msg.onlyNumbers, onlyNumbers),
      }),
      onSubmit: async (
        values: Mechanic,
        { resetForm }: FormikHelpers<Mechanic>
      ) => {
        try {
          const value = Number(values.document);
          const response = await axios.post(url, { codePass: value });
          const found = response.data;
          localStorage.setItem('logged-mechanic', JSON.stringify(found));
          router.push('/mechanic', { scroll: false });
          resetForm();
        } catch (error: any) {
          swal('Credenciales Invalidas', '', 'error');
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
          name='document'
          placeholder='Codigo'
          type='document'
          value={values.document}
          handleBlur={handleBlur}
          handleChange={handleChange}
          errorMessage={errors.document}
          error={errors.document != null && touched.document != null}
          togglePassword
        />
      </div>

      <div className='flex justify-center mt-6'>
        <Button type='submit'>Ingresar</Button>
      </div>
    </form>
  );
}
