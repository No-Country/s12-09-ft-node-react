'use client';
import { CloseEyeIcon, OpenEyeIcon } from '@/assets/svg';
import { useState, type ChangeEventHandler } from 'react';

interface Props {
  name?: string;
  placeholder?: string;
  type?: string;
  className?: string;
  handleChange?: ChangeEventHandler;
  handleBlur?: ChangeEventHandler;
  value?: string | number;
  error?: boolean;
  errorMessage?: string;
}

export const Input = (props: Props) => {
  const [passwordType, setPasswordType] = useState<string>('password');
  const {
    name,
    placeholder,
    type,
    className,
    value,
    error = false,
    errorMessage = '',
    handleChange,
    handleBlur,
  } = props;

  return (
    <div className='relative'>
      <div className='flex items-center justify-end'>
        <input
          className={`
            input input-bordered w-full rounded-[15px] bg-base-300 border-base-300 outline-none        
            ${error ? 'border-error border-2' : ''}
            ${className}`}
          onChange={handleChange}
          onBlur={handleBlur}
          value={value}
          placeholder={placeholder}
          name={name}
          type={type === 'password' ? passwordType : type}
          min={1000}
          max={99999999}
        />

        {type === 'password' && (
          <>
            <label className='swap absolute mr-3 flex items-center right-3'>
              <input type='checkbox' />
              <OpenEyeIcon
                className='swap-off fill-current absolute'
                onClick={() => {
                  setPasswordType('password');
                }}
              />

              <CloseEyeIcon
                className='swap-on fill-current absolute'
                onClick={() => {
                  setPasswordType('text');
                }}
              />
            </label>
          </>
        )}
      </div>
      <p className='text-xs text-error mt-[-10px] pt-3 pb-2 h-8 p-4'>
        {error && errorMessage}
      </p>
    </div>
  );
};
