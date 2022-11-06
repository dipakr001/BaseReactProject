import { Button } from '@mui/material';
import React from 'react';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: { backgroundColor: { control: 'color' } },
};

function Template(args) {
  return <Button {...args}>Button</Button>;
}

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  variant: 'primary',
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = { label: 'Button' };

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
