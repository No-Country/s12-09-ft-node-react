'use client'

import { createContext, useContext, useState } from 'react';

type ModalType = 'registerClient' | 'registerVehicle';

interface ModalContextProps {
  children: JSX.Element;
}

interface ModalContextState {
  openModal: (modalType: ModalType) => void;
  closeModal: (modalType: ModalType) => void;
  isModalOpen: (modalType: ModalType) => boolean;
}

const ModalContext = createContext<ModalContextState | undefined>(undefined);

export const ModalProvider: React.FC<ModalContextProps> = ({ children }) => {
  const [openModals, setOpenModals] = useState<Record<ModalType, boolean>>({
    registerClient: false,
    registerVehicle: false,
  });

  const openModal = (modalType: ModalType) => {
    setOpenModals((prev) => ({ ...prev, [modalType]: true }));
  };

  const closeModal = (modalType: ModalType) => {
    setOpenModals((prev) => ({ ...prev, [modalType]: false }));
  };

  const isModalOpen = (modalType: ModalType) => openModals[modalType];

  const contextValue: ModalContextState = {
    openModal,
    closeModal,
    isModalOpen,
  };

  return <ModalContext.Provider value={contextValue}>{children}</ModalContext.Provider>;
};

export const useModal = () => {
  const context = useContext(ModalContext);
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};