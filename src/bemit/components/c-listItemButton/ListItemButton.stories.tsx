import { WrapperThemeComponent } from '@stories/WrapperThemeComponent';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Avatar from '../c-avatar/Avatar';
import IconButton from '../c-iconButton/IconButton';
import Notification from '../c-icons/icons/Notification';
import ListItem from '../c-listItem/ListItem';
import ListItemAvatar from '../c-listItemAvatar/ListItemAvatar';
import ListItemText from '../c-listItemText/ListItemText';
import ListItemButton from './ListItemButton';

export default {
    title: "Components/Lists/ListItemButton",
    component: ListItemButton,
    argTypes: {
        dense: {
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: false }
            },
            control: "boolean",
            description: "Reduce vertical padding."
        },
        alignItems: {
            table: {
                type: { summary: "start | center" },
                defaultValue: { summary: "center" }
            },
            control: "select",
            options: ["start", "center"],
            description: "Align children of item."
        },
        disableGutters: {
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: false }
            },
            control: "boolean",
            description: " Remove horizontal padding."
        },
        disablePadding: {
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: false }
            },
            control: "boolean",
            description: " Remove padding."
        },
        divider: {
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: false }
            },
            control: "boolean",
            description: " Add divider."
        },
        selected: {
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: false }
            },
            control: "boolean",
            description: "Selected item."
        },
        disabled: {
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: false }
            },
            control: "boolean",
            description: "Disabled item."
        },
        secondaryAction: {
            table: {
                category: "ListSubHeader component properties",
                type: { summary: "boolean" },
                defaultValue: { summary: "<IconButton edge='end'><Notification /></IconButton>" }
            },
            control: "boolean",
            description: "SecondaryAction of the ListItem component"
        }
    }
} as ComponentMeta<typeof ListItemButton>;

const Template: ComponentStory<typeof ListItemButton> =
    (args) =>
        <WrapperThemeComponent
            theme={args.darkmode} style={{ width: "300px", background: "white", border: "1px solid var(--gray-400)" }}>
            {
                [1, 2, 3].map(i => (
                    <ListItem
                        key={i}
                        disablePadding
                        secondaryAction={
                            args.secondaryAction &&
                            <IconButton edge='end'>
                                <Notification />
                            </IconButton>
                        }
                    >
                        <ListItemButton
                            dense={args.dense}
                            selected={i === 1 && args.selected}
                            disabled={i === 2 && args.disabled}
                            divider={args.divider}
                            alignItems={args.alignItems}
                            disableGutters={args.disableGutters}
                            disablePadding={args.disablePadding}
                        >
                            <ListItemAvatar>
                                <Avatar
                                    size='large'
                                    src='https://erp-sanchez-images.s3.us-east-2.amazonaws.com/Collaborators/6213bce7bad02124df7ad8b1-1645464118361.jpg'
                                />
                            </ListItemAvatar>
                            <ListItemText>
                                {
                                    i === 1 && args.selected ?
                                        'Selected' : (
                                            i === 2 && args.disabled ?
                                                'Disabled' : 'Item'
                                        )
                                }
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                ))
            }
        </WrapperThemeComponent>;

export const Basic = Template.bind({});
Basic.storyName = "ListItemButton";
Basic.args = {
    dense: false,
    alignItems: "center",
    disableGutters: false,
    disablePadding: false,
    secondaryAction: true,
    divider: true,
    selected: false,
    disabled: false
};