import * as React from 'react';

export const useDialog = (initial = false) => {
  const [isOpen, setIsOpen] = React.useState(initial);

  const open = React.useCallback(() => setIsOpen(true), []);
  const close = React.useCallback(() => setIsOpen(false), []);
  const toggle = React.useCallback(() => setIsOpen((state) => !state), []);

  return { isOpen, open, close, toggle };
};
