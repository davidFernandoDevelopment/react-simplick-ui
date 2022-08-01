import { WrapperThemeComponent } from '@stories/WrapperThemeComponent';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Avatar from '../c-avatar/Avatar';
import IconButton from '../c-iconButton/IconButton';
import Notification from '../c-icons/icons/Notification';
import CardHeader from './CardHeader';

export default {
    title: "Components/Cards/CardHeader",
    component: CardHeader,
    argTypes: {
        title: {
            table: {
                type: { summary: "string | ReactNode" },
                defaultValue: { summary: "string" }
            },
            control: "text",
            description: "Main title of the cardheader component"
        },
        avatar: {
            table: {
                type: { summary: "ReactNode" },
                defaultValue: { summary: "<Avatar />" }
            },
            control: "boolean",
            description: "Main Avatar of the cardheader component"
        },
        subtitle: {
            table: {
                type: { summary: "string | ReactNode" },
                defaultValue: { summary: "string" }
            },
            control: "text",
            description: "Main subtitle of the cardheader component"
        },
        action: {
            table: {
                type: { summary: "ReactNode" },
                defaultValue: { summary: "<IconButton />" }
            },
            control: "boolean",
            description: "Node representing the main action"
        },
        spacing: {
            table: {
                defaultValue: { summary: 2 }
            },
            description: "CarHeader padding spacing"
        },
        gap: {
            table: {
                defaultValue: { summary: 2 }
            },
            description: "CarHeader Gap spacing"
        }
    }
} as ComponentMeta<typeof CardHeader>;

const Template: ComponentStory<typeof CardHeader> =
    (args) =>
        <WrapperThemeComponent
            theme={args.darkmode} style={{ width: "300px", background: "white", border: "1px solid var(--gray-400)" }}>
            <CardHeader
                avatar={
                    args.avatar && <Avatar
                        size="large"
                        alt="david"
                        src="https://avatars.githubusercontent.com/u/64740931"
                    />
                }
                gap={args.gap}
                spacing={args.spacing}
                title={args.title}
                subtitle={args.subtitle}
                action={
                    args.action &&
                    <IconButton edge='end'>
                        <Notification />
                    </IconButton>
                }
            />
        </WrapperThemeComponent>;

export const Basic = Template.bind({});
Basic.storyName = "CardHeader";
Basic.args = {
    title: "David Sanchez",
    subtitle: "david@gmail.com",
    avatar: true,
    action: true,
    spacing: 2,
    gap: 2
};