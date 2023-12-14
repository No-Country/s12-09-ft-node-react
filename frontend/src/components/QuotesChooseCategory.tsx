import React from 'react';
import RepairOption from './RepairOption';

interface props {
  title: string;
  subtitle: string;
  options: Array<{ title: string }>;
}

const QuotesChooseCategory = ({ title, subtitle, options }: props) => {
  return (
    <article className='flex justify-center gap-3 items-center flex-col py-3'>
      <div className='pr-20 md:pr-0 '>
        <h2 className="md:text-center  mb-2 text-indigo-900 text-3xl font-bold font-['Roboto']">
          {title}
        </h2>
        <h3 className="text-center text-neutral-400 text-xl font-medium font-['Roboto'] leading-7 my-3">
          {subtitle}
        </h3>
      </div>
      <div className='flex justify-center gap-8 flex-wrap'>
        {options.map((opt, i) => (
          <RepairOption key={i} title={opt.title} />
        ))}
      </div>
    </article>
  );
};

export default QuotesChooseCategory;
