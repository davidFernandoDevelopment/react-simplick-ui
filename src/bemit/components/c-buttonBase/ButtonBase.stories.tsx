import { ComponentMeta, ComponentStory } from '@storybook/react';

import '../../main.css';
import { ButtonBase } from './ButtonBase';


export default {
    title: 'Components/Button/ButtonBase',
    component: ButtonBase,
    argTypes: {
        disabled: {
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: false }
            },
            control: "boolean",
            description: "The button is disabled"
        },
        disableRipple: {
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: false }
            },
            control: "boolean",
            description: "The Ripple TouchRipple component is hidden"
        },
        centerRipple: {
            table: {
                category: "Inherit from TouchRipple",
                type: { summary: "boolean" },
                defaultValue: { summary: false }
            },
            control: "boolean",
            description: "The ripple of the TouchRipple component will appear centered"
        },
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
    disabled: false,
    disableRipple: false,
    centerRipple: false
};