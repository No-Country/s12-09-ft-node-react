'use client';
import { useContext } from 'react';
import { ModalContext } from '../context/ModalProvider';

export function useModal() {
  const { openModal, closeModal } = useContext(ModalContext);
  return { openModal, closeModal };
}
