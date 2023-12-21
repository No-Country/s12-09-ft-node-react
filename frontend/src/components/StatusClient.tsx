'use client'
import type { BudgetState } from '@/@types';
import { useEffect, useState } from 'react';

interface Props {
  idLog: string;
  state: BudgetState;
}

export function StatusClient({ idLog, state }: Props) {
  const [localState, setLocalState] = useState(state);

  useEffect(() => {
    // Actualizar el estado local cuando cambia el estado prop
    setLocalState(state);
  }, [state]);

  const repeatStyle =
    'step text-xs before:border before:border-primary before:h-1 after:border after:border-primary';

  const witchOne =
    localState === 'Cotizar'
      ? 1
      : localState === 'Confirmar'
        ? 2
        : localState === 'En reparacion'
          ? 3
          : localState === 'Aviso al cliente'
            ? 4
            : 0;


  return (
    <>
      <h4 className='text-xs text-accent'>Estado: {localState}</h4>
      <ul className='steps'>
        <li className={`${repeatStyle} ${witchOne > 0 ? 'step-primary' : ''}`}>
          Cotizar
        </li>
        <li className={`${repeatStyle} ${witchOne > 1 ? 'step-primary' : ''}`}>
          Confirmar
        </li>
        <li className={`${repeatStyle} ${witchOne > 2 ? 'step-primary' : ''}`}>
          En reparación
        </li>
        <li className={`${repeatStyle} ${witchOne > 3 ? 'step-primary' : ''}`}>
          Finalizado
        </li>
      </ul>
    </>
  );
}
