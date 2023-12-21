import { redirect } from 'next/navigation';

export function Redirect({ to }: { to: string }) {
  redirect(to);
}
