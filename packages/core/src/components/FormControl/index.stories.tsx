import { Meta, StoryObj } from '@storybook/react';
import { FormControl } from '@components/FormControl';

const meta: Meta = {
  title: 'Forms/FormControl',
  component: FormControl,
};

export default meta;

type Story = StoryObj<typeof FormControl>;

export const Overview: Story = {
  args: { children: 'Form Control', error: false, disabled: false },
};
