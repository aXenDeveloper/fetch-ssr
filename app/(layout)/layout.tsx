import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default async function LocaleLayout({ children }: Props) {
  return <div>{children}</div>;
}
