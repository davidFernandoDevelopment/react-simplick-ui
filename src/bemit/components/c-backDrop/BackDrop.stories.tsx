import { WrapperThemeComponent } from '@stories/WrapperThemeComponent';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Text from '../c-text/Text';

import BackDrop from './BackDrop';

export default {
    title: "Components/Modal/BackDrop",
    component: BackDrop,
    argTypes: {
        open: {
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: false }
            },
            control: "boolean",
            description: "Open the BackDrop"
        },
        invisible: {
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: false }
            },
            control: "boolean",
            description: "Invisble the BackDrop"
        }
    }
} as ComponentMeta<typeof BackDrop>;

const Template: ComponentStory<typeof BackDrop> =
    (args) =>
        <WrapperThemeComponent
            style={{ position: "relative" }}
        >
            <BackDrop
                open={args.open}
                invisible={args.invisible}
            >
                <Text
                    sx={{ themeColor: "primary" }}
                    style={{ color: `${args.invisible ? "var(--dark)" : "white"}` }}
                >
                    Hola mundo
                </Text>
            </BackDrop>
        </WrapperThemeComponent >;
export const Basic = Template.bind({});
Basic.storyName = "BackDrop";
Basic.args = {
    open: false,
    invisible: false
};