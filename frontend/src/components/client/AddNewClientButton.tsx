'use client';
import { Button } from '@/components';
import { useModal } from '@/modal/';
import { PlusIcon } from '@/assets/svg';
import { ClientTabsRegister } from '.';

export function AddNewClientButton() {
  const { openModal } = useModal();
  return (
    <div className='fixed z-index-10 bottom-[2rem] right-0 left-0 flex justify-center'>
      <Button
        onClick={() => {
          openModal(<ClientTabsRegister />);
        }}
        className='rounded-[50%]'
      >
        <PlusIcon />
      </Button>
    </div>
  );
}
