import { ComponentMeta, ComponentStory } from '@storybook/react';

import '../../main.css';
import { IconButton } from './IconButton';
import Notification from '../c-icons/icons/Notification';
import { WrapperThemeComponent } from '../../../stories/WrapperThemeComponent';



export default {
    title: 'Components/Button/IconButton',
    component: IconButton,
    argTypes: {
        size: { control: 'select', options: ["small", "normal", "large", "xlarge"] },
        themeColor: { control: 'select', options: ["primary", "secondary", "success", "info", "warning", "danger", "title"] },
        disabled: { control: 'boolean' },
        disableRipple: { control: 'boolean' },
        darkmode: { control: 'radio', options: ["dark", "light"] },
        as: { table: { disable: true } },
        sx: { table: { disable: true } },
        ref: { table: { disable: true } },
        style: { table: { disable: true } },
        className: { table: { disable: true } },
    }
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
    <WrapperThemeComponent theme={args.darkmode}>
        <IconButton {...args}>
            <Notification />
        </IconButton>
    </WrapperThemeComponent>
);

export const Basic = Template.bind({});
Basic.args = {
    size: 'normal',
    variant: 'circle',
    themeColor: 'primary'
};