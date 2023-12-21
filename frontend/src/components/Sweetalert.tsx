'use client';
import { useEffect } from 'react';
import swal from 'sweetalert';

interface Props {
  title: string;
  text?: string;
  type?: 'success' | 'error' | 'info';
  callback?: () => void;
}

export function Sweetalert({
  title,
  text = '',
  type = 'info',
  callback,
}: Props) {
  useEffect(() => {
    swal(title, text, type).then(callback);
  }, []);
  return <></>;
}
