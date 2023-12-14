'use client';

import { Input } from '@/components';
import { useState } from 'react';

interface props {
  title: string;
  data: any;
  setData: any,
  handleBlur: any;
  handleChange?: any;
  values: any;
}

interface itemMap {
  title: string;
  icon: null;
  description: string,
  price: number
}

const CostBlock = ({ title, data,setData,handleBlur }: props) => {
  // data aca es el array de items de repair / maintance 
  console.log(data);

  const updateDescriptionAndPrice = (ev, index) => {
    const { name, value } = ev.target
    const option = data[index]
    console.log(name, value, option);
    
    setData(data.map((item: itemMap, i: number) => {
      if (i === index) {
        return {
          ...item,
          [name]: value
        };
      }
      return item;
    }));
  }

  return (
    <div className='flex flex-col pb-2 w-full'>
      <h3 className='text-secondary font-semibold text-lg sm:text-xl sm:font-semibold'>
        {title}
      </h3>

      {data?.map((item: itemMap, index: number) => {
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
                name='description'
                value={item.description}
                onChange={ev => {
                  updateDescriptionAndPrice(ev, index)
                }}
                // handleBlur={handleBlur}
              />
            </div>

            <div className='flex items-end max-w-[98px] md:max-w-[112px] md:ml-3'>
              <div className='flex items-center gap-1'>
                <span>$</span>
                <input
                  placeholder='Costo'
                  className={'bg-white sm:bg-base-300 h-8 md:h-10'}
                  type='number'
                  name='price'
                  value={item.price}
                  onChange={ev => {
                    updateDescriptionAndPrice(ev, index)
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
