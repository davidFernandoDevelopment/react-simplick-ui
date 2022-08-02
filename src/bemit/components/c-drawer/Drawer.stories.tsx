import { WrapperThemeComponent } from '@stories/WrapperThemeComponent';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';

import Avatar from '../c-avatar/Avatar';
import Button from '../c-button/Button';
import { useDialog } from '../c-dialog/useDialog';
import Divider from '../c-divider/Divider';
import IconButton from '../c-iconButton/IconButton';
import Notification from '../c-icons/icons/Notification';
import List from '../c-list/List';
import ListItem from '../c-listItem/ListItem';
import ListItemAvatar from '../c-listItemAvatar/ListItemAvatar';
import ListItemButton from '../c-listItemButton/ListItemButton';
import ListItemText from '../c-listItemText/ListItemText';
import ListSubHeader from '../c-listSubHeader/ListSubHeader';
import Text from '../c-text/Text';

import Drawer from './Drawer';


export default {
    title: "Components/Drawer",
    component: Drawer,
    argTypes: {
        anchor: {
            table: {
                type: { summary: "top | right | bottom | left" },
                default: { summary: "bottom" }
            },
            control: "select",
            options: ["top", "right", "bottom", "left"],
            description: "Indicates the side where the Drawer will appear."
        },
        variant: {
            table: {
                type: { summary: "permanent | temporary | persistent" },
                defaultValue: { summary: "temporary" }
            },
            control: "select",
            options: ["permanent", "temporary", "persistent"],
            description: "Drawer component type."
        },
        swipeableEdge: {
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: false }
            },
            control: "boolean",
            description: "Add the Sliding Border."
        },
        swipeableEdgeExtra: {
            table: {
                type: { summary: "ReactNode" },
                defaultValue: { summary: false }
            },
            if: { arg: "swipeableEdge" },
            control: "boolean",
            description: "Swipe border table."
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
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (args) => {
    const { open, onClose, onOpen } = useDialog();

    return (
        <WrapperThemeComponent theme={args.darkmode}>
            <Button onClick={onOpen}>
                Open Drawer
            </Button>
            <Drawer
                hideBackdrop={args.hideBackdrop}
                staticBackdrop={args.staticBackdrop}
                disableScrollLock={args.disableScrollLock}
                keepMounted={args.keepMounted}
                disablePortal={args.disablePortal}

                paperProps={args.paperProps}
                anchor={args.anchor}
                open={open}
                onClose={onClose}
                swipeableEdge={args.swipeableEdge}
                swipeableEdgeExtra={
                    args.swipeableEdgeExtra &&
                    <Text as='h4' marginBottom={0} pxy={2}>51 resultados</Text>

                }
            >
                <nav>
                    <List
                        sx={{ minWidth: 250 }}
                        subheader={
                            <ListSubHeader >
                                Perfil
                            </ListSubHeader>
                        }
                    >
                        {
                            [1, 2, 3, 4, 5].slice(1).map((_, i: number) => (
                                <ListItem
                                    disablePadding
                                    key={i}
                                    secondaryAction={
                                        <IconButton edge='end'>
                                            <Notification />
                                        </IconButton>
                                    }
                                >
                                    <ListItemButton>
                                        <ListItemAvatar>
                                            <Avatar
                                                size='large'
                                                src='https://avatars.githubusercontent.com/u/64740931'
                                            />
                                        </ListItemAvatar>
                                        <ListItemText>
                                            Item
                                        </ListItemText>
                                    </ListItemButton>
                                </ListItem>
                            ))
                        }
                    </List>
                </nav>
            </Drawer >
        </WrapperThemeComponent >
    );
};


export const Basic = Template.bind({});
Basic.storyName = "Drawer";
Basic.args = {
    anchor: "bottom",
    variant: "temporary",
    swipeableEdge: false,
    swipeableEdgeExtra: false,
    hideBackdrop: false,
    disablePortal: false,
    staticBackdrop: false,
    disableScrollLock: false,
    disableAnimationContent: false,
    keepMounted: false,
};