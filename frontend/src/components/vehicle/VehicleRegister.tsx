'use client';
import { useFormik } from 'formik';
import * as yup from 'yup';
import swal from 'sweetalert';
import { Input, Button } from '@/components';
import { useModal } from '@/modal';
import { useClient, useVehicle } from '@/hook';
import type { User, Vehicle } from '@/@types';
import { config } from '@/config';

interface Props {
  client?: User;
}
export function VehicleRegister({ client }: Props) {
  const { created: clientCreated } = useClient();

  if (!client) {
    client = clientCreated;
  }

  const { createVehicle, isLoading } = useVehicle();
  const { closeModal } = useModal();

  const initialValues: Vehicle = {
    brand: '',
    model: '',
    color: '',
    year: 0,
    licensePlate: '',
    mileage: 0,
    imageUrl: config.default.vehicleImage,
    userId: client?.id,
  };
  const validationSchema = yup.object().shape({
    brand: yup.string().required('Required'),
    model: yup.string().required('Required'),
    color: yup.string().required('Required'),
    year: yup.number().positive().integer().required('Required'),
    licensePlate: yup.string().required('Required'),
    mileage: yup.number().positive().integer().required('Required'),
    userId: yup.string().required('Required'),
  });

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: async (values: Vehicle, { resetForm }) => {
        values.user = client;
        createVehicle(values);

        await swal(
          'Vehiculo registrado',
          '( simulacion no tiene endpoint )',
          'success'
        );

        resetForm();
        closeModal();
      },
    });
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='
            [&>.input-container]:flex 
            [&>.input-container]:gap-4
            [&>.input-container>svg]:mt-4
            [&>.input-container>div]:flex-1'
      >
        <div className='py-3'>
          Cliente: <b>{`${client?.firstName} ${client?.lastName}`}</b>
        </div>
        <div className='input-container'>
          <Input
            name='brand'
            placeholder='Marca'
            type='text'
            value={values.brand}
            handleBlur={handleBlur}
            handleChange={handleChange}
            errorMessage={errors.brand}
            error={errors.brand != null && touched.brand != null}
          />
          <Input
            name='model'
            placeholder='Modelo'
            type='text'
            value={values.model}
            handleBlur={handleBlur}
            handleChange={handleChange}
            errorMessage={errors.model}
            error={errors.model != null && touched.model != null}
          />
        </div>
        <div className='input-container'>
          <Input
            name='licensePlate'
            placeholder='Patente'
            type='text'
            value={values.licensePlate}
            handleBlur={handleBlur}
            handleChange={handleChange}
            errorMessage={errors.licensePlate}
            error={errors.licensePlate != null && touched.licensePlate != null}
          />
          <Input
            name='mileage'
            placeholder='kilometraje'
            type='number'
            value={values.mileage}
            handleBlur={handleBlur}
            handleChange={handleChange}
            errorMessage={errors.mileage}
            error={errors.mileage != null && touched.mileage != null}
          />
        </div>
        <div className='input-container'>
          <Input
            name='year'
            placeholder='Año'
            type='number'
            value={values.year}
            handleBlur={handleBlur}
            handleChange={handleChange}
            errorMessage={errors.year}
            error={errors.year != null && touched.year != null}
          />
          <Input
            name='color'
            placeholder='Color'
            type='text'
            value={values.color}
            handleBlur={handleBlur}
            handleChange={handleChange}
            errorMessage={errors.color}
            error={errors.color != null && touched.color != null}
          />
        </div>
        <div className='flex justify-center my-2'>
          <Button type='submit'>
            {isLoading ? 'Enviando...' : 'Registrar'}
          </Button>
        </div>
      </form>
    </>
  );
}
