import { WrapperThemeComponent } from '@stories/WrapperThemeComponent';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Paper from './Paper';

export default {
    "title": "Components/Paper",
    component: Paper,
    argTypes: {
        variant: {
            table: {
                type: { summary: "outline | elevation" },
                defaultValue: { summary: "elevation" }
            },
            control: "radio",
            description: "Variant with border or shadow."
        },
        square: {
            table: {
                type: { summary: "boolean" },
                defaultValue: { summary: false }
            },
            control: "boolean",
            description: "Remove the component's border-radius."
        },
        elevation: {
            table: {
                defaultValue: { summary: 1 }
            },
            if: { arg: "variant", eq: "elevation" },
            description: "Shading level is used only if the variant is elevation"
        }
    }
} as ComponentMeta<typeof Paper>;

const Template: ComponentStory<typeof Paper> =
    (args) =>
        <WrapperThemeComponent>
            <Paper
                square={args.square}
                variant={args.variant}
                elevation={args.elevation}
                style={{ width: "150px", height: "150px" }}
            />
        </WrapperThemeComponent>;

export const Basic = Template.bind({});
Basic.storyName = "Paper";
Basic.args = {
    variant: "elevation",
    square: false,
    elevation: 1
};