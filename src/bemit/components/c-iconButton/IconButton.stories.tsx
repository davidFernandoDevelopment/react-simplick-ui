import { ComponentMeta, ComponentStory } from '@storybook/react';

import '../../main.css';
import { IconButton } from './IconButton';
import Notification from '../c-icons/icons/Notification';
import { WrapperThemeComponent } from '@stories/WrapperThemeComponent';



export default {
    title: 'Components/Buttons/IconButton',
    component: IconButton,
    argTypes: {
        variant: {
            table: {
                type: { summary: "circle | square" },
                defaultValue: { summary: "circle" }
            },
            control: "select",
            options: ["circle", "square"],
            description: "IconButton variant"
        },
        size: {
            table: {
                type: { summary: "small | normal | large | xlarge" },
                defaultValue: { summary: "normal" }
            },
            control: "select",
            options: ["small", "normal", "large", "xlarge"],
            description: "IconButton size"
        },
        themeColor: {
            table: {
                type: { summary: "primary | secondary | success | info | warning | danger | title" },
                defaultValue: { summary: "primary" },
            },
            control: 'select',
            options: ["primary", "secondary", "success", "info", "warning", "danger", "title"],
            description: "Button theme"
        },
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
        edge: {
            table: {
                type: { summary: "start | end | none" },
                defaultValue: { summary: "none" }
            },
            control: "radio",
            options: ["start", "end", "none"],
            description: "Align correctly when using the iconButton in a list"
        },
        darkmode: {
            table: {
                category: "Try in dark mode",
                type: { summary: "ligth | dark" },
                defaultValue: { summary: "light" }
            },
            control: 'radio',
            options: ["dark", "light"],
            description: "Component test in dark mode"
        },
        as: { table: { disable: true } },
        sx: { table: { disable: true } },
        ref: { table: { disable: true } },
        style: { table: { disable: true } },
        className: { table: { disable: true } },
    }
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
    <WrapperThemeComponent theme={args.darkmode}>
        <IconButton {...args}>
            <Notification />
        </IconButton>
    </WrapperThemeComponent>
);

export const Basic = Template.bind({});
Basic.storyName = "IconButton";
Basic.args = {
    size: 'normal',
    variant: 'circle',
    themeColor: 'primary',
    edge: "none",
    disabled: false,
    disableRipple: false
};