'use client';

import { Check, Moon, Repeat, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { Label } from '@/components/ui/form';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { baseColors } from '@/config/base-color';
import { useConfigStore } from '@/stores/theme-store';
import { cn } from '@/utils/cn';

export function ThemeCustomizer() {
  return (
    <div className="flex items-center gap-2">
      <Drawer>
        <DrawerTrigger asChild>
          <Button size="sm" className="md:hidden">
            Customize
          </Button>
        </DrawerTrigger>
        <DrawerContent className="p-6 pt-0">
          <Customizer />
        </DrawerContent>
      </Drawer>
      <div className="hidden items-center md:flex">
        <Popover>
          <PopoverTrigger asChild>
            <Button size="sm">Customize</Button>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            className="z-40 w-[340px] rounded-[12px] bg-white p-6 dark:bg-zinc-950"
          >
            <Customizer />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}

function Customizer() {
  const { setTheme: setMode, resolvedTheme: mode } = useTheme();
  const { config, setConfig } = useConfigStore();

  return (
    <div className="flex flex-col space-y-4 md:space-y-6">
      <div className="flex items-start pt-4 md:pt-0">
        <div className="space-y-1 pr-2">
          <div className="font-semibold leading-none tracking-tight">
            Customize
          </div>
          <div className="text-xs text-muted-foreground">
            Pick a style and color for your components.
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto rounded-[0.5rem]"
          onClick={() => {
            setConfig({
              ...config,
              theme: 'zinc',
              radius: 0.5,
            });
          }}
        >
          <Repeat />
          <span className="sr-only">Reset</span>
        </Button>
      </div>
      <div className="flex flex-1 flex-col space-y-4 md:space-y-6">
        <div className="space-y-1.5">
          <Label className="text-xs">Color</Label>
          <div className="grid grid-cols-3 gap-2">
            {baseColors.map((theme) => {
              const isActive = config.theme === theme.name;

              return (
                <Button
                  variant={'outline'}
                  size="sm"
                  key={theme.name}
                  onClick={() => {
                    setConfig({
                      ...config,
                      theme: theme.name,
                    });
                  }}
                  className={cn(
                    'justify-start',
                    isActive && 'border-2 border-primary',
                  )}
                  style={
                    {
                      '--theme-primary': `hsl(${
                        theme?.activeColor[mode === 'dark' ? 'dark' : 'light']
                      })`,
                    } as React.CSSProperties
                  }
                >
                  <span
                    className={cn(
                      'mr-1 flex h-5 w-5 shrink-0 -translate-x-1 items-center justify-center rounded-full bg-[--theme-primary]',
                    )}
                  >
                    {isActive && <Check className="size-4 text-white" />}
                  </span>
                  {theme.label}
                </Button>
              );
            })}
          </div>
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs">Radius</Label>
          <div className="grid grid-cols-5 gap-2">
            {['0', '0.3', '0.5', '0.75', '1.0'].map((value) => {
              return (
                <Button
                  variant={'outline'}
                  size="sm"
                  key={value}
                  onClick={() => {
                    setConfig({
                      ...config,
                      radius: parseFloat(value),
                    });
                  }}
                  className={cn(
                    config.radius === parseFloat(value) &&
                      'border-2 border-primary',
                  )}
                >
                  {value}
                </Button>
              );
            })}
          </div>
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs">Mode</Label>
          <div className="grid grid-cols-3 gap-2">
            <>
              <Button
                variant={'outline'}
                size="sm"
                onClick={() => setMode('light')}
                className={cn(mode === 'light' && 'border-2 border-primary')}
              >
                <Sun className="mr-1 -translate-x-1" />
                Light
              </Button>
              <Button
                variant={'outline'}
                size="sm"
                onClick={() => setMode('dark')}
                className={cn(mode === 'dark' && 'border-2 border-primary')}
              >
                <Moon className="mr-1 -translate-x-1" />
                Dark
              </Button>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}
