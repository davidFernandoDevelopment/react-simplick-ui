import { ComponentMeta, ComponentStory } from '@storybook/react';

import '../../main.css';
import { TouchRipple } from './TouchRipple';


export default {
    title: 'Components/Button/TouchRipple',
    component: TouchRipple,
    argTypes: {
        centerRipple: {
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: false }
            },
            description: "The Ripple Of The TouchRipple Component Will Appear Centered"
        }
    }
} as ComponentMeta<typeof TouchRipple>;

const Template: ComponentStory<typeof TouchRipple> =
    (args) =>
        <div
            style={{
                position: 'relative',
                display: 'block',
                width: '200px',
                height: '200px',
                margin: 'auto',
                border: '1px solid red'
            }}
        >
            <TouchRipple {...args} />
        </div>;

export const Basic = Template.bind({});
Basic.args = {
    centerRipple: false
};