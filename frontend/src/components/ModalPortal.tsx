'use client';

import { createPortal } from 'react-dom';

interface Props {
  title: string;
  children: JSX.Element;
  show: boolean;
  handleClose: () => void;
  className: string;
}

export function ModalPortal({
  title,
  children,
  show,
  handleClose,
  className,
}: Props) {
  return createPortal(
    <div
      className={`modal-portal-component ${show ? 'show' : ''} ${className}`}
    >
      <section>
        <h3>{title}</h3>
        <button
          className='modal-portal-component-close btn btn-sm btn-circle btn-ghost'
          onClick={handleClose}
        >
          ✕
        </button>
        <div className='modal-portal-component-body'>{children}</div>
      </section>
    </div>,
    document.body
  );
}
