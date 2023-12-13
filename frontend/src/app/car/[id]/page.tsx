'use client';
import { UserIcon } from '@/assets/icons';
import Image from 'next/image';
import { useCarDetail } from '@/hook/DetailCar';
import Select from '@/components/Select';

export default function CarDetailPage({ params }: { params: { id: string } }) {
  const { carData, mechanics } = useCarDetail(params.id);
  const fechaActual = new Date();
  const mes = fechaActual.getMonth() + 1;
  const dia = fechaActual.getDate();

  return (
    <div>
      <Select />
      {carData !== null ? (
        <section className='md:grid md:grid-cols-2 md:px-[10%] px-[5%] md:gap-20 justify-center items-center min-h-screen'>
          <div className=''>
            <div className='hidden md:block'>
              <div className='flex  flex-row items-center gap-5'>
                <button
                  type='button'
                  className='btn btn-sm btn-circle bg-base-300'
                >
                  <Image src={UserIcon} alt='user icon' />
                </button>
                <p className='text-accent'>
                  {carData.user.firstName}
                  {carData.user.lastName}
                </p>
              </div>
            </div>

            <div className='flex place-content-center'>
              <Image
                src={carData.imageUrl ?? ''}
                alt='car detail'
                width={100}
                height={100}
                className='w-full h-full'
              />
            </div>
            <div className='flex flex-row justify-between'>
              <h2 className='card-title'>
                {carData.brand} - {carData.model}
              </h2>
              <h2 className='card-title'>{carData.licensePlate}</h2>
            </div>
            <p>Kilometraje: {carData.mileage}</p>
          </div>

          <section>
            <div className='md:hidden my-4'>
              <div className='flex justify-between'>
                <div className='flex  flex-row items-center gap-5'>
                  <button
                    type='button'
                    className='btn btn-sm btn-circle bg-base-300'
                  >
                    <Image src={UserIcon} alt='user icon' />
                  </button>
                  <p className='text-accent'>
                    {carData.user.firstName}
                    {carData.user.lastName}
                  </p>
                </div>
                <p className='text-accent'>{`${dia}/${mes}`}</p>
              </div>
            </div>
            <section>
              <div className=' hidden md:block mb-10'>
                <p className='text-accent text-right mb-5'>{`${dia}/${mes}`}</p>
              </div>
              <div className=' flex justify-center items-center gap-5 flex-col'>
                <p className='bg-base-300 p-5  [readonly] rounded-3xl h-[150px] w-full' />
                <div className=' gap-4'>
                  <div className='flex gap-3 items-center'>
                    <h2 className='text-secondary font-bold'>Asignar</h2>
                    <select className='select w-full max-w-sm bg-base-300 rounded-2xl h-8'>
                      <option disabled selected>
                        Pick the mechanic
                      </option>
                      {mechanics.map(mechanic => (
                        <option key={mechanic.id} value={mechanic.id}>
                          {mechanic.firstName} {mechanic.lastName}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className='flex justify-center mt-5'>
                  <button className='btn btn-primary text-secondary font-bold w-28 text-xl'>
                    Notificar
                  </button>
                </div>
              </div>
            </section>
          </section>
        </section>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
}
