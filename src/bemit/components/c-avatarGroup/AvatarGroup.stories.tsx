import { WrapperThemeComponent } from '@stories/WrapperThemeComponent';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Avatar from '../c-avatar/Avatar';

import AvatarGroup from './AvatarGroup';


export default {
    title: 'Components/Avatar/AvatarGroup',
    component: AvatarGroup,
    argTypes: {
        max: {
            table: {
                type: { summary: "number" },
                defaultValue: { summary: 4 }
            },
            control: {
                type: "number",
                min: 2,
                max: 10
            },
            description: "Maximum amount of avatar to show (min = 2 and max = 10)"
        },
        total: {
            table: {
                type: { summary: "number" },
                defaultValue: { summary: 10 }
            },
            control: {
                type: "number",
                min: 2
            },
            description: "Total avatar number, default value is the number of children"
        },
        variant: {
            table: {
                type: { summary: "circle | square" },
                defaultValue: { summary: "circle" }
            },
            control: "radio",
            options: ["circle", "square"],
            description: "Avatars variant"
        },
        size: {
            table: {
                type: { summary: "small | normal | large | xlarge" },
                defaultValue: { summary: "normal" },
            },
            control: 'select',
            options: ["small", "normal", "large", "xlarge"],
            description: "Avatar Sizes"
        },
        spacing: {
            table: {
                type: { summary: "number" },
                defaultValue: { summary: 1 }
            },
            control: {
                type: "number",
                min: 0,
                max: 2,
                step: 0.25
            },
            description: "spacing between avatars (min: 0 and max{2 - 16px})"
        },
        darkmode: {
            table: {
                category: "Try in dark mode",
                type: { summary: "ligth | dark" },
                defaultValue: { summary: "light" }
            },
            control: 'radio',
            options: ["dark", "light"],
            description: "Component test in dark mode"
        },
    }
} as ComponentMeta<typeof AvatarGroup>;

const Template: ComponentStory<typeof AvatarGroup> =
    (args) =>
        <WrapperThemeComponent theme={args.darkmode}>
            <AvatarGroup
                max={args.max}
                size={args.size}
                total={args.total}
                variant={args.variant}
                spacing={args.spacing}
            >
                {
                    ['david', 'felix',
                        'lucia', 'rosa',
                        'pedro', 'juan',
                        'diego', 'mario',
                        'jobs', 'lesli'
                    ].map(name => (
                        <Avatar key={name}>{name}</Avatar>
                    ))
                }
            </AvatarGroup>
        </WrapperThemeComponent>;

export const Basic = Template.bind({});
Basic.args = {
    total: 10,
    max: 2,
    spacing: 1,
    size: "normal",
    variant: "circle",
};
