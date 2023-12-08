import { input as Input } from '@/components';
import { useFormik } from 'formik';
import swal from 'sweetalert';
import * as yup from 'yup';

const basicSchema = yup.object().shape({
  brand: yup.string().required('Required'),
  model: yup.string().required('Required'),
  color: yup.string().required('Required'),
  year: yup.number().positive().integer().required('Required'),
  licensePlate: yup.string().required('Required'),
  mileage: yup.number().required('Required'),
});

interface InitialValues {
  brand: string;
  model: string;
  color: string;
  year: string;
  licensePlate: string;
  mileage: string;
}
const initialValues: InitialValues = {
    brand: '',
    model: '',
    color: '',
    year: '',
    licensePlate: '',
    mileage: ''
};

const RegisterVehicle = () => {
  const { values, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues,
    validationSchema: basicSchema,
    onSubmit: async (values: InitialValues) => {
      console.log(values);
      await swal(
        'Cliente registrado',
        '( simulacion no tiene endpoint )',
        'success'
      );
    },
  });
  return (
    <div
      className={`absolute w-full bottom-0 bg-gray-200 rounded-t-[3rem] sm:bottom-auto sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-[3rem] sm:max-w-md transition-all`}
    >
      <header className='flex gap-8 sm:gap-16 justify-center pt-8'>
        <span className='text-sm sm:text-base font-medium'>Datos de vehiculo</span>
      </header>

      <main className='py-8 px-8'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
          <div className='flex gap-2'>
            <div className='w-full'>
              <Input
                name='brand'
                type='text'
                placeholder='Marca'
                className='bg-base-100 text-sm'
                value={values.brand}
                handleBlur={handleBlur}
                handleChange={handleChange}
              />
            </div>

            <div className='w-full'>
              <Input
                name='model'
                type='text'
                placeholder='Modelo'
                className='bg-base-100 text-sm'
                value={values.model}
                handleBlur={handleBlur}
                handleChange={handleChange}
              />
            </div>
          </div>

          <div className='flex gap-2'>
            <div className='w-full'>
              <Input
                name='year'
                type='text'
                placeholder='Año'
                className='bg-base-100 text-sm'
                value={values.year}
                handleBlur={handleBlur}
                handleChange={handleChange}
              />
            </div>

            <div className='w-full'>
              <Input
                name='licensePlate'
                type='text'
                placeholder='Patente'
                className='bg-base-100 text-sm'
                value={values.licensePlate}
                handleBlur={handleBlur}
                handleChange={handleChange}
              />
            </div>
          </div>
          <div>
            <Input
              name='mileage'
              placeholder='Kilometraje'
              className='bg-base-100 text-sm'
              value={values.mileage}
              handleBlur={handleBlur}
              handleChange={handleChange}
            />
          </div>
          <div className='flex justify-center pt-2 '>
            <button
              type='submit'
              className='btn text-lg font-medium btn-accent text-base-100 sm:w-full'
            >
              Agregar Vehiculo
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default RegisterVehicle;
