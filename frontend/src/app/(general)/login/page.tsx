import { Title } from '@/components';
import { ClientLogin } from '@/components/login';
import { clientService } from '@/services';

export default async function HomeLoginPage() {
  const users = await clientService.getAll()

  return (
    <>
      <Title title='¡Bienvenido a MechanicAlert!' className='text-center'>
        <Title.Subtitle>Ingresa tus datos de acceso</Title.Subtitle>
      </Title>
      <ClientLogin users={users} />
    </>
  );
}
