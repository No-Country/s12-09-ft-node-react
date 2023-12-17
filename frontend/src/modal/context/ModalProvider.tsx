'use client';

import { createContext, useMemo, useState } from 'react';
import { Modal } from '../components/';

interface Props {
  children: JSX.Element;
}
interface InitialModalState {
  open: boolean;
  element: JSX.Element;
  title: string;
  className: string;
}
const initialState: InitialModalState = {
  open: false,
  element: <></>,
  title: '',
  className: '',
};
interface Options {
  title?: string;
  className?: string;
}
interface ModalContextValue {
  openModal: (element: JSX.Element, options?: Options) => void;
  closeModal: () => void;
}

export const ModalContext = createContext({} as ModalContextValue);

export function ModalProvider({ children }: Props) {
  const [modal, setModal] = useState<InitialModalState>(initialState);

  const openModal = (element: JSX.Element, options: Options = {}) => {
    setModal({
      open: true,
      element,
      title: options?.title ?? '',
      className: options?.className ?? '',
    });
  };

  const closeModal = () => {
    setModal({ ...initialState });
  };

  const valueMemo = useMemo(
    () => ({
      openModal,
      closeModal,
    }),
    []
  );

  return (
    <ModalContext.Provider value={valueMemo}>
      {children}
      <Modal
        show={modal.open}
        title={modal.title}
        handleClose={closeModal}
        className={modal.className}
      >
        {modal.element}
      </Modal>
    </ModalContext.Provider>
  );
}
