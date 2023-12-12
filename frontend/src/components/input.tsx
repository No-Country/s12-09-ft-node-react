'use client';

import { CloseEyeIcon, OpenEyeIcon } from '@/assets/icons';
import Image from 'next/image';
import { useState, type ChangeEventHandler } from 'react';

interface InputProps {
  name?: string;
  placeholder?: string;
  type?: string;
  className?: string;
  handleChange?: ChangeEventHandler;
  handleBlur?: ChangeEventHandler;
  value?: string | number;
}

export const Input = ({
  name,
  placeholder,
  type,
  className,
  handleChange,
  handleBlur,
  value,
}: InputProps) => {
  const [passwordType, setPasswordType] = useState<string>('password');

  return (
    <div className='flex flex-row items-center justify-end'>
      {/* <label htmlFor={label}>{label}</label> */}
      <input
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        className={`input input-bordered w-full rounded-[15px] bg-base-300 border-base-300 ${className}`}
        placeholder={placeholder}
        name={name}
        type={type === 'password' || type === 'pass' ? passwordType : type}
        min={1000}
        max={99999999}
      />
      {/* {(errors.email && touched.email) && <p className='text-error text-xs mt-[-7px]'>{errors.email}</p> } */}
      {(type === 'password' || type === 'pass') && (
        <>
          <label className='swap absolute mr-3'>
            <input type='checkbox' />
            <Image
              onClick={() => {
                setPasswordType('password');
              }}
              className='swap-off fill-current'
              src={OpenEyeIcon}
              alt='icon'
              width={20}
              height={20}
            />
            <Image
              onClick={() => {
                setPasswordType('text');
              }}
              className='swap-on fill-current'
              src={CloseEyeIcon}
              alt='icon'
              width={18}
              height={18}
            />
          </label>
        </>
      )}
    </div>
  );
};
