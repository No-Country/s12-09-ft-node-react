import { Title } from '@/components';
import { WorkshopLogin } from '@/components/login';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Workshop Login',
  description: 'Login page for workshop administrator',
};

export default function WorkshopLoginPage() {
  return (
    <>
      <Title title='¡Bienvenido!' className='text-center'>
        <Title.Subtitle>Ingresa tus datos de acceso</Title.Subtitle>
      </Title>
      <WorkshopLogin />
    </>
  );
}
