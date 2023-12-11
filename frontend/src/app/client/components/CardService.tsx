import type { Vehicle } from '@/@types';
import swal from 'sweetalert';

interface Props {
  vehicle: Vehicle;
  //   user: User;
}

const NotifyDetails = () => {
  swal(
    'Direcciona al detalle vehiculo',
    '(Sin que se pueda modificar nada)',
    'info'
  );
};

export const CardService = ({ vehicle }: Props) => {
  return (
    <div
      key={vehicle.id}
      className='max-w-sm bg-base-300 rounded-3xl p-5 flex flex-col'
    >
      <div className='flex justify-between'>
        <div className='flex  flex-col'>
          <h4 className='text-xs'>
            {vehicle.user.firstName} {vehicle.user.lastName}
          </h4>
          <div className='flex flex-row gap-3'>
            <h2 className='text-base font-bold'>
              {vehicle.brand}-{vehicle.model}
            </h2>
            <h2 className='text-base'>| {vehicle.licensePlate}</h2>
          </div>
        </div>
        <button
          onClick={() => {
            NotifyDetails();
          }}
          className='btn btn-primary btn-xs w-[66px]'
        >
          Detalle
        </button>
      </div>
      <h4 className='text-xs text-accent'>Estado: Sin cotizar 04/12</h4>
      <ul className='steps'>
        <li className='step text-xs before:border before:border-primary before:h-1 after:border after:border-primary  step-primary'>
          Cotizar
        </li>
        <li className='step text-xs before:border before:border-primary before:h-1 after:border after:border-primary step-primary'>
          Confirmar
        </li>
        <li className='step text-xs before:border before:border-primary before:h-1 after:border after:border-primary'>
          En reparación
        </li>
        <li className='step text-xs before:border before:border-primary before:h-1 after:border after:border-primary'>
          Aviso a cliente
        </li>
      </ul>
    </div>
  );
};
