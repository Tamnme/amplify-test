import { Meta, StoryObj } from '@storybook/react';

import { useDialog } from '@/hooks/use-dialog';

import { Popover, PopoverContent, PopoverTrigger } from './popover';

const meta: Meta<typeof Popover> = {
  component: Popover,
};

export default meta;

type Story = StoryObj<typeof Popover>;

const DemoPopover = () => {
  const { close, open, isOpen } = useDialog();

  return (
    <Popover
      open={isOpen}
      onOpenChange={(isOpen) => {
        if (!isOpen) {
          close();
        } else {
          open();
        }
      }}
    >
      <PopoverTrigger>Open</PopoverTrigger>
      <PopoverContent>Place content for the popover here.</PopoverContent>
    </Popover>
  );
};

export const Default: Story = {
  render: () => <DemoPopover />,
};
