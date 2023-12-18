import { ErrorIcon, InfoIcon, SuccessIcon, WarningIcon } from '@/assets/svg';

interface Props {
  message: string;
  type?: 'notice' | 'error' | 'success' | 'warning';
}

export function Alert({ message, type = 'notice' }: Props) {
  return (
    <div
      role='alert'
      className={`alert mb-4 
      ${type === 'notice' ? 'alert-info' : ''}
      ${type === 'error' ? 'alert-error' : ''}
      ${type === 'success' ? 'alert-success' : ''}
      ${type === 'warning' ? 'alert-warning' : ''}
    `}
    >
      <span className='[&>svg]:fill-current [&>svg>path]:fill-current [&>svg]:shrink-0 [&>svg]:h-6 [&>svg]:w-6'>
        {type === 'notice' && <InfoIcon />}
        {type === 'error' && <ErrorIcon />}
        {type === 'success' && <SuccessIcon />}
        {type === 'warning' && <WarningIcon />}
      </span>
      <span>{message}</span>
    </div>
  );
}
