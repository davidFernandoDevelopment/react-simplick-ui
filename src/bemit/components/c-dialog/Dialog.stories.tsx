import { ComponentMeta, ComponentStory } from '@storybook/react';

import { WrapperThemeComponent } from '@stories/WrapperThemeComponent';
import { Dialog } from '../c-dialog';
import Button from '../c-button/Button';

export default {
    title: "Components/Dialog/Dialog",
    component: Dialog,
    argTypes: {
        maxWidth: {
            table: {
                type: { summary: "sm | md | lg | xl | xxl" },
                defaultValue: { summary: "Use the maximum widths for each breakpoint." }
            },
            control: "select",
            options: ["sm", "md", "lg", "xl", "xxl"],
            description: "Dialog component maximum width."
        },
        p: {
            table: {
                type: { summary: "string" },
                defaultValue: { summary: "c-dialog" }
            },
            description: "Name of the element that the Dialog will use.",
        },
        open: {
            table: {
                category: "Inherit from Modal",
                type: { summary: "boolean" },
                defaultValue: { summary: false }
            },
            control: "disable",
            description: "Open the Modal"
        },
        container: {
            table: {
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
        disablePortal: {
            table: {
                category: "Inherit from Modal",
                type: { summary: "boolean" },
                defaultValue: { summary: false }
            },
            control: "boolean",
            description: "Disable Portal"
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
            control: "boolean",
            description: "Disable the option to close the modal when the BackDrop is clicked."
        },
        disableScrollLock: {
            table: {
                category: "Inherit from Modal",
                type: { summary: "boolean" },
                defaultValue: { summary: false }
            },
            control: "boolean",
            description: "Disable scroll lock."
        },
        disableAnimationContent: {
            table: {
                category: "Inherit from Modal",
                type: { summary: "boolean" },
                defaultValue: { summary: true }
            },
            control: "disable",
            description: "Disable default animation."
        },
        keepMounted: {
            table: {
                category: "Inherit from Modal",
                type: { summary: "boolean" },
                defaultValue: { summary: false }
            },
            control: "boolean",
            description: "Keeps the modal component mounted on the dom when it closes."
        }
    }
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => {
    const { open, onClose, onOpen } = Dialog.useDialog();

    return (
        <WrapperThemeComponent>
            <Button onClick={onOpen}>Open Dialog</Button>
            <Dialog
                open={open}
                onClose={onClose}
                maxWidth={args.maxWidth}
                hideBackdrop={args.hideBackdrop}
                staticBackdrop={args.staticBackdrop}
                disableScrollLock={args.disableScrollLock}
                keepMounted={args.keepMounted}
                disablePortal={args.disablePortal}
                p={args.p}
            >
                <Dialog.Title closeButton>Eliminar producto</Dialog.Title>
                <Dialog.Content divider>¿Estas seguro de eliminar producto?</Dialog.Content>
                <Dialog.Actions>
                    <Button themeColor="danger" fullWidth>Aceptar</Button>
                    <Button fullWidth onClick={onClose}>Cancelar</Button>
                </Dialog.Actions>
            </Dialog>
        </WrapperThemeComponent>
    );
};
export const Basic = Template.bind({});
Basic.storyName = "Dialog";
Basic.args = {
    p: "c-dialog",
    hideBackdrop: false,
    disablePortal: false,
    staticBackdrop: false,
    disableScrollLock: false,
    disableAnimationContent: false,
    keepMounted: false,
};