import { Title } from '@/components';
import { ClientLogin } from '@/components/login';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Client Login',
  description: 'Login page for clients',
};

export default function ClientLoginPage() {
  return (
    <>
      <Title title='¡Bienvenido!' className='text-center'>
        <Title.Subtitle>Ingresa tu codigo de acceso</Title.Subtitle>
      </Title>
      <ClientLogin />
    </>
  );
}
