import { WrapperThemeComponent } from '@stories/WrapperThemeComponent';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Modal from './Modal';
import Card from '../c-card/Card';
import CardContent from '../c-cardContent/CardContent';
import { useState } from 'react';
import Button from '../c-button/Button';

export default {
    title: "Components/Modal/Modal",
    component: Modal,
    argTypes: {
        p: {
            table: {
                type: { summary: "string" },
            },
            description: "Name of the element that the modal will use.",
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
                type: { summary: "boolean" },
                defaultValue: { summary: false }
            },
            control: "boolean",
            description: "Disable Portal"
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
        hideBackdrop: {
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: false }
            },
            control: "boolean",
            description: "Invisible The BackDrop"
        },
        staticBackdrop: {
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: false }
            },
            control: "boolean",
            description: "Disable the option to close the modal when the BackDrop is clicked."
        },
        disableScrollLock: {
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: false }
            },
            control: "boolean",
            description: "Disable scroll lock."
        },
        disableAnimationContent: {
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: false }
            },
            control: "boolean",
            description: "Disable default animation."
        },
        keepMounted: {
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: false }
            },
            control: "boolean",
            description: "Keeps the modal component mounted on the dom when it closes."
        }
    }
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
    const [open, setOpen] = useState(args.open);

    return (
        <WrapperThemeComponent>
            <Button
                onClick={() => setOpen(true)}
            >Open modal</Button>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                hideBackdrop={args.hideBackdrop}
                staticBackdrop={args.staticBackdrop}
                disableScrollLock={args.disableScrollLock}
                disableAnimationContent={args.disableAnimationContent}
                keepMounted={args.keepMounted}
                disablePortal={args.disablePortal}
                p={args.p}
            >
                <Card>
                    <CardContent>
                        Hola soy un modal
                    </CardContent>
                </Card>
            </Modal>
        </WrapperThemeComponent >
    );
};

export const Basic = Template.bind({});
Basic.storyName = "Modal";
Basic.args = {
    p: "c-modal",
    open: false,
    disablePortal: false,
    hideBackdrop: false,
    staticBackdrop: false,
    disableScrollLock: false,
    disableAnimationContent: false,
    keepMounted: false,
};