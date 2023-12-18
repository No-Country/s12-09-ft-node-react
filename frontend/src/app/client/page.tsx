'use client';
import type { Tabs } from '@/@types';
import { Container, TabsLayout } from '@/components';
import { VehicleList } from '@/components/vehicle';
import { useVehicle } from '@/hook';
import { useEffect } from 'react';

export default function ClientPage() {
  const { getAllVehicles } = useVehicle();

  useEffect(() => {
    getAllVehicles();
  }, []);

  const tabs: Tabs[] = [
    {
      label: 'Vehículos',
      content: (
        <VehicleList
          // data={vehicles}
          // loading={isLoading}
          uri='/client/vehicle'
        />
      ),
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
