import { HeaderHome } from '@/components';

interface Props {
  children: JSX.Element;
}
export default function HomeLayout({ children }: Props) {
  return (
    <>
      <HeaderHome />
      {children}
    </>
  );
}
