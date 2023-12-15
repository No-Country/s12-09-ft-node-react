'use client';

import type { Tabs } from '@/@types';
import { Container, TabsLayout } from '@/components';
import CostPage from '@/components/Cost';
import QuoteRepairs from '@/components/Quote';
import { useState } from 'react';

export interface ItemsRepair {
    title: string,
    icon: null
}

const options = {
  // Falta agregar los iconos por svg, dan errores
  optionsRepair: [
    {
      title: 'Aire de cabina',
      icon: null,
    },
    {
      title: 'Frenos',
      icon: null,
    },
    {
      title: 'Motor',
      icon: null,
    },
    {
      title: 'Electricidad',
      icon: null,
    },
    {
      title: 'Tren delantero',
      icon: null,
    },
    {
      title: 'Otro',
      icon: null,
    },
  ],
  optionsMaintenance: [
    {
      title: 'Neumaticos',
      icon: null,
    },
    {
      title: 'Bateria',
      icon: null,
    },
    {
      title: 'Fluido hidrauli',
      icon: null,
    },
    {
      title: 'Electricidad',
      icon: null,
    },
    {
      title: 'Filtro de aceite',
      icon: null,
    },
    {
      title: 'Filtro de aire',
      icon: null,
    },
  ],
};

export default function QuotePage() {
  const [itemsForQuoteRepair, setItemsForQuoteRepair] = useState([]);
  const [itemsForQuoteMainteance, setItemsForQuoteMainteance] = useState([]);

  const tabs: Tabs[] = [
    {
      label: 'Componentes',
      content: (
        <QuoteRepairs
          options={options}
          itemsForQuoteRepair={itemsForQuoteRepair}
          itemsForQuoteMainteance={itemsForQuoteMainteance}
        />
      ),
    },
    {
      label: 'Costo',
      content: (
        <CostPage
        />
      ),
    },
  ];

  return (
    <section>
        <Container>
          <TabsLayout tabs={tabs} />
        </Container>
    </section>
  );
}