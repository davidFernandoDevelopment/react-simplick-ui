import { WrapperThemeComponent } from '@stories/WrapperThemeComponent';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import DialogContent from './DialogContent';
import Paper from '../c-paper/Paper';
import DialogTitle from '../c-dialogTitle/DialogTitle';

export default {
    title: "Components/Dialog/DialogContent",
    component: DialogContent,
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
    divider: {
        table: {
            type: { summary: "boolean" },
            defaultValue: { summary: true }
        },
        control: "boolean",
        description: "Show close button."
    }
} as ComponentMeta<typeof DialogContent>;

const Template: ComponentStory<typeof DialogContent> = (args) =>
    <WrapperThemeComponent style={{ width: "300px" }}>
        <Paper>
            <DialogTitle spacing={1} closeButton>Detalle del producto</DialogTitle>
            <DialogContent
                gap={args.gap}
                spacing={args.spacing}
                divider={args.divider}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolore, voluptatum repellendus repudiandae totam nulla doloribus libero sapiente repellat facere molestiae praesentium nesciunt odio voluptatibus ab rerum deleniti laudantium dignissimos.
            </DialogContent>
        </Paper>
    </WrapperThemeComponent>;

export const Basic = Template.bind({});
Basic.storyName = "DialogContent";
Basic.args = {
    gap: 1,
    spacing: 2,
    divider: true
};