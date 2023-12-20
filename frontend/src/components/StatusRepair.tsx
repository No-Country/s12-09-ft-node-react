import type { BudgetState } from '@/@types';

interface Props {
  state: BudgetState;
}

export function Status({ state }: Props) {
  const repeatStyle =
    'step text-xs before:border before:border-primary before:h-1 after:border after:border-primary';

  const witchOne =
    state === 'Cotizar'
      ? 1
      : state === 'Confirmar'
        ? 2
        : state === 'En reparacion'
          ? 3
          : state === 'Aviso al cliente'
            ? 4
            : 0;

  // step-primary
  return (
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
  );
}
