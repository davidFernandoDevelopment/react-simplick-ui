import { ComponentMeta, ComponentStory } from '@storybook/react';

import '../../main.css';
import { TouchRipple } from './TouchRipple';


export default {
    title: 'Components/Button/TouchRipple',
    component: TouchRipple
} as ComponentMeta<typeof TouchRipple>;

const Template: ComponentStory<typeof TouchRipple> =
    (args) =>
        <div
            style={{
                position: 'relative',
                display: 'block',
                width: '200px',
                height: '200px',
                border: '1px solid red'
            }}
        >
            <TouchRipple {...args} />
        </div>;

export const Basic = Template.bind({});
Basic.args = {
};