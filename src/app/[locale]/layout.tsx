import { AppProvider } from '@/components/wrapper/provider';

export const metadata = {
  title: 'Bulletproof React',
  description: 'Showcasing Best Practices For Building React Applications',
};

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = async ({ children }: LayoutProps) => {
  return <AppProvider>{children}</AppProvider>;
};

export default Layout;
