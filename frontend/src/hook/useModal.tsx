import { useContext } from 'react';
import { ModalContext } from '@/context';

export function useModalPortal() {
  const { openModal, closeModal } = useContext(ModalContext);
  return { openModal, closeModal };
}
