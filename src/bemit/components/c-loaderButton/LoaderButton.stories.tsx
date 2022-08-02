import { ComponentMeta, ComponentStory } from '@storybook/react';
import { WrapperThemeComponent } from '@stories/WrapperThemeComponent';

import Notification from '../c-icons/icons/Notification';
import { LoaderButton } from './LoaderButton';


export default {
    title: 'Components/Buttons/LoaderButton',
    component: LoaderButton,
    argTypes: {
        loading: {
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: false }
            },
            description: "Indicates if an asynchronous process is being carried out."
        },
        loadingPosition: {
            table: {
                type: { summary: "start | center | end" },
                defaultValue: { summary: "center" }
            },
            description: "Place where the loader will be positioned."
        },
        loadingIndicator: {
            table: {
                type: { summary: "ReactNode" },
                defaultValue: { summary: "<Loader/>" }
            },
            control: "disable",
            description: "Indicator showing charge."
        },
        variant: {
            table: {
                category: "Inherit from Button",
                type: { summary: "link | ghost | light | default" },
                defaultValue: { summary: "default" }
            },
            control: "select",
            options: ["link", "ghost", "light", "default"],
            description: "LoaderButton variant"
        },
        size: {
            table: {
                category: "Inherit from Button",
                type: { summary: "small | normal | large | xlarge" },
                defaultValue: { summary: "normal" }
            },
            control: 'select',
            options: ["small", "normal", "large", "xlarge"],
            description: "LoaderButton size"
        },
        children: {
            table: {
                category: "Inherit from Button",
                type: { summary: "ReactNode" },
            },
            description: "Children of the LoaderButton component"
        },
        themeColor: {
            table: {
                category: "Inherit from Button",
                type: { summary: "primary | secondary | success | info | warning | danger | title" },
                defaultValue: { summary: "primary" },
            },
            control: 'select',
            options: ["primary", "secondary", "success", "info", "warning", "danger", "title"],
            description: "LoaderButton theme"
        },
        fullWidth: {
            table: {
                category: "Inherit from Button",
                type: { summary: "boolean" },
                defaultValue: { summary: false }
            },
            control: "boolean",
            description: "The LoaderButton occupies 100% of the width of the parent"
        },
        disabled: {
            table: {
                category: "Inherit from Button",
                type: { summary: "boolean" },
                defaultValue: { summary: false }
            },
            control: "boolean",
            description: "The LoaderButton is disabled"
        },
        disableRipple: {
            table: {
                category: "Inherit from Button",
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
                category: "Inherit from Button",
                type: { summary: "boolean" },
                defaultValue: { summary: false }
            },
            control: "boolean",
            description: "Disable LoaderButton shadow on hover"
        },
        startIcon: {
            table: {
                category: "Inherit from Button",
                type: { summary: "ReactNode" },
                defaultValue: { summary: null }
            },
            control: "boolean",
            description: "Show icon before text"
        },
        endIcon: {
            table: {
                category: "Inherit from Button",
                type: { summary: "ReactNode" },
                defaultValue: { summary: null }
            },
            control: 'boolean',
            description: "Show icon after text"
        }
    }
} as ComponentMeta<typeof LoaderButton>;


const Template: ComponentStory<typeof LoaderButton> =
    (args) =>
        <WrapperThemeComponent theme={args.darkmode}>
            <LoaderButton
                {...args}
                startIcon={args.startIcon && <Notification />}
                endIcon={args.endIcon && <Notification />}
            >
            </LoaderButton>
        </WrapperThemeComponent>;

export const Basic = Template.bind({});
Basic.storyName = "LoaderButton";
Basic.args = {
    loading: false,
    loadingPosition: "center",
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