import { useContext } from 'react';
import { ModalContext } from '@/context';

export function useModalportal() {
  const { openModal, closeModal } = useContext(ModalContext);
  return { openModal, closeModal };
}
