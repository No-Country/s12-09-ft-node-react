import { MainLogo } from '@/assets/svg';

interface Props {
  className?: string;
  isWhite?: boolean;
}

export function Logo({ className, isWhite = false }: Props) {

  return (
    <>
      <MainLogo
        className={`
        w-[200px] h-[50px] mr-4 
        ${isWhite ? '[&>path]:fill-white' : '[&>path]:fill-primary'}
        ${className}
        `}
      />
    </>
  );
}
