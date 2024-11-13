import { LocaleToggle } from '@/components/layout/locale-toggle';
import { ThemeCustomizer } from '@/components/layout/theme-customizer';
import { Button } from '@/components/ui/button';
import { Link } from '@/components/ui/link';
import { cn } from '@/utils/cn';

export const Navbar = () => {
  return (
    <header className="w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-border">
      <div
        className={cn(
          'bg-background flex justify-between w-full px-4 h-14 shadow-sm',
        )}
      >
        <div className="flex h-[64px] items-center justify-start gap-x-4 px-2"></div>
        <div className="flex items-center justify-end gap-x-4">
          <ThemeCustomizer />
          <LocaleToggle />
          {/* {user ? (
          <UserAccountNav />
        ) : (
          <Button variant="ghost" size="sm">
            <Link href={`/${locale}/login`}>Login</Link>
          </Button>
        )} */}
          <Button variant="ghost" size="sm">
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
