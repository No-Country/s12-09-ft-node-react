'use client';
import { useRef, useId, type ChangeEventHandler } from 'react';
import { CloseEyeIcon, OpenEyeIcon } from '@/assets/svg';

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
  togglePassword?: boolean;
  datalist?: Array<string | number | undefined>;
}

export const Input = (props: Props) => {
  const inputRef = useRef<HTMLInputElement>(null!);
  const inputId = useId();
  const {
    name,
    placeholder,
    type = 'text',
    className,
    value,
    error = false,
    errorMessage = '',
    handleChange,
    handleBlur,
    togglePassword,
    datalist = [],
    ...otherProps
  } = props;

  const setTypePass = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const showPassword = target.checked;
    inputRef.current.type = showPassword ? 'text' : 'password';
  };

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
          type={type}
          ref={inputRef}
          list={inputId}
          {...otherProps}
        />

        {togglePassword && (
          <>
            <label className='swap  absolute mr-3 flex items-center right-3'>
              <input type='checkbox' onChange={setTypePass} />
              <OpenEyeIcon className='swap-on fill-current absolute' />
              <CloseEyeIcon className='swap-off fill-current absolute' />
            </label>
          </>
        )}
      </div>

      {datalist?.length && (
        <datalist id={inputId}>
          {datalist.map((item, index) => (
            <option key={inputId + index}>{item}</option>
          ))}
        </datalist>
      )}

      <p className='text-xs text-error mt-[-10px] pt-3 pb-2 h-8 p-4'>
        {error && errorMessage}
      </p>
    </div>
  );
};
