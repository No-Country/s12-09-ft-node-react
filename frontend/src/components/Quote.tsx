'use client';

import { CabinAirIcon } from './Icons';

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
                  onChange={(e) => {console.log(e.target.value)}}
                  className='absolute top-0 right-0 rounded-full appearance-none border-2 border-primary h-5 w-5 checked:bg-primary'
                />
                <CabinAirIcon size='40'/>
              </div>
              <span className='text-accent text-sm sm:text-base'>{optionRepair.title}</span>
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
          {options.optionsRepair.map(optionRepair => (
            <li
              key={optionRepair.title}
              className='flex flex-col items-center gap-1 text-center'
            >
              <div className='w-20 h-20 bg-base-300 rounded-full flex justify-center items-center relative'>
                <input
                  type='checkbox'
                  onChange={(e) => {console.log(e.target.value)}}
                  className='absolute top-0 right-0 rounded-full appearance-none border-2 border-primary h-5 w-5 checked:bg-primary'
                />
                <CabinAirIcon size='40'/>
              </div>
              <span className='text-accent text-sm sm:text-base'>{optionRepair.title}</span>
            </li>
          ))}
        </ul>
      </section>
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
