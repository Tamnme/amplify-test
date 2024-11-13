'use client';

import { Languages } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { buttonVariants } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown';
import { ActionTooltip } from '@/components/ui/tooltip';
import { usePathname, useRouter } from '@/i18n/routing';
import { cn } from '@/utils/cn';

export const LocaleToggle = () => {
  const translation = useTranslations('locale');
  const pathName = usePathname();
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger disabled>
        <ActionTooltip label="Language">
          <span
            className={cn(
              'cursor-pointer',
              buttonVariants({ variant: 'ghost', size: 'icon' }),
            )}
          >
            <Languages className="size-4" />
          </span>
        </ActionTooltip>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => router.push(pathName, { locale: 'us' })}
        >
          {translation('us')}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => router.push(pathName, { locale: 'vn' })}
        >
          {translation('vn')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
