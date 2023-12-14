'use client';
import type { Tabs } from '@/@types';
import { TabsLayout, ClientRegister } from '@/components';

const tabs: Tabs[] = [
  {
    label: 'Registrar Cliente',
    content: <ClientRegister />,
  },
  {
    label: 'Cliente existente',
    content: <>Cliente existente form</>,
  },
];
export function TabsCliente() {
  return (
    <>
      <TabsLayout tabs={tabs}></TabsLayout>
    </>
  );
}
