import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { BaseColor } from '@/config/base-color';

type Config = {
  theme: BaseColor['name'];
  radius: number;
};

interface ConfigStore {
  config: Config;
  setConfig: (newConfig: Partial<Config>) => void;
}

export const useConfigStore = create<ConfigStore>()(
  persist(
    (set) => ({
      config: {
        theme: 'zinc',
        radius: 0.5,
      },
      setConfig: (newConfig) =>
        set((state) => ({
          config: { ...state.config, ...newConfig },
        })),
    }),
    {
      name: 'config',
    },
  ),
);

export function useConfig() {
  const config = useConfigStore((state) => state.config);
  const setConfig = useConfigStore((state) => state.setConfig);
  return [config, setConfig] as const;
}
