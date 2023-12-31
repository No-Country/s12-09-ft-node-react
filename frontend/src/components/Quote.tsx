'use client';

import type { ItemsRepair } from '@/app/mechanic/vehicle/[id]/budget/page';
import type { Dispatch, SetStateAction } from 'react';
import { Button } from '.';

interface Options {
  optionsRepair: ItemsRepair[];
  optionsMaintenance: ItemsRepair[];
}

interface Props {
  options: Options;
  itemsForQuoteRepair: ItemsRepair[];
  itemsForQuoteMainteance: ItemsRepair[];
  setItemsForQuoteRepair: Dispatch<SetStateAction<ItemsRepair[]>>;
  setItemsForQuoteMaiteance: Dispatch<SetStateAction<ItemsRepair[]>>;
  setView?: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const QuoteRepairs: React.FC<Props> = ({
  options,
  itemsForQuoteRepair,
  itemsForQuoteMainteance,
  setItemsForQuoteRepair,
  setItemsForQuoteMaiteance,
  setView,
}) => {
  const handleChangeQuote = (title: string, type: 'repair' | 'mainteance') => {
    if (type === 'repair') {
      // Verificar si el elemento ya está en la lista
      const isAlreadySelected = itemsForQuoteRepair.some(
        item => item.title === title
      );

      if (isAlreadySelected) {
        // Si ya está seleccionado, eliminarlo de la lista
        const updatedList = itemsForQuoteRepair.filter(
          item => item.title !== title
        );
        setItemsForQuoteRepair(updatedList);
      } else {
        // Si no está seleccionado, agregarlo a la lista
        const selectedOption = options.optionsRepair.find(
          option => option.title === title
        );
        if (selectedOption) {
          setItemsForQuoteRepair([...itemsForQuoteRepair, selectedOption]);
        }
      }
    } else if (type === 'mainteance') {
      const isAlreadySelected = itemsForQuoteMainteance.some(
        item => item.title === title
      );

      if (isAlreadySelected) {
        const updatedList = itemsForQuoteMainteance.filter(
          item => item.title !== title
        );
        setItemsForQuoteMaiteance(updatedList);
      } else {
        const selectedOption = options.optionsMaintenance.find(
          option => option.title === title
        );
        if (selectedOption) {
          setItemsForQuoteMaiteance([
            ...itemsForQuoteMainteance,
            selectedOption,
          ]);
        }
      }
    }
  };

  return (
    <div>
      <div className='flex flex-col gap-8 sm:flex-row w-full pt-4 sm:pt-8'>
        <section className='flex flex-col w-full items-center'>
          <h2 className='text-xl text-secondary font-bold'>Reparación</h2>
          <p className='font-semibold text-accent'>
            Selecciona las categorias a reparar
          </p>
          <ul className='grid grid-cols-3 gap-5 sm:gap-10 pt-8'>
            {options.optionsRepair.map(optionRepair => (
              <li
                key={optionRepair.title}
                className='flex flex-col items-center gap-1 text-center'
              >
                <div className='w-20 h-20 bg-base-300 rounded-full flex justify-center items-center relative'>
                  <input
                    type='checkbox'
                    onChange={() => {
                      handleChangeQuote(optionRepair.title, 'repair');
                    }}
                    className='absolute top-0 right-0 rounded-full appearance-none border-2 border-primary h-5 w-5 checked:bg-primary'
                  />
                  <div className='[&>svg]:h-10 [&>svg]:w-10'>
                    {optionRepair.icon}
                  </div>
                </div>
                <span className='text-accent text-sm sm:text-base'>
                  {optionRepair.title}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className='flex flex-col w-full items-center text-center'>
          <h2 className='text-xl text-secondary font-bold'>Mantenimiento</h2>
          <p className='font-semibold text-accent'>
            Selecciona las categorias para mantenimiento
          </p>

          <ul className='grid grid-cols-3 gap-5 sm:gap-10 pt-8'>
            {options.optionsMaintenance.map(optionRepair => (
              <li
                key={optionRepair.title}
                className='flex flex-col items-center gap-1 text-center'
              >
                <div className='w-20 h-20 bg-base-300 rounded-full flex justify-center items-center relative'>
                  <input
                    type='checkbox'
                    onChange={() => {
                      handleChangeQuote(optionRepair.title, 'mainteance');
                    }}
                    className='absolute top-0 right-0 rounded-full appearance-none border-2 border-primary h-5 w-5 checked:bg-primary'
                  />
                  <div
                    className={`[&>svg]:h-10 [&>svg]:w-10 ${
                      optionRepair.title === 'Bateria' &&
                      '[&>svg]:h-16 [&>svg]:w-16'
                    }`}
                  >
                    {optionRepair.icon}
                  </div>
                </div>
                <span className='text-accent text-sm sm:text-base'>
                  {optionRepair.title}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <div className='flex justify-center pt-20'>
        <Button
          className='w-full max-w-xs'
          disabled={
            itemsForQuoteRepair.length === 0 &&
            itemsForQuoteMainteance.length === 0
          }
          onClick={() => {
            if (setView) setView('Costo');
          }}
        >
          Ir a cotizar
        </Button>
      </div>
    </div>
  );
};

export default QuoteRepairs;
