import React from 'react';

interface props {
  title: string;
}

const RepairOption = ({ title }: props) => {
  return (
    <div style={{ position: 'relative' }}>
      <input
        type='radio'
        style={{ position: 'absolute', top: 0, right: 0, zIndex: 1 }}
      />

      <div className='w-[72.90px] h-[72.90px] bg-gray-100 rounded-full flex justify-center items-center'>
        {/* <Image
                  src={icon}
                  alt='icono'
                  className='w-[41px] h-[41px]'
                /> */}
      </div>

      <p className="text-center text-neutral-400 text-xs font-normal font-['Roboto'] leading-normal max-w-2 overflow-hidden">
        {title}
      </p>
    </div>
  );
};

export default RepairOption;
