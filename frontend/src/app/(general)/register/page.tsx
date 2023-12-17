import { Title } from '@/components';
import { WorkshopRegister } from '@/components/register';

export default function RegisterPage() {
  return (
    <>
      <Title title='¡Bienvenido!' className='text-center'>
        <Title.Subtitle>
          Ingresa los datos de tu taller para registrarlo.
        </Title.Subtitle>
      </Title>
      <WorkshopRegister />
    </>
  );
}
