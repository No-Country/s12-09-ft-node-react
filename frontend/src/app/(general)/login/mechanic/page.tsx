import { Title } from '@/components';
import { MechanicLogin } from '@/components/login';

export default async function LoginMechanicPage() {
  return (
    <div className='w-[400px] relative mx-auto'>
      <Title title='¡Bienvenido!' className='text-center'>
        <Title.Subtitle>Ingresa tu codigo de acceso</Title.Subtitle>
      </Title>
      <MechanicLogin />
    </div>
  );
}
