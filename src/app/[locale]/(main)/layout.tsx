import { ReactNode } from 'react';

import { MainLayout } from '@/components/layout/main-layout';

export const metadata = {
  title: 'Design Your Shirt',
  description: 'Design Your Shirt',
};

const AppLayout = ({ children }: { children: ReactNode }) => {
  return <MainLayout>{children}</MainLayout>;
};

export default AppLayout;
