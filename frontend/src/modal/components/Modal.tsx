'use client';

import { ModalTitle } from './ModalTitle';

interface Props {
  title: string;
  children: JSX.Element;
  show: boolean;
  handleClose: () => void;
  className: string;
}

export function Modal({
  title,
  children,
  show,
  handleClose,
  className,
}: Props) {
  return (
    <div
      className={`
      fixed inset-0 m-auto 
      flex items-end justify-center 
      z-10
      ${!show && 'hidden'}
      ${className}
      md:items-center 
      `}
    >
      <section className='max-w-[400px] w-full bg-[white] shadow-xl flex-1 rounded-t-[1rem] absolute z-50 md:rounded-[1rem]'>
        {title && <ModalTitle>{title}</ModalTitle>}
        <button
          className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'
          onClick={handleClose}
        >
          ✕
        </button>
        <div className='p-4'>{children}</div>
      </section>
      <span
        className='backdrop-blur-sm w-full h-full bg-accent/50 cursor-pointer'
        onClick={handleClose}
      ></span>
    </div>
  );
}
