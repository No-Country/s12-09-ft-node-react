import { Container, Preload } from '@/components/';
export default function Loading() {
  return (
    <section>
      <Container>
        <Preload className='fixed inset-0' />
      </Container>
    </section>
  );
}
