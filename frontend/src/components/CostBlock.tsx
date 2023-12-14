'use client';

import { Input } from '@/components';
import { useState } from 'react';

interface props {
  title: string;
  data: any;
  handleBlur: any;
  handleChange?: any;
  values: any;
}

interface itemMap {
  title: string;
  icon: null;
}

const CostBlock = ({ title, data, handleBlur }: props) => {
  console.log(data);

  return (
    <div className='flex flex-col pb-2 w-full'>
      <h3 className='text-secondary font-semibold text-lg sm:text-xl sm:font-semibold'>
        {title}
      </h3>

      {data?.map((item: itemMap, index: number) => {
        const [description, setDescription] = useState('');
        const [price, setPrice] = useState(0);
        return (
          <div
            key={index}
            className='flex border-b-2 border-base-200 sm:border-none gap-1 py-3 sm:gap-4'
          >
            <div className=''>
              <div className='relative p-1 bg-white sm:bg-base-300 flex justify-center h-7 w-7 sm:h-12 sm:w-12 rounded-full'>
                {/* <Image src={item.icon} alt='Icon' fill className='p-1 sm:p-2' /> */}
              </div>
            </div>

            <div className='flex flex-col gap-1 w-full'>
              <span className='text-sm text-base-accent pl-1 sm:text-base md:text-lg'>
                {item.title}
              </span>
              <input
                //   name={`data[${index}].description`}
                placeholder='Objeto a reparar'
                className={`bg-white sm:bg-base-300 h-8 md:h-10 w-44 `}
                value={description}
                onChange={ev => {
                  setDescription(ev.target.value);
                }}
                // handleBlur={handleBlur}
              />
            </div>

            <div className='flex items-end max-w-[98px] md:max-w-[112px] md:ml-3'>
              <div className='flex items-center gap-1'>
                <span>$</span>
                <input
                  name={`${price}`}
                  placeholder='Costo'
                  className={'bg-white sm:bg-base-300 h-8 md:h-10'}
                  type='number'
                  value={price}
                  onChange={ev => {
                    setPrice(ev.target.value);
                  }}
                  // handleBlur={handleBlur}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CostBlock;
