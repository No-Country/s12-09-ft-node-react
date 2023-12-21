'use client';

import type { Tabs } from '@/@types';
import { AirFilter, Battery, Brakes, CabinAir, Chasis, Engine, OilFilter, PlusIcon, System, Tires, Wheel } from '@/assets/svg';
import { TabsLayout } from '@/components';
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
      icon: <Engine/>,
    },
    {
      title: 'Electricidad',
      icon: <System/>,
    },
    {
      title: 'Tren delantero',
      icon: <Chasis/>,
    },
    {
      title: 'Otro',
      icon: <PlusIcon/>,
    },
  ],
  optionsMaintenance: [
    {
      title: 'Neumaticos',
      icon: <Wheel/>,
    },
    {
      title: 'Bateria',
      icon: <Battery/>,
    },
    {
      title: 'Fluido hidraulico',
      icon: <Brakes/>,
    },
    {
      title: 'Electricidad',
      icon: <System/>,
    },
    {
      title: 'Filtro de aceite',
      icon: <OilFilter/>,
    },
    {
      title: 'Filtro de aire',
      icon: <AirFilter/>,
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
        <div>
          <TabsLayout tabs={tabs} viewOutside={currentTab} setViewOutside={setCurrentTab} />
        </div>
    </section>
  );
}
