import { ComponentMeta, ComponentStory } from '@storybook/react';

import '../../main.css';
import { ButtonBase } from './ButtonBase';


export default {
    title: 'Components/Button/ButtonBase',
    component: ButtonBase,
    argTypes: {
        as: { table: { disable: true } },
        sx: { table: { disable: true } },
        ref: { table: { disable: true } },
        style: { table: { disable: true } },
        className: { table: { disable: true } },
    }
} as ComponentMeta<typeof ButtonBase>;

const Template: ComponentStory<typeof ButtonBase> = (args) => <ButtonBase {...args}>Button base</ButtonBase>;

export const Basic = Template.bind({});
Basic.args = {
};