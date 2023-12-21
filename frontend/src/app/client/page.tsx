'use client';
import type { Budget, Tabs, Vehicle } from '@/@types';
import { TabsLayout } from '@/components';
import AcceptBudget from '@/components/AcceptBudget';
import { ClientRepairs } from '@/components/ClientRepairs';
import { VehicleList } from '@/components/vehicle';
import { useBudget, useVehicle } from '@/hook';
import { useEffect, useState } from 'react';

export default function ClientPage() {
  const { vehicles, isLoading, getAllVehicles } = useVehicle();
  const { budgets, getAllBudget } = useBudget();
  const [filterVehicles, setFilterVehicles] = useState<Vehicle[]>([]);
  const [filteredBudget, setFilteredBudget] = useState<Budget[]>([])

  useEffect(() => {
    getAllVehicles();
    getAllBudget();
  }, []);

  useEffect(() => {
    if (localStorage) {
      const user = JSON.parse(localStorage.getItem('logged-user')!);
      const newVehicles = vehicles.filter(state => state.userId === user.id);
      setFilterVehicles(newVehicles);

      const newBudgets = budgets.filter(item => item.user?.id === user.id && !item.accepted)
      setFilteredBudget(newBudgets)
    }
  }, [budgets]);

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
      content: <ClientRepairs />,
    },
  ];
  return (
    <section>
      <TabsLayout tabs={tabs} />
      <AcceptBudget budget={filteredBudget}/>
    </section>
  );
}
