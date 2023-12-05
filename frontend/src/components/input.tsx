import type { ChangeEventHandler } from 'react';

interface InputProps {
  name?: string;
  placeholder?: string;
  type?: string;
  className?: string;
  handleChange?: ChangeEventHandler;
  handleBlur?: ChangeEventHandler;
  value?: string;
}

export const input = ({
  name,
  placeholder,
  type,
  className,
  handleChange,
  handleBlur,
  value,
}: InputProps) => {
  return (
    <div>
      {/* <label htmlFor={label}>{label}</label> */}
      <input
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        className={`input input-bordered w-full rounded-[15px] bg-base-300 border-base-300 ${className}`}
        placeholder={placeholder}
        name={name}
        type={type}
      />
      {/* {(errors.email && touched.email) && <p className='text-error text-xs mt-[-7px]'>{errors.email}</p> } */}
    </div>
  );
};
