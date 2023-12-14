import { HeaderWorkshop } from '@/components';

interface Props {
  children: JSX.Element;
}
export default function WorkshopLayout({ children }: Props) {
  return (
    <>
      <HeaderWorkshop />
      {children}
    </>
  );
}
