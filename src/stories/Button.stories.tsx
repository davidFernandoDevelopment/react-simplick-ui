import React from 'react';
import { ComponentStory, ComponentMeta, ComponentStoryFn } from '@storybook/react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStoryFn<typeof Button> = (args) => <Button {...args} />;

const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};

const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
