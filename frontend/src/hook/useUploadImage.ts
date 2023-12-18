'use client';
import { type ChangeEvent, useState } from 'react';
import { imageService } from '@/services';

export function useUploadImage(currentImage: string) {
  const [image, setImage] = useState(currentImage ?? '');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleImage = ({ currentTarget }: ChangeEvent<HTMLInputElement>) => {
    const file = currentTarget.files ?? [];
    const data = new FormData();
    data.append('file', file[0]);
    data.append('upload_preset', 'mechanic_alert');

    setLoading(true);

    imageService
      .upload(data)
      .then(response => {
        setImage(response.secure_url);
      })
      .catch(e => {
        setError('Error cargando la imagem');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const resetImage = () => {
    setImage('');
  };

  return { handleImage, image, loading, error, resetImage };
}
