'use client';
import { useEffect } from 'react';
import { useVehicle, useModal } from '@/hook';
import { Button, Container, TabsLayout, VehicleList } from '@/components';
import type { Tabs } from '@/@types';
import { PlusIcon } from '@/assets/svg';

export default function WorkshopPage() {
  const { openModal } = useModal();
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
          <div className='fixed z-index-10 bottom-[2rem] right-0 left-0 flex justify-center'>
            <Button
              onClick={() => {
                openModal(<>Elemento</>);
              }}
              className='rounded-[50%]'
            >
              <PlusIcon className='[&>path]:fill-secondary' />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
