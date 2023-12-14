'use client';
import { Preload } from './Preload';

interface Props {
  name: string;
  className?: string;
  loading?: boolean;
  image?: string;
}
export function Avatar({ name, loading = false, image = '' }: Props) {
  return (
    <div className='avatar placeholder flex items-center gap-2 pb-2 mb-2  border-b-[1px] border-b-accent'>
      <div className='bg-neutral text-neutral-content rounded-full w-10'>
        {loading ? <Preload /> : <span>LA</span>}
      </div>
      <span className='font-bold'>Luis angel</span>
    </div>
  );
}
