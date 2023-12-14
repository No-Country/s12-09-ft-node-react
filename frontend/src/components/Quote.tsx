'use client';

import { Button, Container } from '@/components';
import QuotesChooseCategory from './QuotesChooseCategory';

const QuoteRepairs = ({
  options,
  itemsForQuoteRepair,
  setItemsForQuoteRepair,
  itemsForQuoteMainteance,
  setItemsForQuoteMainteance,
}: any) => {
  const { optionsRepair, optionsMaintenance } = options;
  const handleRedirect = () => {
    console.log('rediirigir a presupuesto');
  };
  return (
    <Container>
      <section>
        <QuotesChooseCategory
          title='Reparacion'
          subtitle='Selecciona las categorias a reparar'
          options={optionsRepair}
          items={itemsForQuoteRepair}
          setItemsForQuote={setItemsForQuoteRepair}
        />
        <QuotesChooseCategory
          title='Mantenimiento'
          subtitle='Selecciona las categorias para mantenimiento'
          options={optionsMaintenance}
          items={itemsForQuoteMainteance}
          setItemsForQuote={setItemsForQuoteMainteance}
        />
        <div className='flex justify-end mr-2 my-10 '>
          <Button onClick={handleRedirect}>{'->'}</Button>
        </div>
      </section>
    </Container>
  );
};

export default QuoteRepairs;
