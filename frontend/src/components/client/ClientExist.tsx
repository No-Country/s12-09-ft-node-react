'use client';
import { useEffect, useState } from 'react';
import { Button, Input, Preload } from '@/components';
import { useClient } from '@/hook';
import type { User } from '@/@types';
import { VehicleRegister } from '@/components/vehicle';
import { useModal } from '@/modal';

export function ClientExist() {
  const [found, setFound] = useState<User>();

  const { openModal } = useModal();
  const { clients, isLoading, getAllClients, setClient } = useClient();

  useEffect(() => {
    getAllClients();
  }, []);

  const findDocument = (e: any) => {
    const document = e.target.value;
    const found = clients.find(
      item => String(item.document) === String(document)
    );
    setFound(found);
  };

  const handleClick = () => {
    setClient(found ?? {});
    openModal(<VehicleRegister client={found ?? {}} />, {
      title: 'Datos del vehículo',
    });
  };

  return (
    <div>
      {isLoading ? (
        <Preload />
      ) : (
        <>
          <Input
            placeholder='Buscar por dni'
            list='clients'
            handleChange={e => {
              findDocument(e);
            }}
          />
          <datalist id='clients'>
            {clients.map(item => (
              <option key={item.id}>{item.document}</option>
            ))}
          </datalist>
          {!found?.id ? (
            'usuario no encontrado'
          ) : (
            <>
              <div className='pt-3'>
                Cliente: <b>{`${found?.firstName} ${found?.lastName}`}</b>
              </div>
              <div className='pb-3'>
                Cantidad de vehículos: <b>{`${found?.vehicle?.length}`}</b>
              </div>
              <Button className='block w-full' onClick={handleClick}>
                Agregar nuevo vehículo
              </Button>
            </>
          )}
        </>
      )}
    </div>
  );
}
