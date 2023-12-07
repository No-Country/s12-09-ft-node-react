'use client';
import { useModal } from '@/hook';
import { VehiclesGrid } from './components';
import { Container } from '@/components';

export default function VehiclesPage() {
  const { openModal } = useModal();
  return (
    <section className='vehicle-page'>
      <Container>
        <>
          <div role='tablist' className='tabs tabs-bordered'>
            <a role='tab' className='tab tab-active'>
              Taller
            </a>
            <a role='tab' className='tab'>
              Clientes
            </a>
          </div>
          <VehiclesGrid />
        </>
      </Container>
      <button
        onClick={() => {openModal(<>Contenido</>, { title: 'Modal' })}}
        className='btn btn-sm btn-circle'
      >
        +
      </button>
    </section>
  );
}
