'use client';

interface Repair {
  title: string;
  icon: null | JSX.Element;
}

interface Options {
  optionsRepair: Repair[];
  optionsMaintenance: Repair[];
}

interface Props {
  options: Options;
  itemsForQuoteRepair: Repair[];
  itemsForQuoteMainteance: Repair[];
}

const QuoteRepairs: React.FC<Props> = ({
  options,
  itemsForQuoteRepair,
  itemsForQuoteMainteance,
}) => {
  return (
    <div className='flex w-full pt-8'>
      <div className='flex flex-col w-full items-center'>
        <h2 className='text-xl text-secondary font-bold'>Reparación</h2>
        <p className='font-semibold text-accent'>
          Selecciona las categorias a reparar
        </p>

        {options.optionsRepair.map((optionRepair) => (
          <ul key={optionRepair.title}>

          </ul>
        ))}
      </div>

      <div className='flex flex-col w-full items-center'>
        <h2 className='text-xl text-secondary font-bold'>Mantenimiento</h2>
        <p className='font-semibold text-accent'>
          Selecciona las categorias para mantenimiento
        </p>
      </div>
    </div>
  );
};

export default QuoteRepairs;

/*
  <div>
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
</div>
  */
