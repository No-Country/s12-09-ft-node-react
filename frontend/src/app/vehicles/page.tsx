'use client';
import { VehiclesGrid } from './components';
import { Container } from '@/components';

export default function VehiclesPage() {
  return (
    <section className='vehicle-page'>
      <Container>
        <VehiclesGrid />
      </Container>
    </section>
  );
}
