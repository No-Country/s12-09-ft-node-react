'use client';
import type { Tabs } from '@/@types';
import { Container, TabsLayout } from '@/components';
import MechanicClients from '@/components/MechanicClients';
import { VehicleList } from '@/components/vehicle';
import { useVehicle } from '@/hook';
import { useEffect } from 'react';

export default function MechanicPage() {
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
          uri='/mechanic/vehicle'
        />
      ),
    },
    {
      label: 'Clientes',
      content: <MechanicClients/>,
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
