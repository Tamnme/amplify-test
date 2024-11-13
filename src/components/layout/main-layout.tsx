'use client';

import { usePathname } from 'next/navigation';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { Navbar } from '@/components/layout/navbar';
import { Spinner } from '@/components/ui/spinner';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <Suspense
      fallback={
        <div className="flex size-full items-center justify-center">
          <Spinner size="xl" />
        </div>
      }
    >
      <ErrorBoundary key={pathname} fallback={<div>Something went wrong!</div>}>
        <Navbar />
        <div className="flex h-[calc(100%-56px)] overflow-y-auto bg-background">
          {children}
        </div>
      </ErrorBoundary>
    </Suspense>
  );
};
