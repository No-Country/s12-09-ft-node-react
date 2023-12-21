'use client';

import type { Tabs } from '@/@types';
import { TabsLayout } from '@/components';
import CostPage from '@/components/Cost';
import QuoteRepairs from '@/components/Quote';
import { options } from '@/constants';
import { useState } from 'react';

export interface ItemsRepair {
  title: string;
  icon: null | JSX.Element;
}

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
