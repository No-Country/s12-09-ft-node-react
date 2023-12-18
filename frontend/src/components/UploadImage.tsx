import { ImageIcon } from '@/assets/svg';
import { Preload } from '.';
import Image from 'next/image';
import { type ChangeEvent } from 'react';

interface Props {
  image: string;
  loading: boolean;
  handle: (e: ChangeEvent<HTMLInputElement>) => void;
}
export function UploadImage({ image, loading, handle }: Props) {
  return (
    <>
      <label
        className='bg-base-300 w-full h-[12rem] overflow-hidden flex items-center justify-center'
        htmlFor='image'
      >
        {!image && !loading && (
          <ImageIcon className='w-[2rem] h-[2rem] opacity-25' />
        )}
        {loading ? (
          <Preload />
        ) : (
          !!image && (
            <div className='[&>img]:object-cover [&>img]:w-full [&>img]:h-full'>
              <Image src={image} width={200} height={200} alt='new image' />
            </div>
          )
        )}
      </label>
      <input
        id='image'
        name='image'
        type='file'
        onChange={handle}
        className='file-input file-input-bordered w-full my-2'
      />
    </>
  );
}
