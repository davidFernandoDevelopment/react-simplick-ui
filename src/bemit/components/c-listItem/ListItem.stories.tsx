import { WrapperThemeComponent } from '@stories/WrapperThemeComponent';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Avatar from '../c-avatar/Avatar';
import IconButton from '../c-iconButton/IconButton';
import Notification from '../c-icons/icons/Notification';
import ListItemAvatar from '../c-listItemAvatar/ListItemAvatar';
import ListItemText from '../c-listItemText/ListItemText';
import ListItem from './ListItem';

export default {
    title: "Components/Lists/ListItem",
    component: ListItem,
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
            description: "Remove horizontal padding."
        },
        disablePadding: {
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: false }
            },
            control: "boolean",
            description: " Remove padding."
        },
        secondaryAction: {
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: "<IconButton edge='end'><Notification /></IconButton>" }
            },
            control: "boolean",
            description: "SecondaryAction of the ListItem component"
        }
    }
} as ComponentMeta<typeof ListItem>;

const Template: ComponentStory<typeof ListItem> =
    (args) =>
        <WrapperThemeComponent
            theme={args.darkmode} style={{ width: "300px", background: "white", border: "1px solid var(--gray-400)" }}>
            <ListItem
                dense={args.dense}
                alignItems={args.alignItems}
                disableGutters={args.disableGutters}
                disablePadding={args.disablePadding}
                secondaryAction={
                    args.secondaryAction &&
                    <IconButton edge='end'>
                        <Notification />
                    </IconButton>
                }
            >
                <ListItemAvatar>
                    <Avatar
                        size='large'
                        src='https://erp-sanchez-images.s3.us-east-2.amazonaws.com/Collaborators/6213bce7bad02124df7ad8b1-1645464118361.jpg'
                    />
                </ListItemAvatar>
                <ListItemText
                
                >
                    Item
                </ListItemText>
            </ListItem>
        </WrapperThemeComponent>;

export const Basic = Template.bind({});
Basic.storyName = "ListItem";
Basic.args = {
    dense: false,
    alignItems: "center",
    disableGutters: false,
    disablePadding: false,
    secondaryAction: true
};