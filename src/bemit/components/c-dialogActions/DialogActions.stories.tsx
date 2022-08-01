import { WrapperThemeComponent } from '@stories/WrapperThemeComponent';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import DialogActions from './DialogActions';
import Paper from '../c-paper/Paper';
import Button from '../c-button/Button';


export default {
    title: "Components/Dialog/DialogActions",
    component: DialogActions,
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
    }
} as ComponentMeta<typeof DialogActions>;

const Template: ComponentStory<typeof DialogActions> = (args) =>
    <WrapperThemeComponent style={{ width: "300px" }}>
        <Paper>
            <DialogActions
                gap={args.gap}
                spacing={args.spacing}
            >
                <Button fullWidth>Aceptar</Button>
                <Button fullWidth>Cancelar</Button>
            </DialogActions>
        </Paper>
    </WrapperThemeComponent>;

export const Basic = Template.bind({});
Basic.storyName = "DialogActions";
Basic.args = {
    gap: 1,
    spacing: 2,
};