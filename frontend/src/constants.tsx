import { AirFilter, Battery, Brakes, CabinAir, Chasis, Engine, OilFilter, PlusIcon, System, Tires, Wheel } from '@/assets/svg';

export const options = {
    // Falta agregar los iconos por svg, dan errores
    optionsRepair: [
      {
        title: 'Aire de cabina',
        icon: <CabinAir />,
      },
      {
        title: 'Frenos',
        icon: <Tires />,
      },
      {
        title: 'Motor',
        icon: <Engine/>,
      },
      {
        title: 'Electricidad',
        icon: <System/>,
      },
      {
        title: 'Tren delantero',
        icon: <Chasis/>,
      },
      {
        title: 'Otro',
        icon: <PlusIcon/>,
      },
    ],
    optionsMaintenance: [
      {
        title: 'Neumaticos',
        icon: <Wheel/>,
      },
      {
        title: 'Bateria',
        icon: <Battery/>,
      },
      {
        title: 'Fluido hidraulico',
        icon: <Brakes/>,
      },
      {
        title: 'Electricidad',
        icon: <System/>,
      },
      {
        title: 'Filtro de aceite',
        icon: <OilFilter/>,
      },
      {
        title: 'Filtro de aire',
        icon: <AirFilter/>,
      },
    ],
  };