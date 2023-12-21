'use client';
import { useFormik } from 'formik';
import { validationSchema } from './VehicleRegister.validator';
import { Input, Button, UploadImage, Alert, Sweetalert } from '@/components';
import { useModal } from '@/modal';
import { useVehicle } from '@/hook';
import type { User, Vehicle } from '@/@types';
import { config } from '@/config';
import { useUploadImage } from '@/hook/useUploadImage';

interface Props {
  client?: User;
}
export function VehicleRegister({ client }: Props) {
  const { closeModal } = useModal();
  const { handleImage, image, loading: imageLoading } = useUploadImage(null!);
  const { isLoading, created, error, createVehicle, cleanCreatedVehicle } =
    useVehicle();

  const initialValues: Vehicle = {
    brand: '',
    model: '',
    color: '',
    year: '', // it's a number
    licensePlate: '',
    mileage: '', // it's a number
    imageUrl: '',
    userId: client?.id,
  };

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: async (values: Vehicle, { resetForm }) => {
        values.user = client;
        values.year = Number(values.year);
        values.mileage = Number(values.mileage);
        if (!values.imageUrl) values.imageUrl = config.default.vehicleImage;

        createVehicle(values);
      },
    });
  // content input year
  const years = Array.from({ length: 100 })
    .fill('')
    .map((item, index) => 2023 - index);

  return (
    <>
      {!!error && <Alert message={error} type='error' />}
      {created && (
        <Sweetalert
          title='Vehiculo registrado'
          type='success'
          callback={() => {
            closeModal();
            cleanCreatedVehicle();
          }}
        />
      )}
      <form
        onSubmit={handleSubmit}
        className='
            [&>.input-container]:flex 
            [&>.input-container]:gap-4
            [&>.input-container>svg]:mt-4
            [&>.input-container>div]:flex-1'
      >
        <UploadImage
          image={image}
          loading={imageLoading}
          handle={handleImage}
        />
        <input
          type='hidden'
          name='imageUrl'
          value={(values.imageUrl = image)}
          onChange={handleImage}
        />
        <div className='py-3'>
          Cliente: <b>{`${client?.firstName} ${client?.lastName}`}</b>
        </div>
        <div className='input-container'>
          <Input
            name='brand'
            placeholder='Marca'
            value={values.brand}
            handleBlur={handleBlur}
            handleChange={handleChange}
            errorMessage={errors.brand}
            error={errors.brand != null && touched.brand != null}
          />
          <Input
            name='model'
            placeholder='Modelo'
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
            value={values.licensePlate?.toLocaleUpperCase()}
            handleBlur={handleBlur}
            handleChange={handleChange}
            errorMessage={errors.licensePlate}
            error={errors.licensePlate != null && touched.licensePlate != null}
          />
          <Input
            name='mileage'
            placeholder='kilometraje'
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
            value={values.year}
            handleBlur={handleBlur}
            handleChange={handleChange}
            errorMessage={errors.year}
            error={errors.year != null && touched.year != null}
            datalist={years}
          />
          <Input
            name='color'
            placeholder='Color'
            value={values.color}
            handleBlur={handleBlur}
            handleChange={handleChange}
            errorMessage={errors.color}
            error={errors.color != null && touched.color != null}
          />
        </div>
        <div className='flex justify-center my-2'>
          <Button type='submit' disabled={isLoading}>
            {isLoading ? 'Enviando...' : 'Registrar'}
          </Button>
        </div>
      </form>
    </>
  );
}
