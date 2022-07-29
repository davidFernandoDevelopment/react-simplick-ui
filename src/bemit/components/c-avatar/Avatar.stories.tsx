import { ComponentMeta, ComponentStory } from '@storybook/react';
import { WrapperThemeComponent } from '@stories/WrapperThemeComponent';

import '../../main.css';
import User from '../c-icons/icons/User';
import { Avatar } from './Avatar';


export default {
    title: 'Components/Avatars/Avatar',
    component: Avatar,
    argTypes: {
        variant: {
            control: "select",
            options: ["circle", "square"],
            table: {
                type: { summary: "circle | square" },
                defaultValue: { summary: "circle" }
            }
        },
        size: {
            table: {
                type: { summary: "small | normal | large | xlarge" },
                defaultValue: { summary: "normal" },
            },
            control: 'select',
            options: ["small", "normal", "large", "xlarge"]
        },
        fallback: {
            table: {
                type: { summary: 'ReactNode' },
                defaultValue: { summary: '<User/>' }
            },
            control: 'boolean'
        },
        darkmode: { control: 'radio', options: ["dark", "light"] },
        as: { table: { disable: true } },
        sx: { table: { disable: true } },
        ref: { table: { disable: true } },
        style: { table: { disable: true } },
        className: { table: { disable: true } },
    }
} as ComponentMeta<typeof Avatar>;


const Template: ComponentStory<typeof Avatar> =
    (args) =>
        <WrapperThemeComponent theme={args.darkmode}>
            <Avatar
                {...args}
                fallback={args.fallback && <User />}
            >
            </Avatar>
        </WrapperThemeComponent>;

export const Basic = Template.bind({});
Basic.args = {
    variant: 'circle',
    size: 'normal',
    src: '',
    alt: '',
    fallback: false,
};