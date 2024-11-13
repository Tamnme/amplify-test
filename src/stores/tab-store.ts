import { create } from 'zustand';

import { Tab, tabs } from '@/config/customize-tab';

type TabStore = {
  tabCurrentValue: Tab;
  setTabValue: (tab: Tab) => void;
  nextTab: () => void;
  previousTab: () => void;
  isLastTab: () => boolean;
};

export const useTabs = create<TabStore>((set, get) => ({
  tabCurrentValue: 'fabric',

  setTabValue: (tab) =>
    set({
      tabCurrentValue: tab,
    }),

  nextTab: () => {
    const currentIndex = tabs.indexOf(get().tabCurrentValue);
    const nextIndex = currentIndex + 1;
    if (nextIndex < tabs.length) {
      set({
        tabCurrentValue: tabs[nextIndex],
      });
    }
  },

  previousTab: () => {
    const currentIndex = tabs.indexOf(get().tabCurrentValue);
    const prevIndex = currentIndex - 1;
    if (prevIndex >= 0) {
      set({
        tabCurrentValue: tabs[prevIndex],
      });
    }
  },

  isLastTab: () => {
    return get().tabCurrentValue === tabs[tabs.length - 1];
  },
}));
