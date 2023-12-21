'use client';

import { Button } from '.';

interface Props {
  path: string;
}

const handleCotiseichon = (path: string) => {
  console.log(`Se tiene que direccionar a ${path}`);
  // router.push(path);
};

export function RedirectButton({ path }: Props) {
  return (
    <Button
      onClick={() => {
        handleCotiseichon(path);
      }}
    >
      Ver cotizacion
    </Button>
  );
}
