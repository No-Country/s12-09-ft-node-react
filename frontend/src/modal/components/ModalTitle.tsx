export function ModalTitle({ children }: { children: string }) {
  return (
    <div className='px-4 pt-4'>
      <h3 className='flex-1 p-2 gap-2 border-b-2 font-bold text-secondary text-center border-secondary'>
        {children}
      </h3>
    </div>
  );
}
