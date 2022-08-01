import { WrapperThemeComponent } from '@stories/WrapperThemeComponent';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import CardMedia from './CardMedia';

export default {
    title: "Components/Cards/CardMedia",
    component: CardMedia,
    argTypes: {
        variant: {
            table: {
                type: { summary: "ratio-9-16 | default" },
                defaultValue: { summary: "ratio-9-16" }
            },
            control: "select",
            options: ["ratio-9-16", "default"]
        },
        darkmode: {
            table: {
                category: "Try in dark mode",
                type: { summary: "ligth | dark" },
                defaultValue: { summary: "light" }
            },
            control: 'radio',
            options: ["dark", "light"],
            description: "Component test in dark mode"
        },
        as: { table: { disable: true } },
        sx: { table: { disable: true } },
        ref: { table: { disable: true } },
        style: { table: { disable: true } },
        className: { table: { disable: true } },
    }
} as ComponentMeta<typeof CardMedia>;

const Template: ComponentStory<typeof CardMedia> =
    (args) =>
        <WrapperThemeComponent
            theme={args.darkmode} style={{ width: "250px", background: "white" }}>
            <CardMedia
                variant={args.variant}
                src="https://picsum.photos/id/0/367/267"
                alt="example"
            />
        </WrapperThemeComponent>;

export const Basic = Template.bind({});
Basic.storyName = "CardMedia";
Basic.args = {
    darkmode: "light",
    variant: "ratio-9-16"
};