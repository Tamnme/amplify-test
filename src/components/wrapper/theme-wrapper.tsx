'use client';

import { useConfigStore } from '@/stores/theme-store';
import { cn } from '@/utils/cn';

type ThemeWrapperProps = {
  children: React.ReactNode;
};

export const ThemeWrapper = ({ children }: ThemeWrapperProps) => {
  const {
    config: { theme = 'zinc', radius = 0.5 },
  } = useConfigStore();

  return (
    <div
      className={cn(`theme-${theme}`, 'w-full h-full')}
      style={
        {
          '--radius': `${radius || 0.5}rem`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
};
