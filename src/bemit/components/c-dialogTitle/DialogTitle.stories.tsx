import { WrapperThemeComponent } from '@stories/WrapperThemeComponent';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import DialogTitle from './DialogTitle';
import Paper from '../c-paper/Paper';

export default {
    title: "Components/Dialog/DialogTitle",
    component: DialogTitle,
    gap: {
        table: {
            defaultValue: { summary: 1 }
        },
        description: "Gap spacing"
    },
    spacing: {
        table: {
            defaultValue: { summary: 2 }
        },
        description: "Padding spacing"
    },
    closeButton: {
        table: {
            type: { summary: "boolean" },
            defaultValue: { summary: true }
        },
        control: "boolean",
        description: "Show close button."
    }
} as ComponentMeta<typeof DialogTitle>;

const Template: ComponentStory<typeof DialogTitle> = (args) =>
    <WrapperThemeComponent style={{ width: "300px" }}>
        <Paper>
            <DialogTitle
                gap={args.gap}
                spacing={args.spacing}
                closeButton={args.closeButton}
            >
                Soy un DialogTitle
            </DialogTitle>
        </Paper>
    </WrapperThemeComponent>;

export const Basic = Template.bind({});
Basic.storyName = "DialogTitle";
Basic.args = {
    gap: 1,
    spacing: 2,
    closeButton: true
};