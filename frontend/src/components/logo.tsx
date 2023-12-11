import Image from 'next/image';
import logoBlue from '../../public/logoBlue.svg';
import logoWhite from '../../public/logoWhite.svg';

interface Props {
  width?: number;
  height?: number;
}

export function LogoBlue({ width = 180, height = 295 }: Props) {
  return (
    <div className='flex-1'>
      <div className='btn btn-ghost text-xl hover:bg-inherit'>
        <Image src={logoBlue} alt='logo' width={width} height={height} />
      </div>
    </div>
  );
}

export function LogoWhite({ width = 180, height = 295 }: Props) {
  return (
    <div className='flex-1'>
      <div className='btn btn-ghost text-xl hover:bg-inherit'>
        <Image src={logoWhite} alt='logo' width={width} height={height} />
      </div>
    </div>
  );
}
