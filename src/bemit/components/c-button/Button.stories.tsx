import { ComponentMeta, ComponentStory } from '@storybook/react';
import { WrapperThemeComponent } from '@stories/WrapperThemeComponent';

import '../../main.css';
import Notification from '../c-icons/icons/Notification';
import { Button } from './Button';


export default {
    title: 'Components/Button/Button',
    component: Button,
    argTypes: {
        variant: {
            table: {
                type: { summary: "link | ghost | light | default" },
                defaultValue: { summary: "default" }
            },
            control: "select",
            options: ["link", "ghost", "light", "default"],
            description: "Button variant"
        },
        size: {
            table: {
                type: { summary: "small | normal | large | xlarge" },
                defaultValue: { summary: "normal" }
            },
            control: 'select',
            options: ["small", "normal", "large", "xlarge"],
            description: "Button size"
        },
        children: {
            table: {
                type: { summary: "ReactNode" },
            },
            description: "Children of the button component"
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
        fullWidth: {
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: false }
            },
            control: "boolean",
            description: "The button occupies 100% of the width of the parent"
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
        centerRipple: {
            table: {
                category: "Inherit from TouchRipple",
                type: { summary: "boolean" },
                defaultValue: { summary: false }
            },
            control: "boolean",
            description: "The ripple of the TouchRipple component will appear centered"
        },
        disableElevation: {
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: false }
            },
            control: "boolean",
            description: "Disable button shadow on hover"
        },
        startIcon: {
            table: {
                type: { summary: "ReactNode" },
                defaultValue: { summary: null }
            },
            control: "boolean",
            description: "Show icon before text"
        },
        endIcon: {
            table: {
                type: { summary: "ReactNode" },
                defaultValue: { summary: null }
            },
            control: 'boolean',
            description: "Show icon after text"
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
} as ComponentMeta<typeof Button>;


const Template: ComponentStory<typeof Button> =
    (args) =>
        <WrapperThemeComponent theme={args.darkmode}>
            <Button
                {...args}
                startIcon={args.startIcon && <Notification />}
                endIcon={args.endIcon && <Notification />}
            >
            </Button>
        </WrapperThemeComponent>;

export const Basic = Template.bind({});
Basic.args = {
    size: 'normal',
    variant: 'default',
    children: 'default text',
    themeColor: 'primary',
    startIcon: false,
    endIcon: false,
    fullWidth: false,
    disableElevation: false,
    disabled: false,
    disableRipple: false,
    centerRipple: false
};