import { Title } from '@/components';
import { ClientLogin } from '@/components/login';

export default function LoginClientPage() {
  return (
    <div className='w-[400px] relative mx-auto'>
      <Title title='¡Bienvenido!' className='text-center'>
        <Title.Subtitle>Ingresa tu codigo de acceso</Title.Subtitle>
      </Title>
      <ClientLogin />
    </div>
  );
}
