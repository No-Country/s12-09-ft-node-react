'use client';
import type { Mechanic, Vehicle } from '@/@types';
import { Button, Input } from '@/components';
import { useVehicle } from '@/hook';
import { useState } from 'react';

interface Props {
  vehicle: Vehicle;
  mechanics: Mechanic[];
}

export function AddMechanicOnVehicle({ vehicle, mechanics }: Props) {
  const [selected, setSelected] = useState<Mechanic | undefined>();
  const { updateVehicle } = useVehicle();

  const selectMechanic = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const value = target.value;

    if (value.includes('-')) {
      const [, document] = value.split('-');
      const current = mechanics.find(
        item => item.document === Number(document)
      );
      setSelected(current);
    }
  };

  const handleClick = () => {
    const updateObj = vehicle;
    updateObj.mechanicId = selected?.id;
    updateVehicle(updateObj);
  };
  console.log(vehicle);

  return (
    <>
      <b>Mecánico</b>
      <Input
        placeholder='Buscar mecánico'
        datalist={mechanics.map(
          element =>
            `${element.firstName} ${element.lastName}-${element.document}`
        )}
        handleChange={selectMechanic}
      />
      {selected && (
        <Button className='block w-full' onClick={handleClick}>
          Asignar
        </Button>
      )}
    </>
  );
}
