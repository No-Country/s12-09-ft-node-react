'use client'

import { TabsLayout } from '@/components';
import { VehicleList } from '@/components/vehicle';
import { AddNewClientButton } from '@/components/client';
import type { Tabs } from '@/@types';
import { useVehicle } from '@/hook';
import { useEffect } from 'react';
import { WorkshopClients } from '@/components/WorkshopClients';

export default function WorkshopPage() {
  const { vehicles, isLoading, getAllVehicles } = useVehicle();

  useEffect(() => {
    getAllVehicles()  
  }, [])

  const tabs: Tabs[] = [
    {
      label: 'Vehículos',
      content: <VehicleList vehicles={vehicles} isLoading={isLoading} uri='/workshop/vehicle' />,
    },
    {
      label: 'Clientes',
      content: <WorkshopClients />,
    },
  ];

  return (
    <section>
      <TabsLayout tabs={tabs} />
      <AddNewClientButton />
    </section>
  );
}
