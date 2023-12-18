import { Title } from '@/components';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Workshop register',
  description: 'description',
};

export default function RegisterPage() {
  return (
    <>
      <Title title='¡Bienvenido!' className='text-center'>
        <Title.Subtitle>
          Ingresa los datos de tu taller para registrarlo.
        </Title.Subtitle>
      </Title>
    </>
  );
}
