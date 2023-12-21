'use client'

import { TabsLayout } from '@/components';
import { VehicleList } from '@/components/vehicle';
import { AddNewClientButton } from '@/components/client';
import type { Tabs } from '@/@types';
import { MechanicClients } from '@/components/MechanicClients';

export default function WorkshopPage() {
  const tabs: Tabs[] = [
    {
      label: 'Vehículos',
      content: <VehicleList uri='/workshop/vehicle' />,
    },
    {
      label: 'Clientes',
      content: <MechanicClients />,
    },
  ];

  return (
    <section>
      <TabsLayout tabs={tabs} />
      <AddNewClientButton />
    </section>
  );
}
