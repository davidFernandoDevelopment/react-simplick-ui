import { MouseEvent, useState } from 'react';
import { WrapperThemeComponent } from '@stories/WrapperThemeComponent';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button from '../c-button/Button';
import Popover from './Popover';
import Text from '../c-text/Text';

export default {
    title: "Components/Popover",
    component: Popover,
    argTypes: {
        p: {
            table: {
                type: { summary: "string" },
            },
            description: "Name of the element that the modal will use.",
        },
        arrow: {
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: true }
            },
            description: "Arrow of the Component"
        },
        open: {
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: false }
            },
            control: "disable",
            description: "Open the Modal"
        },
        disablePortal: {
            table: {
                category: "Inherit from Modal",
                type: { summary: "boolean" },
                defaultValue: { summary: false }
            },
            control: "boolean",
            description: "Disable Portal"
        },
        container: {
            table: {
                category: "Inherit from Modal",
                type: { summary: "ReactElement" },
                defaultValue: { summary: "document.body" }
            },
            control: "disable",
            if: {
                arg: "disablePortal",
                eq: false
            },
            description: "Container where the component will be rendered."
        },
        hideBackdrop: {
            table: {
                category: "Inherit from Modal",
                type: { summary: "boolean" },
                defaultValue: { summary: false }
            },
            control: "boolean",
            description: "Invisible The BackDrop"
        },
        staticBackdrop: {
            table: {
                category: "Inherit from Modal",
                type: { summary: "boolean" },
                defaultValue: { summary: false }
            },
            control: "disable",
            description: "Disable the option to close the modal when the BackDrop is clicked."
        },
        disableScrollLock: {
            table: {
                category: "Inherit from Modal",
                type: { summary: "boolean" },
                defaultValue: { summary: false }
            },
            control: "disable",
            description: "Disable scroll lock."
        },
        disableAnimationContent: {
            table: {
                category: "Inherit from Modal",
                type: { summary: "boolean" },
                defaultValue: { summary: false }
            },
            control: "disable",
            description: "Disable default animation."
        },
        keepMounted: {
            table: {
                category: "Inherit from Modal",
                type: { summary: "boolean" },
                defaultValue: { summary: true }
            },
            control: "disable",
            description: "Keeps the modal component mounted on the dom when it closes."
        }
    }
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => {
    const [anchor, setAnchor] = useState<HTMLButtonElement | null>(null);
    const [open, setOpen] = useState<boolean>(false);

    return (
        <WrapperThemeComponent>
            <Button
                onClick={(e: MouseEvent<HTMLButtonElement>) => {
                    setAnchor(e.currentTarget);
                    setOpen(true);
                }}
            >Open Popover</Button>
            <Popover
                {...args}
                arrow={args.arrow}
                open={open}
                anchorEl={anchor}
                onClose={() => {
                    setAnchor(null);
                    setOpen(false);
                }}
                placement={args.placement}
                paperProps={{
                    borderRadius: 0
                }}
                paperClasses='p-select-user-tooltip'

            >
                <Text as='h4' marginBottom={0} pxy={2} textAlign='center'>
                    Hola mundo, Soy David Sanchez Dorregaray
                </Text>
            </Popover>
        </WrapperThemeComponent >
    );
};

export const Basic = Template.bind({});
Basic.storyName = "Popover";
Basic.args = {
    p: "c-modal",
    open: false,
    disablePortal: false,
    hideBackdrop: true,
    staticBackdrop: false,
    disableScrollLock: false,
    keepMounted: true,

    arrow: true,
    placement: "bottom-center"
};