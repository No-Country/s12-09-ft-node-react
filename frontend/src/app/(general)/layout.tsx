import { HeaderHome } from '@/components/layout';

interface Props {
  children: JSX.Element;
}
export default function WorkshopLayout({ children }: Props) {
  return (
    <>
      <HeaderHome />
      <div className='max-w-xl w-full mx-auto'>{children}</div>
    </>
  );
}
