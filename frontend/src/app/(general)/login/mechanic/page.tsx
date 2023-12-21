import { Title } from '@/components';
import { MechanicLogin } from '@/components/login';

export default async function LoginMechanicPage() {
  return (
    <div >
      <Title title='¡Bienvenido al equipo de Mecánicos de MechanicAlert!' className='text-center'>
        <Title.Subtitle>Ingresa tu codigo de acceso</Title.Subtitle>
      </Title>
      <MechanicLogin />
    </div>
  );
}
