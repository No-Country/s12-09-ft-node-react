import { ModalContext } from '@/context/ModalProvider';
import { useContext } from 'react';

export function useModal() {
  const { openModal, closeModal } = useContext(ModalContext);
  return { openModal, closeModal };
}
