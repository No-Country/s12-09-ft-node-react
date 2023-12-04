import { input as Input } from '@/components';
import { PlusIcon, UserIcon } from '@/assets/icons';
import Image from 'next/image';

export default function MechanicPage() {
  return (
    <div className='flex flex-col justify-center items-center m-5 gap-5 [&>div]:mt-5'>
      <h1 className='text-3xl font-bold text-secondary'>Tu equipo</h1>
      <h2 className='text-xl text-center text-accent'>
        Crea usuarios para tu equipo de trabajo
      </h2>
      <div className='flex flex-col gap-3'>
        <div className='flex justify-between'>
            <button className='btn btn-sm btn-circle bg-base-300'><Image src={UserIcon} alt='user icon'/></button>
            <button className='btn btn-sm btn-circle btn-ghost'><Image src={PlusIcon} alt='plus icon'/></button>
        </div>
        <Input name='email' placeholder='Email' type='text' />
        <Input name='name' placeholder='Nombre y apellido' type='text' />
        <div className='flex flex-row gap-3'>
          <div className='flex-1 flex flex-col gap-3'>
            <Input name='dni' placeholder='DNI' type='text' />
            <Input name='phone' placeholder='Teléfono' type='text' />
          </div>
          <div className='flex-1  flex flex-col gap-3'>
            <Input name='rol' placeholder='Rol' type='text' />
            <Input name='password' placeholder='Contraseña' type='text' />
          </div>
        </div>
        <div className='flex justify-center mt-6'>
        <button className='btn w-20 text-lg font-bold btn-primary text-secondary'>Listo</button>
        </div>
      </div>
    </div>
  );
}
