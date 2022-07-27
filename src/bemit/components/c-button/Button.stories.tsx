import { ComponentMeta, ComponentStory } from '@storybook/react';
import { WrapperThemeComponent } from '../../../stories/WrapperThemeComponent';

import '../../main.css';
import Notification from '../c-icons/icons/Notification';
import { Button } from './Button';


export default {
    title: 'Components/Button/Button',
    component: Button,
    argTypes: {
        size: { control: 'select', options: ["small", "normal", "large", "xlarge"] },
        themeColor: { control: 'select', options: ["primary", "secondary", "success", "info", "warning", "danger", "title"] },
        disabled: { control: 'boolean' },
        fullWidth: { control: 'boolean' },
        centerRipple: { control: 'boolean' },
        disableRipple: { control: 'boolean' },
        disableElevation: { control: 'boolean' },
        startIcon: { control: 'boolean' },
        endIcon: { control: 'boolean' },
        darkmode: { control: 'radio', options: ["dark", "light"] },
        as: { table: { disable: true } },
        sx: { table: { disable: true } },
        ref: { table: { disable: true } },
        style: { table: { disable: true } },
        className: { table: { disable: true } },
    }
} as ComponentMeta<typeof Button>;


const Template: ComponentStory<typeof Button> =
    (args) =>
        <WrapperThemeComponent theme={args.darkmode}>
            <Button
                {...args}
                startIcon={args.startIcon && <Notification />}
                endIcon={args.endIcon && <Notification />}
            >
            </Button>
        </WrapperThemeComponent>;

export const Basic = Template.bind({});
Basic.args = {
    size: 'normal',
    variant: 'default',
    children: 'default text',
    themeColor: 'primary'
};