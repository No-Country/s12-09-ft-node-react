import type { BudgetState } from '@/@types';
import { Button } from '.';
import { useRepairLog } from '@/hook';
import swal from 'sweetalert';

interface Props {
  idLog: string;
  state: BudgetState;
}

export function Status({ idLog, state }: Props) {
  const { updateRepairLog } = useRepairLog();

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

  const handleUpdateRepairLog = () => {
    if (witchOne === 1) {
      // Aca se manda el presupuesto al cliente
      updateRepairLog(idLog, 'Confirmar');
    } else if (witchOne === 2) {
      // Cliente acepta presupuesto y:
      updateRepairLog(idLog, 'En reparacion');
    } else if (witchOne === 3) {
      // Se finalizaron las reparaciones!
      updateRepairLog(idLog, 'Aviso al cliente');
    }
  };

  const handleDeleteRepairLog = () => {
    swal('Confirmar para borrar', {
      buttons: {
        cancel: {
          text: 'Cancel',
          value: null,
          visible: true,
          className: '',
          closeModal: true,
        },
        confirm: {
          text: 'OK',
          value: true,
          visible: true,
          className: '',
          closeModal: true,
        },
      },
    });
    // deleteRepairLog(idLog)
  };

  return (
    <>
      <h4 className='text-xs text-accent'>Estado: {state}</h4>
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
      <div className='mx-auto mt-3'>
        {witchOne === 4 ? (
          <div>
            <Button
              onClick={handleDeleteRepairLog}
              className='bg-white text-sm h-1 mr-2'
            >
              Eliminar
            </Button>
            <Button onClick={handleUpdateRepairLog} className='text-sm py-1'>
              Reparar
            </Button>
          </div>
        ) : (
          witchOne === 3 && (
            <div>
              <Button onClick={handleUpdateRepairLog} className='text-sm mx-1'>
                Notificar Reparacion
              </Button>
            </div>
          )
        )}
      </div>
    </>
  );
}
