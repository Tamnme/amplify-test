'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider } from 'next-themes';
import { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { MainErrorFallback } from '@/components/error/main';
import { Notifications } from '@/components/ui/notifications';
import { ThemeWrapper } from '@/components/wrapper/theme-wrapper';
import { queryConfig } from '@/lib/react-query';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: queryConfig,
      }),
  );

  return (
    <ThemeProvider themes={['light', 'dark']} attribute="class">
      <ErrorBoundary FallbackComponent={MainErrorFallback}>
        <QueryClientProvider client={queryClient}>
          {process.env.DEV && <ReactQueryDevtools />}
          <Notifications />
          <ThemeWrapper>{children}</ThemeWrapper>
        </QueryClientProvider>
      </ErrorBoundary>
    </ThemeProvider>
  );
};
