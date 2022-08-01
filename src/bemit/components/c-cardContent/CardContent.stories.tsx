import { WrapperThemeComponent } from '@stories/WrapperThemeComponent';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import CardContent from './CardContent';


export default {
    title: "Components/Cards/CardContent",
    component: CardContent,
    argTypes: {
        spacing: {
            table: {
                defaultValue: { summary: 2 }
            },
            description: "CarContent padding spacing"
        }
    }
} as ComponentMeta<typeof CardContent>;

const Template: ComponentStory<typeof CardContent> =
    (args) =>
        <WrapperThemeComponent style={{ maxWidth: '300px', border: "1px solid var(--gray-400)" }}>
            <CardContent spacing={args.spacing}>
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Dolorem, minus quis praesentium atque neque
                temporibus quo fugit illum, magnam laborum sunt.
                Cum odio error a tempora non! Molestiae, natus unde!
            </CardContent>
        </WrapperThemeComponent>;

export const Basic = Template.bind({});
Basic.storyName = "CardContent";
Basic.args = {
    spacing: 2
};
