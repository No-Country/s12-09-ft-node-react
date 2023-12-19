'use client';
import type { Mechanic } from '@/@types';
import { useFormik, type FormikHelpers } from 'formik';
import yup, {
  errorMessages as msg,
  onlyNumbers,
} from '@/utils/yupCustomValidations';
import swal from 'sweetalert';
import { LockIcon } from '@/assets/svg';
import { Button, Input } from '@/components';
import { useRouter } from 'next/navigation';
interface Props {
  mechanics: Mechanic[];
}
export function MechanicLogin({ mechanics = [] }: Props) {
  const router = useRouter();

  const initialValues: Mechanic = {
    document: '', // it's a number
  };

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
        if (mechanics.length < 0) return;

        const found = mechanics.find(
          item => item.document === Number(values.document)
        );

        if (found) {
          await swal(
            `Bienvenido ${found.firstName}`,
            'Has ingresado con éxito a MechanicAlert',
            'success',
            {
              buttons: [false],
              timer: 3000,
            }
          );
          localStorage.setItem('logged-mechanic', JSON.stringify(found));
          router.push('/mechanic', { scroll: false });
        } else {
          swal(
            'No encontrado',
            'Credenciales incorrectas, vuelve a intentarlo',
            'error',
            {
              buttons: [false],
              timer: 3000,
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
          name='document'
          placeholder='Codigo'
          type='document'
          value={values.document}
          handleBlur={handleBlur}
          handleChange={handleChange}
          errorMessage={errors.document}
          error={errors.document != null && touched.document != null}
        />
      </div>

      <div className='flex justify-center mt-6'>
        <Button type='submit'>Ingresar</Button>
      </div>
    </form>
  );
}
