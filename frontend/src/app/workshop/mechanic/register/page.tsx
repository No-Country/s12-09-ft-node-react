import { Title } from '@/components';
import { MechanicRegister } from '@/components/mechanic';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mechanic register',
  description: 'description',
};

export default function MechanicRegisterPage() {
  return (
    <>
      <Title title='Tu equipo' className='text-center'>
        <Title.Subtitle>Crea usuarios para tu equipo de trabajo</Title.Subtitle>
      </Title>
      <MechanicRegister />
    </>
  );
}
