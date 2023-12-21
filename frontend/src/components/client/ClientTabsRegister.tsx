import type { Tabs } from '@/@types';
import { TabsLayout } from '@/components';
import { ClientRegister, ClientExist } from '.';

const tabs: Tabs[] = [
  {
    label: 'Registrar Cliente',
    content: <ClientRegister />,
  },
  {
    label: 'Cliente existente',
    content: <ClientExist />,
  },
];
export function ClientTabsRegister() {
  return <TabsLayout tabs={tabs} />;
}
