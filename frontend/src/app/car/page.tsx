import { UserIcon } from '@/assets/icons';
import { CarDetailImage } from '@/assets/image';
import Image from 'next/image';

export default function CarDetailPage() {
  return (
    <div className='m-5 flex flex-col gap-3 lg:mt-32 lg:flex-row lg:gap-5 justify-center lg:items-center'>
      <div className='flex-1 max-w-sm lg:h-48'>
        <div className='flex place-content-center'>
          <Image src={CarDetailImage} alt='car detail' />
        </div>
        <div className='flex flex-row justify-between'>
          <h2 className='card-title'>Marca - Modelo</h2>
          <h2 className='card-title'>Patente</h2>
        </div>
        <p>Kilometraje</p>
      </div>
      <div className='flex flex-col gap-5 flex-1 max-w-sm'>
        <div className='flex flex-row justify-between lg:absolute lg:top-36 lg:l-0 lg:w-[788px]'>
          <div className='flex flex-row items-center gap-5'>
            <button type='button' className='btn btn-sm btn-circle bg-base-300'>
              <Image src={UserIcon} alt='user icon' />
            </button>
            <p className='text-accent'>Nombre usuario</p>
          </div>
          <p className='text-accent'>00/00</p>
        </div>
        <div className='bg-base-300 p-5 rounded-3xl'>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa,
            corrupti! Quam ipsa necessitatibus minima fugit dicta minus
            accusamus repellendus architecto nisi consequuntur. Qui, ullam
            ducimus ad corporis harum accusantium enim.
          </p>
        </div>
        <div className='flex flex-col gap-4'>
          <h2 className='text-secondary font-bold'>Asignar</h2>
          <select className='select w-full max-w-sm bg-base-300 rounded-2xl h-8'>
            <option disabled selected>
              Pick the mechanic
            </option>
            <option>Homer</option>
            <option>Marge</option>
            <option>Bart</option>
            <option>Lisa</option>
            <option>Maggie</option>
          </select>
        </div>
        <div className='flex justify-center mt-5'>
          <button className='btn btn-primary text-secondary font-bold w-28 text-xl'>
            Notificar
          </button>
        </div>
      </div>
    </div>
  );
}
