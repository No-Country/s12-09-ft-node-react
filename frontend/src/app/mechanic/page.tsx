'use client';
import type { Tabs, Vehicle } from '@/@types';
import { Container, TabsLayout } from '@/components';
import { MechanicClients } from '@/components/MechanicClients';
import { VehicleList } from '@/components/vehicle';
import { useVehicle } from '@/hook';
import { useEffect, useState } from 'react';

export default function MechanicPage() {
  const { vehicles, isLoading, getAllVehicles } = useVehicle();
  const [ filterVehicles, setFilterVehicles] = useState<Vehicle[]>([])

  useEffect(() => {
    getAllVehicles();
  }, [])

  useEffect(() => {
    if(localStorage) {
      const mechanic = JSON.parse(localStorage.getItem('logged-mechanic')??'') 

      const newVehicles = vehicles.filter(state => state.mechanicId === mechanic.id)

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
