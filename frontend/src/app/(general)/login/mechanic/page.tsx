import { Title } from '@/components';
import { MechanicLogin } from '@/components/login';
import { mechanicService } from '@/services';

export default async function LoginMechanicPage() {
  const mechanics = await mechanicService.getAll();

  return (
    <div className='w-[400px] relative mx-auto'>
      <Title title='¡Bienvenido!' className='text-center'>
        <Title.Subtitle>Ingresa tu codigo de acceso</Title.Subtitle>
      </Title>
      <MechanicLogin mechanics={mechanics} />
    </div>
  );
}
