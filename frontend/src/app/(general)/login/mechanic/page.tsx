import { Title } from '@/components';
import { MechanicLogin } from '@/components/login';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mechanic Login',
  description: 'Login page for mechanics',
};

export default function MechanicLoginPage() {
  return (
    <>
      <Title title='¡Bienvenido!' className='text-center'>
        <Title.Subtitle>Ingresa tu codigo de acceso</Title.Subtitle>
      </Title>
      <MechanicLogin />
    </>
  );
}
