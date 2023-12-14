import type { Tabs } from '@/@types';
import { Container, TabsLayout } from '@/components';
import QuoteRepairs from '@/components/Quote';

export default function QuotePage() {
  const tabs: Tabs[] = [
    {
      label: 'Componentes',
      content: <QuoteRepairs />,
    },
    {
      label: 'Costo',
      content: <>Content cost</>,
    },
  ];

  return (
    <section>
      <Container>
        <div>
          <TabsLayout tabs={tabs} />
        </div>
      </Container>
    </section>
  );
}
