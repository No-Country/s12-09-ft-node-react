'use client'

import { createContext, useContext, useState } from 'react';

type ModalType = 'registerClient' | 'registerVehicle';

interface ModalContextProps {
  children: JSX.Element;
}

interface ModalContextState {
  openModal: (modalType: ModalType, data?: any) => void;
  closeModal: (modalType: ModalType) => void;
  isModalOpen: (modalType: ModalType) => boolean;
  getSharedData: () => any
}

const ModalContext = createContext<ModalContextState | undefined>(undefined);

export const ModalProvider: React.FC<ModalContextProps> = ({ children }) => {
  const [openModals, setOpenModals] = useState<Record<ModalType, boolean>>({
    registerClient: false,
    registerVehicle: false,
  });
  const [sharedData, setSharedData] = useState<{ userId?: string } | undefined>(undefined);

  const openModal = (modalType: ModalType, data?: any) => {
    setSharedData(data);
    setOpenModals((prev) => ({ ...prev, [modalType]: true }));
  };

  const closeModal = (modalType: ModalType) => {
    setOpenModals((prev) => ({ ...prev, [modalType]: false }));
  };

  const isModalOpen = (modalType: ModalType) => openModals[modalType];

  const getSharedData = () => sharedData;

  const contextValue: ModalContextState = {
    openModal,
    closeModal,
    isModalOpen,
    getSharedData
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