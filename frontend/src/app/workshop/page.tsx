'use client';
import { useEffect } from 'react';
import { useVehicle } from '@/hook';
import { Container, TabsLayout, VehicleList } from '@/components';
import type { Tabs } from '@/@types';

export default function WorkshopPage() {
  const { vehicles, isLoading, getAllVehicles } = useVehicle();
  const tabs: Tabs[] = [
    {
      label: 'Vehículos',
      content: (
        <VehicleList
          data={vehicles}
          loading={isLoading}
          uri='/workshop/vehicle'
        />
      ),
    },
    {
      label: 'Clientes',
      content: <>Content cliente</>,
    },
  ];

  useEffect(() => {
    getAllVehicles();
  }, []);

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
