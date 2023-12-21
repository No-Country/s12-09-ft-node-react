'use client';
import type { Tabs } from '@/@types';
import { Container, TabsLayout } from '@/components';
import { MechanicClients } from '@/components/MechanicClients';
import { VehicleList } from '@/components/vehicle';
import { useRepairLog, useVehicle } from '@/hook';
import { useEffect } from 'react';

export default function MechanicPage() {
  const { vehicles, getAllVehicles } = useVehicle();
  const { getAllRepairLog } = useRepairLog();

  useEffect(() => {
    getAllRepairLog();
  }, []);

  useEffect(() => {
    getAllVehicles();

    if(localStorage) {
      const mechanic = JSON.parse(localStorage.getItem('logged-mechanic')??'') 
      console.log('LocalStorage:', mechanic)
    }

  }, [vehicles])

  const tabs: Tabs[] = [
    {
      label: 'Vehículos',
      content: (
        <VehicleList
          // loading={isLoading}
          uri='/mechanic/vehicle'
        />
      ),
    },
    {
      label: 'Clientes',
      content: <MechanicClients />,
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
