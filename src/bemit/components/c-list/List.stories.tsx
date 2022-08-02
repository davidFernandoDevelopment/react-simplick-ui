import { WrapperThemeComponent } from '@stories/WrapperThemeComponent';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import List from './List';
import ListSubHeader from '../c-listSubHeader/ListSubHeader';
import ListItem from '../c-listItem/ListItem';
import IconButton from '../c-iconButton/IconButton';
import Notification from '../c-icons/icons/Notification';
import ListItemButton from '../c-listItemButton/ListItemButton';
import ListItemAvatar from '../c-listItemAvatar/ListItemAvatar';
import Avatar from '../c-avatar/Avatar';
import ListItemText from '../c-listItemText/ListItemText';
import Divider from '../c-divider/Divider';
import MoreVert from '../c-icons/icons/i-moreVert/MoreVert';

export default {
    title: "Components/Lists/List",
    component: List,
    argTypes: {
        dense: {
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: false }
            },
            control: "boolean",
            description: "Reduce vertical padding."
        },
        disablePadding: {
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: false }
            },
            control: "boolean",
            description: " Remove padding."
        },
        subheader: {
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: "true" }
            },
            control: "boolean",
            description: "Add a title to a list of items."
        },
        inset: {
            table: {
                category: "Props of ListSubHeader",
                type: { summary: "boolean" },
                defaultValue: { summary: "true" }
            },
            control: "boolean",
            if: { arg: "subheader" },
            description: "Add a padding to the left so that it aligns with the text of the items."
        },
        disableSticky: {
            table: {
                category: "ListSubHeader component properties",
                type: { summary: "boolean" },
                defaultValue: { summary: "true" }
            },
            control: "boolean",
            if: { arg: "subheader" },
            description: "Disable sticky positioning of ListSubHeader component."
        },
        disableGutters: {
            table: {
                category: "Props of ListSubHeader",
                type: { summary: "boolean" },
                defaultValue: { summary: "true" }
            },
            control: "boolean",
            if: { arg: "subheader" },
            description: "Remove horizontal padding."
        }
    }
} as ComponentMeta<typeof List>;
const emails = [
    "username@gmail.com", "user02@gmail.com",
    "username03@gmail.com", "user04@gmail.com",
    "username05@gmail.com", "user06@gmail.com",
];

const Template: ComponentStory<typeof List> =
    (args) =>
        <WrapperThemeComponent
            theme={args.darkmode}
            style={{
                width: "360px",
                height: "300px",
                overflow: "auto",
                background: "white"
            }}
        >
            <nav>
                <List
                    dense={args.dense}
                    disablePadding={args.disablePadding}
                    subheader={
                        args.subheader &&
                        <ListSubHeader
                            inset={args.inset}
                            disableSticky={args.disableSticky}
                            disableGutters={args.disableGutters}
                        >
                            Perfil
                        </ListSubHeader>
                    }
                >
                    {
                        emails.map((email: string, i: number) => (
                            <ListItem
                                disablePadding
                                key={i}
                                secondaryAction={
                                    <IconButton edge='end' size="small">
                                        <MoreVert />
                                    </IconButton>
                                }
                            >
                                <ListItemButton>
                                    <ListItemAvatar>
                                        <Avatar
                                            src='https://avatars.githubusercontent.com/u/64740931'
                                        />
                                    </ListItemAvatar>
                                    <ListItemText>
                                        {email}
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </nav>
            <Divider />
            <nav>
                <List
                    dense={args.dense}
                    disablePadding={args.disablePadding}
                    subheader={
                        args.subheader &&
                        <ListSubHeader
                            inset={args.inset}
                            disableSticky={args.disableSticky}
                            disableGutters={args.disableGutters}
                        >
                            Perfil 1
                        </ListSubHeader>
                    }
                >
                    {
                        emails.map((email: string, i: number) => (
                            <ListItem
                                key={i}
                                secondaryAction={
                                    <IconButton edge='end' size="small">
                                        <Notification />
                                    </IconButton>
                                }
                            >
                                <ListItemAvatar>
                                    <Avatar
                                        src='https://avatars.githubusercontent.com/u/64740931'
                                    />
                                </ListItemAvatar>
                                <ListItemText>
                                    {email}
                                </ListItemText>
                            </ListItem>
                        ))
                    }
                </List>
            </nav>
        </WrapperThemeComponent>;

export const Basic = Template.bind({});
Basic.storyName = "List";
Basic.args = {
    dense: false,
    disablePadding: false,
    subheader: true,
    inset: true,
    disableSticky: false,
    disableGutters: false
};