'use client';

import type { Tabs } from '@/@types';
import { CabinAir, Tires, MotorIcon } from '@/assets/svg';
import { Container, TabsLayout } from '@/components';
import CostPage from '@/components/Cost';
import QuoteRepairs from '@/components/Quote';
import { useState } from 'react';

export interface ItemsRepair {
  title: string;
  icon: null | JSX.Element;
}

const options = {
  // Falta agregar los iconos por svg, dan errores
  optionsRepair: [
    {
      title: 'Aire de cabina',
      icon: <CabinAir />,
    },
    {
      title: 'Frenos',
      icon: <Tires />,
    },
    {
      title: 'Motor',
      icon: <MotorIcon size={40} />,
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
  const [itemsForQuoteRepair, setItemsForQuoteRepair] = useState<ItemsRepair[]>(
    []
  );
  const [itemsForQuoteMainteance, setItemsForQuoteMainteance] = useState<
    ItemsRepair[]
  >([]);
  const [currentTab, setCurrentTab] = useState<string | undefined>(
    'Componentes'
  );

  const tabs: Tabs[] = [
    {
      label: 'Componentes',
      content: (
        <QuoteRepairs
          options={options}
          itemsForQuoteRepair={itemsForQuoteRepair}
          itemsForQuoteMainteance={itemsForQuoteMainteance}
          setItemsForQuoteRepair={setItemsForQuoteRepair}
          setItemsForQuoteMaiteance={setItemsForQuoteMainteance}
          setView={setCurrentTab}
        />
      ),
    },
    {
      label: 'Costo',
      content: (
        <CostPage
          itemsForQuoteRepair={itemsForQuoteRepair}
          itemsForQuoteMainteance={itemsForQuoteMainteance}
          setView={setCurrentTab}
        />
      ),
    },
  ];

  return (
    <section>
      <Container>
        <TabsLayout
          tabs={tabs}
          viewOutside={currentTab}
          setViewOutside={setCurrentTab}
        />
      </Container>
    </section>
  );
}
