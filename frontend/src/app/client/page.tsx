'use client';
import type { Tabs, Vehicle } from '@/@types';
import { Container, TabsLayout } from '@/components';
import { ClientRepairs } from '@/components/ClientRepairs';
import { VehicleList } from '@/components/vehicle';
import { useVehicle } from '@/hook';
import { useEffect, useState } from 'react';

export default function ClientPage() {
  const { vehicles, isLoading, getAllVehicles } = useVehicle();
  const [ filterVehicles, setFilterVehicles] = useState<Vehicle[]>([])

  useEffect(() => {
    getAllVehicles();
  }, [])

  useEffect(() => {
    if(localStorage) {
      const user = JSON.parse(localStorage.getItem('logged-user')!) 

      const newVehicles = vehicles.filter(state => state.userId === user.id)

      setFilterVehicles(newVehicles)
    }
  }, [vehicles])

  const tabs: Tabs[] = [
    {
      label: 'Vehículos',
      content: (
        <VehicleList
          vehicles={filterVehicles}
          isLoading={isLoading}
          uri='/client/vehicle'
        />
      ),
    },
    {
      label: 'Reparaciones',
      content: <ClientRepairs/>,
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
