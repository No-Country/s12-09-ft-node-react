'use client';
import type { Tabs } from '@/@types';
import { Container, TabsLayout, VehicleList } from '@/components';
import { useVehicle } from '@/hook';
import { useEffect } from 'react';

export default function MechanicPage() {
  const { vehicles, isLoading, getAllVehicles } = useVehicle();

  useEffect(() => {
    getAllVehicles();
  }, []);

  const tabs: Tabs[] = [
    {
      label: 'Vehículos',
      content: <VehicleList data={vehicles} loading={isLoading} />,
    },
    {
      label: 'Clientes',
      content: <>Content cliente</>,
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
