'use client';

import { ReactNode, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { Link } from '@/components/ui/link';
import { Spinner } from '@/components/ui/spinner';
import { usePathname } from '@/i18n/routing';

type LayoutProps = {
  children: ReactNode;
};

export const AuthLayout = ({ children }: LayoutProps) => {
  const pathname = usePathname();
  const isLoginPage = pathname === '/auth/login';
  const title = isLoginPage
    ? 'Log in to your account'
    : 'Register your account';

  return (
    <Suspense
      fallback={
        <div className="flex size-full items-center justify-center">
          <Spinner size="xl" />
        </div>
      }
    >
      <ErrorBoundary key={pathname} fallback={<div>Something went wrong!</div>}>
        <div className="flex min-h-screen flex-col justify-center bg-background py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <div className="flex justify-center">
              <Link className="flex items-center text-background" href="/">
                <img className="h-24 w-auto" src="/logo.svg" alt="Workflow" />
              </Link>
            </div>

            <h2 className="mt-3 text-center text-3xl font-extrabold text-muted-foreground">
              {title}
            </h2>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-background px-4 py-8 shadow sm:rounded-lg sm:px-10">
              {children}
            </div>
          </div>
        </div>
      </ErrorBoundary>
    </Suspense>
  );
};
