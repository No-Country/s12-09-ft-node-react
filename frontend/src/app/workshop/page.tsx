import { input as Input } from '@/components';
import {
  GroupIcon,
  LockIcon,
  MailIcon,
  PhoneIcon,
  AddressIcon,
} from '@/assets/icons';
import Image from 'next/image';
import { useState } from 'react';

interface WorkShop {
  name: string;
  password: string;
  mail: string;
  phone: string;
  address: string;
}

const WorkshopRegister = (): JSX.Element => {
  return (
    <div className='flex flex-col items-center mt-8'>
      <header>
        <h1 className='text-center text-3xl font-bold text-secondary'>
          Bienvenido!
        </h1>
        <h2 className='text-xl text-center text-accent'>
          Ingresa los datos de tu taller para registrarlo
        </h2>
      </header>
      <form className='flex flex-col w-full gap-2 my-8 items-center'>
        <div className='flex flex-row gap-2'>
          <Image src={GroupIcon} alt='user icon' />
          <Input
            name='workshopName'
            placeholder='Nombre del taller'
            type='text'
          />
        </div>
        <div className='flex flex-row gap-2'>
          <Image src={LockIcon} alt='user icon' />
          <Input name='password' placeholder='Contraseña' type='password' />
        </div>
        <div className='flex flex-row gap-2'>
          <Image src={MailIcon} alt='user icon' />
          <Input name='email' placeholder='Email' type='text' />
        </div>
        <div className='flex flex-row gap-2'>
          <Image src={PhoneIcon} alt='user icon' />
          <Input name='phone' placeholder='Teléfono' type='tel' />
        </div>
        <div className='flex flex-row gap-2'>
          <Image src={AddressIcon} alt='user icon' />
          <Input name='address' placeholder='Direccion' type='text' />
        </div>
        <div className='flex justify-center mt-6'>
          <button className='btn text-lg font-bold btn-primary text-secondary'>
            Registrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default WorkshopRegister;
