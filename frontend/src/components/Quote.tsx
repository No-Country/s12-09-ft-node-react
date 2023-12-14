import { Button, Container } from '@/components';
import QuotesChooseCategory from './QuotesChooseCategory';

// Falta agregar los iconos por svg, dan errores
const optionsRepair = [
  {
    title: 'Aire de cabina',
    icon: null,
  },
  {
    title: 'Frenos',
    icon: null,
  },
  {
    title: 'Motor',
    icon: null,
  },
  {
    title: 'Electricidad',
    icon: null,
  },
  {
    title: 'Tren delantero',
    icon: null,
  },
  {
    title: 'Otro',
    icon: null,
  },
];

const optionsMaintenance = [
  {
    title: 'Neumaticos',
    icon: null,
  },
  {
    title: 'Bateria',
    icon: null,
  },
  {
    title: 'Fluido hidrauli',
    icon: null,
  },
  {
    title: 'Electricidad',
    icon: null,
  },
  {
    title: 'Filtro de aceite',
    icon: null,
  },
  {
    title: 'Filtro de aire',
    icon: null,
  },
];

const QuoteRepairs = () => {
  return (
    <Container>
      <section
      //   className='md:grid md:grid-cols-2 gap-10 flex flex-col justify-center items-center min-h-screen '
      >
        <QuotesChooseCategory
          title='Reparacion'
          subtitle='Selecciona las categorias a reparar'
          options={optionsRepair}
        />
        <QuotesChooseCategory
          title='Mantenimiento'
          subtitle='Selecciona las categorias para mantenimineto'
          options={optionsMaintenance}
        />
        <div className='flex justify-end mr-2 my-10 '>
          <Button>Flechita</Button>
          {/* <Image
          className='hover:scale-105 hover:cursor-pointer'
          src={arrowButtonIcon}
          alt='boton'
        /> */}
        </div>
      </section>
    </Container>
  );
};

export default QuoteRepairs;
