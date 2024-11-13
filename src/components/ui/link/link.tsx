import { LinkProps as NextLinkProps } from 'next/link';

import { locales } from '@/i18n/request';
import { I18nLink } from '@/i18n/routing';
import { cn } from '@/utils/cn';

export type LinkProps = {
  className?: string;
  children: React.ReactNode;
  target?: string;
  locale?: (typeof locales)[number];
} & NextLinkProps;

export const Link = ({ className, children, href, ...props }: LinkProps) => {
  return (
    <I18nLink
      href={href}
      className={cn('text-foreground text-sm', className)}
      {...props}
    >
      {children}
    </I18nLink>
  );
};
