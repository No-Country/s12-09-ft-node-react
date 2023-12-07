'use client';

import { createPortal } from 'react-dom';
import { useEffect } from 'react';

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
  const portalNode = document.createElement('div');

  useEffect(() => {
    document.body.appendChild(portalNode);
    return () => {
      portalNode.remove();
    };
  }, [portalNode]);

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
    portalNode
  );
}
