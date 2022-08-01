import { WrapperThemeComponent } from '@stories/WrapperThemeComponent';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import IconButton from '../c-iconButton/IconButton';
import Notification from '../c-icons/icons/Notification';
import User from '../c-icons/icons/User';
import CardActions from './CardActions';

export default {
    title: "Components/Cards/CardActions",
    component: CardActions,
    argTypes: {
        disableGap: {
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: false }
            },
            control: "boolean",
            description: "Remove the padding."
        },
        spacing: {
            table: {
                defaultValue: { summary: 1 }
            },
            description: "CarActions Padding Spacing."
        },
        gap: {
            table: {
                defaultValue: { summary: 1 }
            },
            description: "Separation between internal elements."
        }
    }
} as ComponentMeta<typeof CardActions>;

const Template: ComponentStory<typeof CardActions> =
    (args) =>
        <WrapperThemeComponent style={{ width: "250px", border: "1px solid var(--border-color)" }}>
            <CardActions
                disableGap={args.disableGap}
                spacing={args.spacing}
                gap={args.gap}
            >
                <IconButton>
                    <User />
                </IconButton>
                <IconButton>
                    <Notification />
                </IconButton>
            </CardActions>
        </WrapperThemeComponent>;

export const Basic = Template.bind({});
Basic.storyName = "CardActions";
Basic.args = {
    disableGap: false,
    spacing: 1,
    gap: 1
};