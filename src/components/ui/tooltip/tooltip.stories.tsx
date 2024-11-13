import { Meta, StoryObj } from '@storybook/react';

import { ActionTooltip } from './tooltip';

const meta: Meta<typeof ActionTooltip> = {
  component: ActionTooltip,
};

export default meta;
type Story = StoryObj<typeof ActionTooltip>;

export const Default: Story = {
  args: {
    children: 'ActionTooltip',
  },
};
